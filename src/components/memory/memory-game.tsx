'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { defaultPairs, Pair } from './memory-data';
import MemoryCard, { CardModel } from './memory-card';

function shuffle<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCardsFromPairs(pairs: Pair[]): CardModel[] {
  // For each pair create two CardModel objects (could be left/right swapped)
  const cards: CardModel[] = [];
  pairs.forEach((p) => {
    const leftId = `${p.pairId}-A`;
    const rightId = `${p.pairId}-B`;
    // left
    cards.push({
      id: leftId,
      pairId: p.pairId,
      kind: p.left.type,
      content: p.left.content,
      flipped: false,
      matched: false,
    });
    // right
    cards.push({
      id: rightId,
      pairId: p.pairId,
      kind: p.right.type,
      content: p.right.content,
      flipped: false,
      matched: false,
    });
  });
  return shuffle(cards);
}

export default function MemoryGame({ pairs = defaultPairs }: { pairs?: Pair[] }) {
  // Initialize with unshuffled cards to avoid hydration mismatch
  const [cards, setCards] = useState<CardModel[]>(() => {
    // Build cards without shuffling on initial render
    const unshuffled: CardModel[] = [];
    pairs.forEach((p) => {
      const leftId = `${p.pairId}-A`;
      const rightId = `${p.pairId}-B`;
      unshuffled.push({
        id: leftId,
        pairId: p.pairId,
        kind: p.left.type,
        content: p.left.content,
        flipped: false,
        matched: false,
      });
      unshuffled.push({
        id: rightId,
        pairId: p.pairId,
        kind: p.right.type,
        content: p.right.content,
        flipped: false,
        matched: false,
      });
    });
    return unshuffled;
  });
  const [firstId, setFirstId] = useState<string | null>(null);
  const [secondId, setSecondId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Shuffle cards only on client side after mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    // Shuffle cards after component mounts on client
    setCards(shuffle(buildCardsFromPairs(pairs)));
  }, [pairs]);

  // start timer when first flip occurs
  useEffect(() => {
    if (startTime === null && cards.some((c) => c.flipped)) {
      setStartTime(Date.now());
      timerRef.current = window.setInterval(() => {
        setElapsed(Math.floor((Date.now() - (startTime ?? Date.now())) / 1000));
      }, 500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [cards, startTime]);

  // update elapsed properly when timer running
  useEffect(() => {
    if (startTime && timerRef.current) {
      // ensure elapsed reflects startTime
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [startTime]);

  // handle matching logic
  useEffect(() => {
    if (firstId && secondId) {
      const first = cards.find((c) => c.id === firstId)!;
      const second = cards.find((c) => c.id === secondId)!;

      setMoves((m) => m + 1);
      setBusy(true);

      if (first.pairId === second.pairId) {
        // match
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (c.pairId === first.pairId ? { ...c, matched: true, flipped: true } : c)));
          setFirstId(null);
          setSecondId(null);
          setBusy(false);
        }, 400);
      } else {
        // not match - flip back
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, flipped: false } : c)));
          setFirstId(null);
          setSecondId(null);
          setBusy(false);
        }, 800);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstId, secondId]);

  // check completion
  const finished = useMemo(() => cards.every((c) => c.matched), [cards]);

  useEffect(() => {
    if (finished && startTime) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }
  }, [finished, startTime]);

  function handleFlip(id: string) {
    if (busy) return;
    if (!startTime) {
      setStartTime(Date.now());
      timerRef.current = window.setInterval(() => {
        setElapsed(Math.floor((Date.now() - (startTime ?? Date.now())) / 1000));
      }, 500);
    }

    const clicked = cards.find((c) => c.id === id);
    if (!clicked || clicked.flipped || clicked.matched) return;

    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, flipped: true } : c)));

    if (!firstId) {
      setFirstId(id);
    } else if (!secondId && id !== firstId) {
      setSecondId(id);
    }
  }

  function handleRestart() {
    // reset all
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setStartTime(null);
    setElapsed(0);
    setMoves(0);
    setFirstId(null);
    setSecondId(null);
    setBusy(false);
    // Only shuffle on client side
    if (isMounted) {
      setCards(shuffle(buildCardsFromPairs(pairs)));
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Memory Match</span>
          </h2>
          <p className="text-lg text-muted-foreground">Một trò chơi thử thách trí nhớ chủ đề gia đình và xã hội.</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-sm">
            Moves: <span className="font-medium">{moves}</span>
          </div>
          <div className="text-sm">
            Time: <span className="font-medium">{elapsed}s</span>
          </div>
          <button className="px-3 py-1 bg-slate-200 rounded" onClick={handleRestart}>
            Restart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 justify-center">
        {cards.map((c) => (
          <MemoryCard key={c.id} card={c} onClick={handleFlip} />
        ))}
      </div>

      {finished && (
        <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded text-center">
          <div className="text-lg font-semibold">Chúc mừng — Bạn đã hoàn thành!</div>
          <div className="mt-1">
            Moves: {moves} — Time: {elapsed}s
          </div>
          <div className="mt-3">
            <button onClick={handleRestart} className="px-4 py-2 bg-green-600 text-white rounded">
              Chơi lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { useGameState } from '@/game/store';
import EventCard from './gameComponents/EventCard';
import SvgFillMask from './gameComponents/SvgFillMask';
import IconIndicator from './gameComponents/IconIndicator';
import type { Choice, EventNode } from '@/game/type';

const ICON_PATHS: Record<string, string> = {
  kinhTe: '/assets/rice.svg',
  doanKet: '/assets/hand.svg',
  anNinh: '/assets/shield.svg',
  niemTin: '/assets/star.svg',
};

const ICON_TITLE: Record<string, string> = {
  kinhTe: 'Kinh tế',
  doanKet: 'Đoàn kết',
  anNinh: 'An ninh',
  niemTin: 'Niềm tin',
};

export function GameCard() {
  const { currentNode, applyChoice, stats, gameEnd, resetGame } = useGameState();
  const [boundaryVisible, setBoundaryVisible] = useState(false);
  const [boundaryValue, setBoundaryValue] = useState(180);
  const [currentEvent, setCurrentEvent] = useState<EventNode | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [previewStats, setPreviewStats] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    if (gameEnd) {
      setShowDrawer(true);
    }
  }, [gameEnd]);

  if (!currentNode) {
    return (
      <section
        id="gamecard"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Trò chơi kết thúc</h2>
          <button
            onClick={() => {
              resetGame();
              setShowDrawer(false);
            }}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Chơi lại
          </button>
        </div>
      </section>
    );
  }

  const getImagePath = (imagePath: string | undefined) => {
    if (!imagePath) return '/assets/house.png';
    // Ensure path starts with /assets/
    if (imagePath.startsWith('/assets/')) {
      return imagePath;
    }
    // Handle any remaining old paths
    if (imagePath.includes('assets/')) {
      const match = imagePath.match(/assets\/(.+)$/);
      return match ? `/assets/${match[1]}` : '/assets/house.png';
    }
    return `/assets/${imagePath}`;
  };

  const eventText = Array.isArray(currentNode.text) ? currentNode.text.join('') : currentNode.text;

  return (
    <section id="gamecard" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {showDrawer && (
          <div
            className={`fixed bottom-6 right-6 
                        bg-card text-foreground 
                        px-5 py-5 rounded-xl shadow-2xl 
                        flex flex-col gap-3 z-50
                        transition-transform duration-500 ease-out
                        border border-primary/30
                        ${showDrawer ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'}
                    `}
          >
            <div className="text-lg font-semibold">Trò chơi kết thúc</div>

            <button
              onClick={() => {
                resetGame();
                setShowDrawer(false);
              }}
              className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90"
            >
              Chơi lại
            </button>

            <button
              onClick={() => {
                const element = document.getElementById('gamecard');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
            >
              Xem lại
            </button>
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Cân Bằng Nhà Ta</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Một trò chơi tương tác về gia đình Việt Nam thời kỳ chuyển mình
          </p>
        </div>

        <div className="flex flex-wrap gap-8 w-full justify-center py-4 bg-card rounded-lg mb-6 border border-primary/30">
          {Object.entries(stats).map(([key, value]) => {
            const iconPath = ICON_PATHS[key];
            const previewValue = previewStats?.[key] ?? 0;
            const finalValue = previewStats ? previewValue : value;
            return (
              <div key={key} className="flex flex-col items-center">
                <div className="flex items-center px-2">
                  <SvgFillMask
                    icon={iconPath}
                    percent={(value / 10) * 100}
                    baseColor="#3A2704"
                    fillColor="#D8B65A"
                    size={40}
                  />
                  <IconIndicator value={finalValue} />
                </div>
                <span className="text-foreground text-sm mt-1">{ICON_TITLE[key]}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-medium text-foreground px-4">{eventText}</h3>
        </div>

        <div className="w-full flex flex-col flex-1 items-center">
          <EventCard
            image={getImagePath(currentNode.image)}
            backgroundColor="#ddd"
            currentEvent={currentNode}
            onChooseLeftAnswer={(choice) => {
              if (currentNode.left) {
                applyChoice(choice);
              }
            }}
            onChooseRightAnswer={(choice) => {
              if (currentNode.right) {
                applyChoice(choice);
              }
            }}
            isHoldingCallback={(isHolding: boolean, threshold: number, currentEvent: EventNode) => {
              setBoundaryVisible(isHolding);
              setBoundaryValue(threshold);
              setCurrentEvent(currentEvent);
            }}
            setCurrentlySelectedChoice={(choice: Choice | null) => {
              if (!choice) {
                setPreviewStats(null);
                return;
              }

              const { effects } = choice;
              if (effects) {
                setPreviewStats(effects);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

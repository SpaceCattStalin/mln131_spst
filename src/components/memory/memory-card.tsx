'use client';

import Image from 'next/image';

export type CardModel = {
  id: string; // unique cho mỗi thẻ
  pairId: string; // id cặp (để so khớp)
  kind: 'text' | 'image';
  content: string; // text or image URL
  flipped: boolean;
  matched: boolean;
};

export default function MemoryCard({ card, onClick }: { card: CardModel; onClick: (id: string) => void }) {
  return (
    <button
      onClick={() => !card.flipped && !card.matched && onClick(card.id)}
      className="w-28 sm:w-36 h-36 sm:h-44 perspective"
      aria-label="memory-card"
    >
      <div
        className={`relative w-full h-full duration-500 preserve-3d ${
          card.flipped || card.matched ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front (hidden side when flipped) */}
        <div className="absolute inset-0 backface-hidden bg-slate-800 rounded-lg shadow-md flex items-center justify-center text-white">
          {/* Back design (when card is face down) */}
          <div className="text-sm text-center px-2">?</div>
        </div>

        {/* Back (visible when flipped) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-lg shadow-md p-2 flex items-center justify-center overflow-hidden">
          {card.kind === 'image' ? (
            <Image
              width={600}
              height={400}
              src={card.content}
              alt="card"
              className="w-full h-full object-cover rounded"
              unoptimized
            />
          ) : (
            <div className="text-sm sm:text-base text-center px-2">{card.content}</div>
          )}
        </div>
      </div>
    </button>
  );
}

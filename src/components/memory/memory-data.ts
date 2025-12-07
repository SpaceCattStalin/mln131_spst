export type Pair = {
  pairId: string; // id của cặp
  left: { type: 'text' | 'image'; content: string };
  right: { type: 'text' | 'image'; content: string };
};

export const defaultPairs: Pair[] = [
  {
    pairId: 'p1',
    left: { type: 'text', content: 'Gia đình: tế bào của xã hội' },
    right: { type: 'image', content: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60' },
  },
  {
    pairId: 'p2',
    left: { type: 'text', content: 'Bình đẳng giới' },
    right: { type: 'text', content: 'Equality between genders' },
  },
  {
    pairId: 'p3',
    left: { type: 'image', content: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60' },
    right: { type: 'text', content: 'Chăm sóc con cái' },
  },
  {
    pairId: 'p4',
    left: { type: 'text', content: 'Tự do hôn nhân' },
    right: { type: 'image', content: 'https://images.unsplash.com/photo-1524504388940-16c1b9f3b6e6?w=800&q=60' },
  },
  {
    pairId: 'p5',
    left: { type: 'image', content: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=60' },
    right: { type: 'text', content: 'Chức năng giáo dục' },
  },
  {
    pairId: 'p6',
    left: { type: 'text', content: 'Ấm no - Tiến bộ - Bình đẳng - Hạnh phúc' },
    right: { type: 'image', content: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&q=60' },
  },
  {
    pairId: 'p7',
    left: { type: 'text', content: 'CNH - HĐH tác động' },
    right: { type: 'text', content: 'Industrialization & modernization effects' },
  },
  {
    pairId: 'p8',
    left: { type: 'image', content: 'https://images.unsplash.com/photo-1524504388940-5c6f3f6c8b1d?w=800&q=60' },
    right: { type: 'text', content: 'Văn hoá gia đình' },
  },
  {
    pairId: 'p9',
    left: { type: 'text', content: 'Pháp luật bảo vệ gia đình' },
    right: { type: 'image', content: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800&q=60' },
  },
  {
    pairId: 'p10',
    left: { type: 'text', content: 'Thế hệ & giao tiếp' },
    right: { type: 'text', content: 'Inter-generational communication' },
  },
];

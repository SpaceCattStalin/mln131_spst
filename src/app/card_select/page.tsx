'use client';

import CharacterSelect from '@/components/gameComponents/CharacterSelect';
import { useRouter } from 'next/navigation';

export default function Select() {
  const router = useRouter();

  return (
    <>
      <CharacterSelect
        onSelect={() => {
          router.push(`/card_game`);
        }}
      />
    </>
  );
}

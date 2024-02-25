import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { GameDataTable } from '@/components/GameDataTable/GameDataTable';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <Welcome />
      <ColorSchemeToggle />
      <GameDataTable />
      <Link href="/games">Games</Link>
    </main>
  );
}

import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { GameDataTable } from '@/components/GameDataTable/GameDataTable';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <GameDataTable />
    </>
  );
}

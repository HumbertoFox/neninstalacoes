import ClientsComponent from '@/components/clients';
import EspecialistComponent from '@/components/especialist';
import NumbersComponent from '@/components/numbers';
import PortfolioComponent from '@/components/portfolio';
import ProjectsCompnent from '@/components/projects';
import StartComponet from '@/components/start';

export default function Home() {
  return (
    <div className='w-full'>
      <main>
        <StartComponet />
        <ClientsComponent />
        <ProjectsCompnent />
        <NumbersComponent />
        <PortfolioComponent />
        <EspecialistComponent />
      </main>
    </div>
  );
}

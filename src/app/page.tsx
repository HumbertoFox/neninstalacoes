import ClientsComponent from '@/components/clients';
import EspecialistComponent from '@/components/especialist';
import NumbersComponent from '@/components/numbers';
import PortfolioComponent from '@/components/portfolio';
import PresentationComponent from '@/components/presentation';
import ProjectsCompnent from '@/components/projects';
import StartComponet from '@/components/start';

export default function Home() {
  return (
    <div className='w-full'>
      <main className='min-w-full'>
        <StartComponet />
        <ClientsComponent />
        <ProjectsCompnent />
        <NumbersComponent />
        <PortfolioComponent />
        <EspecialistComponent />
        <PresentationComponent />
      </main>
    </div>
  );
}
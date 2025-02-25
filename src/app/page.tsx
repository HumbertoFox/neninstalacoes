import BlogComponent from '@/components/blog';
import ClientsComponent from '@/components/clients';
import DeskComponent from '@/components/desk';
import EspecialistComponent from '@/components/especialist';
import NumbersComponent from '@/components/numbers';
import PortfolioComponent from '@/components/portfolio';
import PresentationComponent from '@/components/presentation';
import ProjectsCompnent from '@/components/projects';
import StartComponet from '@/components/start';
import TalktoanexpertComponent from '@/components/talktoanexpert';

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
        <TalktoanexpertComponent />
        <DeskComponent />
        <BlogComponent />
      </main>
    </div>
  );
}
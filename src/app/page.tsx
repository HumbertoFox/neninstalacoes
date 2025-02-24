import ClientsComponent from '@/components/clients';
import NumbersComponent from '@/components/numbers';
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
      </main>
    </div>
  );
}

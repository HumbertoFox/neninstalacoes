import ClientsComponent from '@/components/clients';
import StartComponet from '@/components/start';

export default function Home() {
  return (
    <div>
      <main>
        <StartComponet />
        <ClientsComponent />
      </main>
    </div>
  );
}

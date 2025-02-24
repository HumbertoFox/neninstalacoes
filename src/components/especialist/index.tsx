import { Button } from '@/components/ui/button';

export default function EspecialistComponent() {
    return (
        <section className='w-full flex justify-center bg-neutral-800 py-16'>
            <div className='w-full max-w-screen-2xl flex flex-col gap-11 items-center'>
                <p className='max-w-4xl text-3xl font-extrabold text-white text-center '>
                    A sua transformação pode começar hoje e terminar
                    em até 90 dias com o contrato turn key Custódio
                </p>
                <Button
                    className='text-2xl text-black font-normal bg-gray-300 p-6 rounded hover:bg-purple-950 hover:text-white duration-300'
                >
                    Fale com nossos especialistas
                </Button>
            </div>
        </section>
    );
}
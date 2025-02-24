import Image from 'next/image';
import Executive from '@/components/images/projects/executivo.png';
import Corporative from '@/components/images/projects/corporativa.png';
import Turnkey from '@/components/images/projects/turnkey.png';
import { Button } from '@/components/ui/button';

export default function ProjectsCompnent() {
    return (
        <section className='w-full flex flex-col items-center gap-12 bg-gray-200 py-20'>
            <div className='max-w-screen-2xl flex gap-9'>
                <Image
                    src={Executive}
                    alt='Imagem executivo em Trabalho'
                />
                <div className='max-w-[500px] flex flex-col justify-center gap-4 font-robotto'>
                    <h2 className='text-3xl uppercase font-extrabold'>
                        Projeto executivo
                    </h2>
                    <p className='text-2xl'>
                        Cada projeto é desenvolvido cuidadosamente para
                        atender às necessidades específicas dos clientes.
                        Nossos arquitetos especialistas no corporativo,
                        desenvolvem layouts focados em potencializar cada
                        m² do seu escritório.
                    </p>
                    <Button
                        className='text-2xl bg-violet-950 hover:bg-transparent hover:text-black border border-violet-950 p-6 duration-300 rounded mr-auto'
                    >
                        Saiba Mais
                    </Button>
                </div>
            </div>
            
            <div className='max-w-screen-2xl flex gap-9'>
                <div className='max-w-[500px] flex flex-col justify-center gap-4 font-robotto'>
                    <h2 className='text-3xl uppercase font-extrabold'>
                        Obra Corporativa
                    </h2>
                    <p className='text-2xl'>
                        Comprometemo-nos a materializar o conceito impresso no projeto,
                        com foco nos detalhes e na qualidade,
                        refletindo a cultura dos nossos clientes em cada espaço do escritório.
                    </p>
                    <Button
                        className='text-2xl bg-violet-950 hover:bg-transparent hover:text-black border border-violet-950 p-6 duration-300 rounded mr-auto'
                    >
                        Saiba Mais
                    </Button>
                </div>
                <Image
                    src={Corporative}
                    alt='Imagem de Escritório'
                />
            </div>

            <div className='max-w-screen-2xl flex gap-9'>
                <Image
                    src={Turnkey}
                    alt='Imagem Hall Decorado com Puffs'
                />
                <div className='max-w-[500px] flex flex-col justify-center gap-4 font-robotto'>
                    <h2 className='text-3xl uppercase font-extrabold'>
                        Modalidade Turn Key
                    </h2>
                    <p className='text-2xl'>
                        O melhor custo-benefício no menor tempo de obra,
                        oferece segurança e tranquilidade ao determinar somente um ponto de contato,
                        do conceito à entrega das chaves.
                    </p>
                    <Button
                        className='text-2xl bg-violet-950 hover:bg-transparent hover:text-black border border-violet-950 p-6 duration-300 rounded mr-auto'
                    >
                        Saiba Mais
                    </Button>
                </div>
            </div>
        </section>
    );
}
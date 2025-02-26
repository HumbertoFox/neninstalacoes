import Image from 'next/image';
import ImgDesk from '@/components/images/desk/office-banner.png';
import { Button } from '@/components/ui/button';

export default function DeskComponent() {
    return (
        <section className='w-full flex justify-center bg-neutral-800 py-16'>
            <div className='w-full max-w-screen-2xl flex items-center justify-evenly max-lg:flex-col max-lg:gap-12'>
                <div className='max-w-xl flex flex-col gap-6 font-robotto text-white'>
                    <h5 className='text-3xl font-extrabold pb-6 border-b'>
                        Escritório de Arquitetura - Custódio
                    </h5>
                    <p className='text-2xl text-justify leading-7'>
                        Explorando o universo da arquitetura com dedicação e excelência,
                        o escritório de arquitetura Custódio destaca-se por oferecer soluções
                        inovadoras e personalizadas para empresas que buscam transformar seus espaços.
                        Acreditamos que a arquitetura vai além da estética, sendo uma ferramenta
                        estratégica para criar ambientes funcionais que refletem a
                        identidade única de cada cliente.
                    </p>

                    <p className='text-2xl text-justify leading-7'>
                        A Custódio oferece soluções completas e exclusivas para transformar o seu
                        ambiente de trabalho, dar vida à cultura única e ao DNA da sua empresa,
                        garantindo transparência e eficiência em todas as etapas do processo.
                    </p>

                    <Button
                        className='text-2xl font-normal text-black bg-gray-300 hover:bg-transparent hover:text-white border border-gray-300 p-6 duration-300 rounded mr-auto'
                    >
                        Saiba Mais
                    </Button>

                </div>

                <Image
                    src={ImgDesk}
                    alt='office-banner'
                />
            </div>
        </section>
    );
}
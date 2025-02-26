import Image from 'next/image';
import ImgPodcast from '@/components/images/podcast/bg-podcast.png';
import Link from 'next/link';

export default function PodcastPage() {
    return (
        <main className='relative min-w-full min-h-screen'>
            <Image
                className='w-full min-h-screen object-cover'
                src={ImgPodcast}
                alt='Imagem Microfone'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white font-robotto_cond'>
                <section className='w-full max-w-screen-2xl min-h-full flex flex-col items-center pt-36'>
                    <div className='w-full flex justify-end text-sm italic pr-2'>
                        <Link
                            className='hover:text-gray-500 hover:font-bold duration-300'
                            href='/'
                        >
                            <span>Home</span>
                        </Link>
                        <span>&nbsp;/&nbsp;</span>
                        <span className='font-bold'>Podcast</span>
                    </div>
                    <div className='w-full flex flex-col gap-8 pl-40 max-md:pl-0 max-md:text-center mt-32 duration-300'>
                        <h1 className='text-6xl max-md:text-5xl leading-[72px] uppercase font-normal'>
                            Podcast <br />
                            <strong className='font-black'>
                                Arquitetura de <br />
                                Alta Performance
                            </strong>
                        </h1>
                        <p className='text-2xl max-md:text-xl'>
                            POWERED BY CUSTÓDIO SOLUÇÕES
                        </p>
                    </div>
                </section>
            </div>
            <section className='relative w-full flex justify-center bg-black'>
                <div className='text-white font-robotto'>
                    <h1 className='text-4xl font-normal py-6'>
                        Episódios
                    </h1>
                </div>
            </section>
        </main>
    );
}
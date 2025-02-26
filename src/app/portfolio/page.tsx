import Link from 'next/link';
import ImgProtfolio0 from '@/components/images/portfolio/grid-huawei.png';
import ImgProtfolio1 from '@/components/images/portfolio/grid-edf-norte.png';
import ImgProtfolio2 from '@/components/images/portfolio/grid-edf-macae.png';
import ImgProtfolio3 from '@/components/images/portfolio/eneva-expansao-1.png';
import ImgProtfolio4 from '@/components/images/portfolio/lalamove-1.png';
import ImgProtfolio5 from '@/components/images/portfolio/eneva-novo-conceito.png';
import ImgProtfolio6 from '@/components/images/portfolio/brother-1.png';
import ImgProtfolio7 from '@/components/images/portfolio/atg-1.png';
import ImgProtfolio8 from '@/components/images/portfolio/bondinho-1.png';
import ImgProtfolio9 from '@/components/images/portfolio/ESSILOR-2.png';
import ImgProtfolio10 from '@/components/images/portfolio/ESSILOR-1.png';
import ImgProtfolio11 from '@/components/images/portfolio/passei-direto-1.png';
import ImgProtfolio12 from '@/components/images/portfolio/nts-1.png';
import ImgProtfolio13 from '@/components/images/portfolio/ecogen-1.png';
import ImgProtfolio14 from '@/components/images/portfolio/pebmed-1.png';
import ImgProtfolio15 from '@/components/images/portfolio/saipem-1.png';
import ImgProtfolio16 from '@/components/images/portfolio/vestas.png';
import ImgProtfolio17 from '@/components/images/portfolio/villemor-5.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProtfolioPage() {
    return (
        <main
            className='w-full min-h-screen flex justify-center pt-36 pb-10'
            id='main'
        >
            <section className='w-full max-w-screen-2xl flex flex-col items-center justify-center font-robotto'>
                <div className='w-full flex justify-end text-sm italic pr-2'>
                    <Link
                        className='hover:text-gray-500 hover:font-bold duration-300'
                        href='/'
                    >
                        <span>Home</span>
                    </Link>
                    <span>&nbsp;/&nbsp;</span>
                    <span className='font-bold'>Portifólio</span>
                </div>

                <h1 className='text-3xl uppercase mb-10'>
                    Conheça o nosso portfólio
                </h1>

                <div className='w-full flex flex-col items-center gap-3'>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='h-full row-span-2' src={ImgProtfolio0} alt="grid-huawei" />
                        <Image className='w-full col-span-2' src={ImgProtfolio1} alt="grid-edf-norte" />
                        <Image className='w-full col-span-2' src={ImgProtfolio2} alt="grid-edf-macae.png" />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='w-full col-span-2' src={ImgProtfolio3} alt='eneva-expansao' />
                        <Image className='h-full row-span-2' src={ImgProtfolio4} alt='lalamove' />
                        <Image className='w-full col-span-2' src={ImgProtfolio5} alt='eneva-novo-conceito' />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='h-full row-span-2' src={ImgProtfolio6} alt='brother' />
                        <Image className='w-full col-span-2' src={ImgProtfolio7} alt='atg' />
                        <Image className='w-full col-span-2' src={ImgProtfolio8} alt='bondinho' />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='w-full col-span-2' src={ImgProtfolio9} alt='ESSILOR-2' />
                        <Image className='h-full row-span-2' src={ImgProtfolio11} alt='passei-direto' />
                        <Image className='w-full col-span-2' src={ImgProtfolio10} alt='ESSILOR-1' />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='h-full row-span-2' src={ImgProtfolio12} alt='nts' />
                        <Image className='w-full col-span-2' src={ImgProtfolio13} alt='ecogen' />
                        <Image className='w-full col-span-2' src={ImgProtfolio14} alt='pebmed' />
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <Image className='w-full col-span-2' src={ImgProtfolio15} alt='saipem' />
                        <Image className='h-full row-span-2' src={ImgProtfolio16} alt='vestas' />
                        <Image className='w-full col-span-2' src={ImgProtfolio17} alt='villemor' />
                    </div>
                </div>

                <Button
                    className='text-lg bg-violet-950 hover:bg-transparent hover:text-black border border-violet-950 p-6 duration-300 rounded my-12'
                    asChild
                >
                    <Link href='#main'>voltar ao topo</Link>
                </Button>
            </section>
        </main>
    );
}
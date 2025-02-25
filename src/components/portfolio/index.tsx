'use client';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image, { StaticImageData } from 'next/image';
import imgSlide0 from '@/components/images/portfolio/grid-huawei.png';
import imgSlide1 from '@/components/images/portfolio/grid-edf-norte.png';
import imgSlide2 from '@/components/images/portfolio/grid-edf-macae.png';
import imgSlide3 from '@/components/images/portfolio/lalamove-1.png';
import imgSlide4 from '@/components/images/portfolio/eneva-expansao-1.png';
import imgSlide5 from '@/components/images/portfolio/eneva-novo-conceito.png';
import imgSlide6 from '@/components/images/portfolio/brother-1.png';
import imgSlide7 from '@/components/images/portfolio/atg-1.png';
import imgSlide8 from '@/components/images/portfolio/bondinho-1.png';
import imgSlide9 from '@/components/images/portfolio/passei-direto-1.png';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
    src: StaticImageData;
    alt: string;
};

const portfolioData: PortfolioItem[] = [
    { src: imgSlide0, alt: 'Imagem Huawei' },
    { src: imgSlide1, alt: 'Imagem Edf Norte' },
    { src: imgSlide2, alt: 'Imagem Edf Macae' },
    { src: imgSlide3, alt: 'Imagem lalamove' },
    { src: imgSlide4, alt: 'Imagem eneva' },
    { src: imgSlide5, alt: 'Imagem eneva' },
    { src: imgSlide6, alt: 'Imagem brother' },
    { src: imgSlide7, alt: 'Imagem atg' },
    { src: imgSlide8, alt: 'Imagem bondinho' },
    { src: imgSlide9, alt: 'Imagem passei' },
];

export default function PortfolioComponent() {
    return (
        <section className='w-full flex justify-center items-center bg-black py-24'>
            <div className='w-full max-w-screen-2xl min-h-full flex flex-col justify-center items-center gap-12 text-white'>
                <h3 className='text-2xl font-normal uppercase'>
                    Conheça o nosso portfólio
                </h3>
                <div className='w-full min-h-full py-8'>
                    <Swiper
                        className='w-full h-[380px]'
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                    >
                        {portfolioData.map((portfolio, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    className='object-cover'
                                    src={portfolio.src}
                                    alt={portfolio.alt}
                                    fill
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Button
                    className='text-3xl font-normal py-7 px-9 border border-white bg-transparent hover:bg-white hover:text-black rounded duration-300'
                >
                    Veja mais
                </Button>
            </div>
        </section>
    );
}
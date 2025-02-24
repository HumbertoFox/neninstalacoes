'use client';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import {
    EffectCoverflow,
    Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
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
import { Button } from '../ui/button';

export default function PortfolioComponent() {
    return (
        <section className='w-full flex justify-center bg-black py-24'>
            <div className='w-full max-w-screen-2xl flex flex-col justify-center items-center gap-12 text-white'>
                <h3 className='text-2xl font-normal uppercase'>Conheça o nosso portfólio</h3>
                <div className='w-full h-[60vh] py-8'>
                    <Swiper
                        className='w-full h-full'
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
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        <SwiperSlide className='w-full h-full flex justify-center items-center'>
                            <Image
                                className='object-cover'
                                src={imgSlide0}
                                alt='Imagem Huawei'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide1}
                                alt='Imagem Edf Norte'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={imgSlide2}
                                className='object-cover'
                                fill
                                alt='Imagem Edf Macae'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={imgSlide3}
                                className='object-cover'
                                fill
                                alt='Imagem lalamove'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide4}
                                alt='Imagem eneva'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide5}
                                alt='Imagem eneva'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide6}
                                alt='Imagem brother'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide7}
                                alt='Imagem atg'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide8}
                                alt='Imagem bondinho'
                                fill
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                className='object-cover'
                                src={imgSlide9}
                                alt='Imagem passei'
                                fill
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Button
                    className='text-3xl font-normal py-7 px-9 border border-white bg-transparent hover:bg-white hover:text-black rounded duration-300'
                    type='button'
                >
                    Veja mais
                </Button>
            </div>
        </section>
    );
}
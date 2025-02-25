'use client';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {
    Keyboard,
    Navigation
} from 'swiper/modules';
import { Button } from '@/components/ui/button';
import ImgSlide0 from '@/components/images/presentation/lalamove.png';
import ImgSlide1 from '@/components/images/presentation/vestas-1.png';
import ImgSlide2 from '@/components/images/presentation/villemor.png';
import Image from 'next/image';

export default function PresentationComponent() {
    return (
        <section className='w-full flex justify-center items-center gap-12 bg-gray-200 py-20'>
            <div className='w-full max-w-screen-2xl flex flex-col items-center gap-12 font-robotto'>
                <div className='uppercase text-2xl font-normal text-center'>
                    <p>
                        Feito por especialistas.
                    </p>
                    <p>
                        para seu time
                    </p>
                </div>

                <div className='max-w-5xl'>
                    <Swiper
                        slidesPerView={2}
                        grabCursor={true}
                        spaceBetween={50}
                        centeredSlides={false}
                        keyboard={{
                            enabled: true,
                        }}
                        navigation={true}
                        modules={[
                            Keyboard,
                            Navigation
                        ]}
                    >
                        <SwiperSlide>
                            <Image
                                src={ImgSlide0}
                                alt='Imagem Lalamove'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={ImgSlide1}
                                alt='Imagem Vestas'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={ImgSlide2}
                                alt='Imagem Villemor'
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <Button
                    className='text-3xl text-black font-normal py-7 px-9 border-2 border-black bg-transparent hover:bg-black hover:text-white rounded duration-300'
                >
                    Veja mais
                </Button>
            </div>
        </section>
    );
}
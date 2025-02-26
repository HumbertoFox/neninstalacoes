'use client';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import { Grid } from 'swiper/modules';
import Image from 'next/image';
import ImgLogo0 from '@/components/images/slide0/eneva1.png';
import ImgLogo1 from '@/components/images/slide0/edf.png';
import ImgLogo2 from '@/components/images/slide0/lalamove.png';
import ImgLogo3 from '@/components/images/slide0/huawei.png';
import ImgLogo4 from '@/components/images/slide0/globo.png';
import ImgLogo5 from '@/components/images/slide0/bbm.png';
import ImgLogo6 from '@/components/images/slide0/nts.png';
import ImgLogo7 from '@/components/images/slide0/prudential.png';
import ImgLogo8 from '@/components/images/slide0/passeidireto.png';
import ImgLogo9 from '@/components/images/slide1/stone.png';
import ImgLogo10 from '@/components/images/slide1/coelba.png';
import ImgLogo11 from '@/components/images/slide1/volanty.png';
import ImgLogo12 from '@/components/images/slide1/schenker.png';
import ImgLogo13 from '@/components/images/slide1/tim.png';
import ImgLogo14 from '@/components/images/slide1/atg.png';
import ImgLogo15 from '@/components/images/slide1/lam.png';
import ImgLogo16 from '@/components/images/slide1/everis.png';
import ImgLogo17 from '@/components/images/slide1/enel.png';
import ImgLogo18 from '@/components/images/slide2/essilor.png';
import ImgLogo19 from '@/components/images/slide2/merck.png';
import ImgLogo20 from '@/components/images/slide2/brother.png';
import ImgLogo21 from '@/components/images/slide2/mhm.png';
import ImgLogo22 from '@/components/images/slide2/neoenergia.png';
import ImgLogo23 from '@/components/images/slide2/tag.png';
import ImgLogo24 from '@/components/images/slide2/ingresso.png';
import ImgLogo25 from '@/components/images/slide2/vestas.png';
import ImgLogo26 from '@/components/images/slide2/ecogen.png';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { ClientsItem } from '@/interface/interfaces';

const clientsData: ClientsItem[] = [
    { src: ImgLogo0, alt: 'Texto alt Imagem' },
    { src: ImgLogo1, alt: 'Texto alt Imagem' },
    { src: ImgLogo2, alt: 'Texto alt Imagem' },
    { src: ImgLogo3, alt: 'Texto alt Imagem' },
    { src: ImgLogo4, alt: 'Texto alt Imagem' },
    { src: ImgLogo5, alt: 'Texto alt Imagem' },
    { src: ImgLogo6, alt: 'Texto alt Imagem' },
    { src: ImgLogo7, alt: 'Texto alt Imagem' },
    { src: ImgLogo8, alt: 'Texto alt Imagem' },
    { src: ImgLogo9, alt: 'Texto alt Imagem' },
    { src: ImgLogo10, alt: 'Texto alt Imagem' },
    { src: ImgLogo11, alt: 'Texto alt Imagem' },
    { src: ImgLogo12, alt: 'Texto alt Imagem' },
    { src: ImgLogo13, alt: 'Texto alt Imagem' },
    { src: ImgLogo14, alt: 'Texto alt Imagem' },
    { src: ImgLogo15, alt: 'Texto alt Imagem' },
    { src: ImgLogo16, alt: 'Texto alt Imagem' },
    { src: ImgLogo17, alt: 'Texto alt Imagem' },
    { src: ImgLogo18, alt: 'Texto alt Imagem' },
    { src: ImgLogo19, alt: 'Texto alt Imagem' },
    { src: ImgLogo20, alt: 'Texto alt Imagem' },
    { src: ImgLogo21, alt: 'Texto alt Imagem' },
    { src: ImgLogo22, alt: 'Texto alt Imagem' },
    { src: ImgLogo23, alt: 'Texto alt Imagem' },
    { src: ImgLogo24, alt: 'Texto alt Imagem' },
    { src: ImgLogo25, alt: 'Texto alt Imagem' },
    { src: ImgLogo26, alt: 'Texto alt Imagem' },
];

export default function ClientsComponent() {
    return (
        <section className='w-full flex justify-center py-16'>
            <div className='w-full max-w-screen-2xl flex flex-col items-center'>
                <h2 className='text-center text-2xl font-robotto font-normal uppercase mb-7'>
                    Escritórios onde já fizemos a diferença
                </h2>
                <div className='w-full h-[300px] flex justify-center px-6'>
                    <Swiper
                        slidesPerView={5}
                        grabCursor={true}
                        breakpoints={{
                            1024: {
                                slidesPerView: 9,
                            },
                        }}
                        grid={{
                            rows: 3,
                        }}
                        spaceBetween={10}
                        modules={[Grid]}
                    >
                        {clientsData.map((client, index) => (
                            <SwiperSlide key={index}>
                                <Image src={client.src} alt={client.alt} />
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
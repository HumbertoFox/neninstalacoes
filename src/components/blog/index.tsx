'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ImgBlog0 from '@/components/images/blog/blog0.png';
import ImgBlog1 from '@/components/images/blog/blog1.png';
import ImgBlog2 from '@/components/images/blog/blog2.png';
import ImgBlog3 from '@/components/images/blog/blog3.png';
import ImgBlog4 from '@/components/images/blog/blog4.png';
import ImgBlog5 from '@/components/images/blog/blog5.png';
import ImgBlog6 from '@/components/images/blog/blog6.png';
import ImgBlog7 from '@/components/images/blog/blog7.png';
import ImgBlog8 from '@/components/images/blog/blog8.png';
import ImgBlog9 from '@/components/images/blog/blog9.png';
import ImgBlog10 from '@/components/images/blog/blog10.png';
import ImgBlog11 from '@/components/images/blog/blog11.jpg';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface BlogItem {
    src: StaticImageData;
    title: string;
    link: string;
    alt: string;
};

const blogData: BlogItem[] = [
    { src: ImgBlog0, title: 'Por que investir em um projeto de design de interiores corporativos?', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog1, title: 'Neuroarquitetura corporativa: como aumentar a produtividade', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog2, title: 'Tendências de Design de Interiores em 2025 para Ambientes Corporativos', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog3, title: 'Fatores que influenciam o custo de contratar um arquiteto para uma reforma', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog4, title: 'Investimento em Design de Interiores Corporativo: O Que Considerar?', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog5, title: 'Iluminação escritório e ergonomia: mais conforto e produtividade', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog6, title: 'Ideias para sala de descanso em empresas', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog7, title: 'Estilos de design de interiores em ambientes corporativos', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog8, title: 'Design orgânico no ambiente de trabalho: o que é e como aplicar', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog9, title: 'Decoração de escritório empresarial: 6 inspirações', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog10, title: '4 Dicas de Arquitetura Corporativa para Humanizar o Ambiente de Trabalho', link: '#', alt: 'Texto alt Imagem' },
    { src: ImgBlog11, title: 'Modelos de sala de reunião: x inspirações', link: '#', alt: 'Texto alt Imagem' },
];

export default function BlogComponent() {
    return (
        <section className='w-full flex justify-center items-center gap-12 bg-gray-200 py-20'>
            <div className='w-full max-w-screen-2xl flex flex-col gap-12 items-center font-robotto'>
                <h5 className='text-3xl font-bold uppercase'>
                    Se desenvolva conosco
                </h5>

                <div className='w-full min-h-full'>
                    <Swiper
                        grabCursor={true}
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                    >
                        {blogData.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-[406px] h-[520ox]'>
                                    <Image
                                        className='h-[340px] object-fill'
                                        src={blog.src}
                                        alt={blog.alt}
                                    />
                                    <div className='min-h-[180px] flex flex-col justify-between bg-neutral-800 text-white p-4'>
                                        <p className='text-2xl'>
                                            {blog.title}
                                        </p>
                                        <Link
                                            className='text-xl underline mr-auto p-1'
                                            href={blog.link}
                                        >
                                            Leia mais
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
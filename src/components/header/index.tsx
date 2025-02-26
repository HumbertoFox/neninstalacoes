'use client';

import Image from 'next/image';
import LogoHeader from '@/components/images/logo-custodio.png';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import {
    useEffect,
    useRef
} from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

export default function HeaderComponent() {
    const pathname = usePathname();
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const servicesRef = useRef(null);
    const contactsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            const logo = logoRef.current;
            const services = servicesRef.current;
            const contacts = contactsRef.current;

            if (window.scrollY > 0) {
                gsap.to(header, {
                    backgroundColor: '#0c101c',
                    duration: 0.3,
                });
                gsap.to(logo, {
                    width: 120,
                    duration: 0.3,
                });
                gsap.to(services, {
                    backgroundColor: '#0c101c',
                });
                gsap.to(contacts, {
                    backgroundColor: '#0c101c',
                });
            } else {
                if (pathname === '/' || pathname === '/podcast') {
                    gsap.to(header, {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                    });
                    gsap.to(services, {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    });
                    gsap.to(contacts, {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    });
                } else {
                    gsap.to(header, {
                        backgroundColor: '#0c101c',
                        duration: 0.3,
                    });
                    gsap.to(services, {
                        backgroundColor: '#0c101c',
                    });
                    gsap.to(contacts, {
                        backgroundColor: '#0c101c',
                    });
                };

                gsap.to(logo, {
                    width: 220,
                    duration: 0.3,
                });
            };
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <header
            className='fixed top-0 w-full flex justify-center py-7 z-10'
            ref={headerRef}
        >
            <div className='w-full max-w-screen-2xl flex justify-between px-5'>
                <Link
                    href='#'
                    ref={logoRef}
                >
                    <Image
                        src={LogoHeader}
                        alt='Logo Empresa'
                    />
                </Link>
                <nav className='flex max-[1080px]:hidden font-robotto'>
                    <ul className='w-full flex items-center gap-8 font-medium text-white'>
                        <Link
                            className='hover:scale-110 duration-300 ease-in-out'
                            href='/'
                        >
                            <li>Home</li>
                        </Link>

                        <Link
                            className='hover:scale-110 duration-300 ease-in-out'
                            href='/portfolio'
                        >
                            <li>Portfólio</li>
                        </Link>

                        <li className='relative group cursor-default'>
                            <span className='flex gap-1 items-center'>
                                Serviços
                                <IoIosArrowDown className='group-hover:rotate-180 duration-300' />
                            </span>
                            <ul
                                className='hidden absolute group-hover:flex flex-col gap-3 text-nowrap pt-2 px-4 pb-4 rounded'
                                ref={servicesRef}
                            >
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>O que fazemos - projeto executivo</li>
                                </Link>
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>Estudo de viabilidade</li>
                                </Link>
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>O que fazemos - Obra Corporativa</li>
                                </Link>
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>O que fazemos - Turnkey</li>
                                </Link>
                            </ul>
                        </li>

                        <Link
                            className='hover:scale-110 duration-300 ease-in-out'
                            href='/podcast'
                        >
                            <li>Podcast</li>
                        </Link>

                        <Link
                            className='hover:scale-110 duration-300 ease-in-out'
                            href='#'
                        >
                            <li>Notícias</li>
                        </Link>

                        <li className='relative group cursor-default'>
                            <span className='flex gap-1 items-center'>
                                Contato
                                <IoIosArrowDown className='group-hover:rotate-180 duration-300' />
                            </span>
                            <ul
                                className='hidden absolute group-hover:flex flex-col gap-3 text-nowrap pt-2 px-4 pb-4 rounded'
                                ref={contactsRef}
                            >
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>Contato</li>
                                </Link>
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>Seja um Fornecedor</li>
                                </Link>
                                <Link
                                    className='hover:scale-105 duration-300 ease-in-out hover:underline'
                                    href='#'
                                >
                                    <li>Trabalhe Conosco</li>
                                </Link>
                            </ul>
                        </li>

                        <Link
                            className='hover:bg-white hover:text-black border-2 border-white rounded duration-300'
                            href={pathname !== '/' ? '/#talkexpert' : '#talkexpert'}
                        >
                            <li className='text-nowrap p-3 hover:scale-105 duration-300 ease-in-out'>
                                Fale com um especialista
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
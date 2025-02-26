'use client';

import Image from 'next/image';
import LogoHeader from '@/components/images/logo-custodio.png';
import Link from 'next/link';
import {
    useEffect,
    useRef
} from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import MenuWidthComponent from '@/components/menuwidth';
import MenuHeightComponent from '../menuheight';

export default function HeaderComponent() {
    const pathname = usePathname();
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const servicesRef = useRef<HTMLUListElement | null>(null);
    const contactsRef = useRef<HTMLUListElement | null>(null);

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
                <nav className='flex items-center text-white font-robotto'>
                    <MenuHeightComponent />

                    <MenuWidthComponent
                        servicesRef={servicesRef}
                        contactsRef={contactsRef}
                        pathname={pathname}
                    />
                </nav>
            </div>
        </header>
    );
}
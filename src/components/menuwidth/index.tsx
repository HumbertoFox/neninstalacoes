'use client';

import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

interface MenuWidthProps {
    servicesRef: React.RefObject<HTMLUListElement | null>;
    contactsRef: React.RefObject<HTMLUListElement | null>;
    pathname: string;
};

export default function MenuWidthComponent({
    servicesRef,
    contactsRef,
    pathname
}: MenuWidthProps) {
    return (
        <ul className='w-full flex max-[1080px]:hidden items-center gap-8 font-medium'>
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
    );
}
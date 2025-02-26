'use client';

import { MenuWidthProps } from '@/interface/interfaces';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

export default function MenuWidthComponent({
    servicesRef,
    contactsRef,
    pathname
}: MenuWidthProps) {
    return (
        <ul className='w-full h-full flex max-[1080px]:hidden items-center gap-8 font-medium'>
            <li className='hover:scale-110 duration-300 ease-in-out'>
                <Link
                    className='p-1'
                    href='/'
                >
                    Home
                </Link>
            </li>

            <li className='hover:scale-110 duration-300 ease-in-out'>
                <Link
                    className='p-1'
                    href='/portfolio'
                >
                    Portfólio
                </Link>
            </li>

            <li className='relative group cursor-default'>
                <span className='flex gap-1 items-center'>
                    Serviços
                    <IoIosArrowDown className='group-hover:rotate-180 duration-300' />
                </span>
                <ul
                    className='hidden absolute group-hover:flex flex-col gap-3 text-nowrap pt-2 px-4 pb-4 rounded'
                    ref={servicesRef}
                >
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            O que fazemos - projeto executivo
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            Estudo de viabilidade
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            O que fazemos - Obra Corporativa
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            O que fazemos - Turnkey
                        </Link>
                    </li>
                </ul>
            </li>

            <li className='hover:scale-110 duration-300 ease-in-out'>
                <Link
                    className='p-1'
                    href='/podcast'
                >
                    Podcast
                </Link>
            </li>

            <li className='hover:scale-110 duration-300 ease-in-out'>
                <Link
                    className='p-1'
                    href='#'
                >
                    Notícias
                </Link>
            </li>

            <li className='relative group cursor-default'>
                <span className='flex gap-1 items-center'>
                    Contato
                    <IoIosArrowDown className='group-hover:rotate-180 duration-300' />
                </span>
                <ul
                    className='hidden absolute group-hover:flex flex-col gap-3 text-nowrap pt-2 px-4 pb-4 rounded'
                    ref={contactsRef}
                >
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            Contato
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            Seja um Fornecedor
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300 ease-in-out hover:underline'>
                        <Link
                            className='p-1'
                            href='#'
                        >
                            Trabalhe Conosco
                        </Link>
                    </li>
                </ul>
            </li>

            <li className='flex hover:bg-white hover:text-black border-2 border-white rounded duration-300'>
                <Link
                    className='text-nowrap p-3 hover:scale-105 duration-300 ease-in-out'
                    href={pathname !== '/' ? '/#talkexpert' : '#talkexpert'}
                >
                    Fale com um especialista
                </Link>
            </li>
        </ul>
    );
}
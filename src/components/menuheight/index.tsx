'use client';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

export default function MenuHeightComponent() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger><IoMenu className='w-10 h-10 hidden max-[1080px]:block' /></SheetTrigger>
            <SheetContent className='w-80'>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <ul className='flex flex-col gap-3 font-medium'>
                        <li className='flex'>
                            <Link
                                className='hover:scale-110 p-1 duration-300 ease-in-out'
                                href='/'
                            >
                                Home
                            </Link>
                        </li>

                        <li className='flex'>
                            <Link
                                className='hover:scale-110 p-1 duration-300 ease-in-out'
                                href='/portfolio'
                            >
                                Portfólio
                            </Link>
                        </li>

                        <li className='cursor-default'>
                            <span className='flex gap-1 items-center'>
                                Serviços
                                <IoIosArrowDown />
                            </span>
                            <ul className='flex flex-col gap-3 text-nowrap pl-2'>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        O que fazemos - projeto executivo
                                    </Link>
                                </li>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        Estudo de viabilidade
                                    </Link>
                                </li>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        O que fazemos - Obra Corporativa
                                    </Link>
                                </li>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        O que fazemos - Turnkey
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className='flex'>
                            <Link
                                className='hover:scale-110 p-1 duration-300 ease-in-out'
                                href='/podcast'
                            >
                                Podcast
                            </Link>
                        </li>

                        <li className='flex'>
                            <Link
                                className='hover:scale-110 p-1 duration-300 ease-in-out'
                                href='#'
                            >
                                Notícias
                            </Link>
                        </li>

                        <li className='cursor-default'>
                            <span className='flex gap-1 items-center'>
                                Contato
                                <IoIosArrowDown />
                            </span>
                            <ul className='flex flex-col gap-3 text-nowrap pl-2'>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        Contato
                                    </Link>
                                </li>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        Seja um Fornecedor
                                    </Link>
                                </li>
                                <li className='flex'>
                                    <Link
                                        className='hover:scale-110 p-1 duration-300 ease-in-out'
                                        href='#'
                                    >
                                        Trabalhe Conosco
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className='flex'>
                            <Link
                                className='hover:scale-110 p-1 duration-300 ease-in-out'
                                href={pathname !== '/' ? '/#talkexpert' : '#talkexpert'}
                            >
                                Fale com um especialista
                            </Link>
                        </li>
                    </ul>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
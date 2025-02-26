import Image from 'next/image';
import Logo from '@/components/images/logo-custodio.png';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';

export default function FooterComponent() {
    return (
        <footer className='w-full flex justify-center bg-black py-8'>
            <div className='w-full max-w-screen-2xl flex justify-evenly max-lg:flex-col max-lg:items-center max-lg:gap-12 font-robotto text-white'>
                <div className='max-w-80 flex flex-col items-center gap-3'>
                    <Image
                        src={Logo}
                        alt='Logo Empresa'
                    />

                    <p className='text-xs text-justify leading-3 tracking-tighter cursor-default'>
                        Nosso compromisso é garantir a transparência, eficiência e agilidade em
                        todas as etapas do processo, proporcionando soluções completas e exclusivas.
                        Promovemos a transformação do seu ambiente de trabalho,
                        dando vida ao DNA e à cultura única da sua empresa.
                    </p>

                    <Link href='#'>
                        <BsInstagram className='w-7 h-7 hover:text-pink-600 duration-300' />
                    </Link>
                </div>

                <nav>
                    <ul className='flex flex-col gap-2 text-xs'>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Podcast
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Seja um Fornecedor
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='hover:text-gray-400 duration-300'
                                href='#'
                            >
                                Trabalhe Conosco
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex flex-col gap-3 cursor-default'>
                    <h6 className='text-sm font-bold'>
                        Endereço
                    </h6>
                    <div className='text-xs'>
                        <address>Praia de Botafogo, 440 - </address>
                        <address>22º andar - Rio de Janeiro/RJ</address>
                    </div>
                    <div className='text-xs'>
                        <address>Av das Nações Unidas 14401 - Torre</address>
                        <address> Tarumã Sala 1007 - São Paulo/SP</address>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <h6 className='text-sm font-bold cursor-default'>
                        Contato
                    </h6>

                    <div className='flex flex-col gap-2 text-xs'>
                        <Link
                            className='hover:text-blue-400 duration-300'
                            href='tel:+552135491204'
                        >
                            RJ | +55 21 3549-1204
                        </Link>

                        <Link
                            className='hover:text-blue-400 duration-300'
                            href='tel:+551151826361'
                        >
                            SP | +55 11 5182-6361
                        </Link>

                        <Link
                            className='hover:text-red-400 duration-300'
                            href='mailto:contato@custodio.arq.br'
                        >
                            contato@custodio.arq.br
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
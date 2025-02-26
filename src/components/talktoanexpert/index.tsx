import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TalktoanexpertComponent() {
    return (
        <section
            className='w-full flex justify-center bg-[url("/bg-contact.png")] bg-cover pb-16'
            id='talkexpert'
        >
            <div className='w-full max-w-screen-2xl flex flex-col items-center gap-6 font-robotto text-white pt-28 px-4'>
                <div className='w-full flex max-lg:flex-col items-center justify-evenly max-lg:gap-12'>
                    <div className='max-w-xl flex flex-col gap-12 max-lg:text-center'>
                        <h4 className='text-5xl font-bold'>
                            Viabilize o futuro do seu escritório corporativo
                        </h4>
                        <p className='text-2xl font-normal'>
                            Peça agora seu estudo de viabilidade e comece
                            a transformação do seu espaço de trabalho com
                            imagens 3D e orçamento preciso
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 bg-black p-10 rounded'>
                        <div className='flex flex-col text-3xl text-center uppercase'>
                            <span>
                                Fale Com Nosso
                            </span>
                            <span>
                                Especialista
                            </span>
                        </div>

                        <form className='max-w-96 flex flex-col gap-3'>
                            <div className='flex flex-col'>
                                <label htmlFor='name'>Nome*</label>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='name'
                                    name='name'
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='phone'>Celular*</label>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='phone'
                                    name='phone'
                                    type='tel'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email'>E-mail corporativo*</label>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='email'
                                    name='email'
                                    type='email'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='corporation'>Empresa*</label>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='corporation'
                                    name='corporation'
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='text'>Quais desafios o seu escritório enfrenta?*</label>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='text'
                                    name='text'
                                    type='text'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='quantity'>Quantidade de funcionários.*</label>
                                <select
                                    className='text-black p-1 pl-2 rounded'
                                    id='quantity'
                                    name='quantity'
                                >
                                    <option value=''>Selecione</option>
                                    <option value='1-10'>1-10</option>
                                    <option value='11-30'>11-30</option>
                                    <option value='31-50'>31-50</option>
                                    <option value='51-100'>51-100</option>
                                    <option value='101-200'>101-200</option>
                                    <option value='201-500'>201-500</option>
                                    <option value='501-1000'>501-1000</option>
                                </select>
                            </div>
                            <div className='flex gap-1 items-start'>
                                <input
                                    className='text-black p-1 pl-2 rounded'
                                    id='text'
                                    name='text'
                                    type='checkbox'
                                />
                                <label htmlFor='text'>Aceito receber conteúdos e permito que a Custódio entre em contato.*</label>
                            </div>

                            <p className='p'>
                                Ao informar meus dados,
                                estou ciente das diretrizes da&nbsp;
                                <Link
                                    className='underline'
                                    href='#'
                                >
                                    Política de Privacidade.
                                </Link>
                            </p>

                            <Button
                                className='text-xl bg-green-600 hover:bg-green-400 rounded p-7'
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
                <p>
                    Ao informar meus dados,
                    estou ciente das diretrizes da&nbsp;
                    <Link
                        className='underline'
                        href='#'
                    >
                        Política de Privacidade.
                    </Link>
                </p>
            </div>
        </section>
    );
}
import Link from 'next/link';

export default function StartComponet() {
    return (
        <section className='relative min-w-full h-screen'>
            <video
                className='w-full h-full object-cover'
                src={'/videos/video-bg-home.mp4'}
                loop
                autoPlay
                muted
                playsInline
            />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-2 text-white text-center font-robotto_cond'>
                <h1 className='uppercase text-7xl font-black'>
                    Transforme o seu escritório
                </h1>
                <p className='font-robotto font-bold text-2xl mb-12'>
                    Escritórios eficientes para equipes de alta performance
                </p>
                <div className='w-full max-w-[980px] flex max-lg:flex-col items-center justify-center gap-3 font-robotto font-bold uppercase text-2xl text-center mx-12'>
                    <Link
                        className='w-full max-w-[300px]'
                        href='#executive'
                    >
                        <p className='p-3'>Projeto Executivo</p>
                    </Link>
                    <Link
                        className='w-full max-w-[300px]'
                        href='#corporative'
                    >
                        <p className='border-x-2 p-3'>Turn Key</p>
                    </Link>
                    <Link
                        className='w-full max-w-[300px]'
                        href='#turnkey'
                    >
                        <p className='p-3'>Obras Corporativas</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
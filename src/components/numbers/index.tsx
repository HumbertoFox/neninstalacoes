'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    useEffect,
    useRef
} from 'react';

export default function NumbersComponent() {
    const refSection = useRef(null);
    const refSpan500 = useRef(null);
    const refSpan15000 = useRef(null);
    const refSpan200k = useRef(null);
    const refSpan800k = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const sectionNumbers = refSection.current;

        const animateNumber = (ref: React.RefObject<HTMLSpanElement | null>, targetValue: number) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    { innerText: 0 },
                    {
                        innerText: targetValue,
                        duration: 2,
                        ease: 'power1.out',
                        snap: { innerText: 1 },
                        onUpdate: () => {
                            ref.current!.innerText = Math.ceil(parseFloat(ref.current!.innerText)).toString();
                        }
                    }
                );
            };
        };

        ScrollTrigger.create({
            trigger: sectionNumbers,
            start: '40% bottom',
            onEnter: () => {
                animateNumber(refSpan500, 500);
                animateNumber(refSpan15000, 15000);
                animateNumber(refSpan200k, 200);
                animateNumber(refSpan800k, 800);
            },
            once: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <section
            className='w-full flex justify-center bg-neutral-800 py-16'
            ref={refSection}
        >
            <div className='w-full max-w-screen-2xl flex flex-col items-center gap-16 text-white font-robotto'>
                <h3 className='text-2xl font-normal uppercase'>Nossos números</h3>
                <div className='w-full flex justify-evenly'>
                    <div className='flex flex-col gap-3 items-center'>
                        <h6 className='text-5xl font-extrabold'>+<span ref={refSpan500}>0</span></h6>
                        <p className='text-2xl font-normal'>clientes atendidos</p>
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h6 className='text-5xl font-extrabold'>+<span ref={refSpan15000}>0</span></h6>
                        <p className='text-2xl font-normal'>de pessoas impactadas</p>
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h6 className='text-5xl font-extrabold'>+<span ref={refSpan200k}>0k </span>m²</h6>
                        <p className='text-2xl font-normal'>de projetos</p>
                    </div>

                    <div className='flex flex-col gap-3 items-center'>
                        <h6 className='text-5xl font-extrabold'>+<span ref={refSpan800k}>0k </span>m²</h6>
                        <p className='text-2xl font-normal'>de obras realizadas</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
import Image from 'next/image';
import ImgLogo0 from '@/components/images/slide0/eneva1.png';
import ImgLogo1 from '@/components/images/slide0/edf.png';
import ImgLogo2 from '@/components/images/slide0/lalamove.png';
import ImgLogo3 from '@/components/images/slide0/huawei.png';
import ImgLogo4 from '@/components/images/slide0/globo.png';
import ImgLogo5 from '@/components/images/slide0/bbm.png';
import ImgLogo6 from '@/components/images/slide0/nts.png';
import ImgLogo7 from '@/components/images/slide0/prudential.png';
import ImgLogo8 from '@/components/images/slide0/passeidireto.png';
import ImgLogo9 from '@/components/images/slide1/stone.png';
import ImgLogo10 from '@/components/images/slide1/coelba.png';
import ImgLogo11 from '@/components/images/slide1/volanty.png';
import ImgLogo12 from '@/components/images/slide1/schenker.png';
import ImgLogo13 from '@/components/images/slide1/tim.png';
import ImgLogo14 from '@/components/images/slide1/atg.png';
import ImgLogo15 from '@/components/images/slide1/lam.png';
import ImgLogo16 from '@/components/images/slide1/everis.png';
import ImgLogo17 from '@/components/images/slide1/enel.png';
import ImgLogo18 from '@/components/images/slide2/essilor.png';
import ImgLogo19 from '@/components/images/slide2/merck.png';
import ImgLogo20 from '@/components/images/slide2/brother.png';
import ImgLogo21 from '@/components/images/slide2/mhm.png';
import ImgLogo22 from '@/components/images/slide2/neoenergia.png';
import ImgLogo23 from '@/components/images/slide2/tag.png';
import ImgLogo24 from '@/components/images/slide2/ingresso.png';
import ImgLogo25 from '@/components/images/slide2/vestas.png';
import ImgLogo26 from '@/components/images/slide2/ecogen.png';

export default function ClientsComponent() {
    return (
        <section className='w-full flex justify-center py-16'>
            <div className='w-full max-w-screen-2xl flex flex-col items-center'>
                <h2 className='text-center text-2xl font-robotto font-normal uppercase mb-7'>
                    Escritórios onde já fizemos a diferença
                </h2>
                <div>
                    <div className='h-[100px] flex gap-3 items-center justify-between'>
                        <Image src={ImgLogo0} alt='Logo eneva1' />
                        <Image src={ImgLogo1} alt='Logo edf' />
                        <Image src={ImgLogo2} alt='Logo lalamove' />
                        <Image src={ImgLogo3} alt='Logo huawei' />
                        <Image src={ImgLogo4} alt='Logo globo' />
                        <Image src={ImgLogo5} alt='Logo bbm' />
                        <Image src={ImgLogo6} alt='Logo nts' />
                        <Image src={ImgLogo7} alt='Logo prudential' />
                        <Image src={ImgLogo8} alt='Logo passeidireto' />
                    </div>

                    <div className='h-[100px] flex gap-3 items-center justify-between'>
                        <Image src={ImgLogo9} alt='Logo stone' />
                        <Image src={ImgLogo10} alt='Logo coelba' />
                        <Image src={ImgLogo11} alt='Logo volanty' />
                        <Image src={ImgLogo12} alt='Logo schenker' />
                        <Image src={ImgLogo13} alt='Logo tim' />
                        <Image src={ImgLogo14} alt='Logo atg' />
                        <Image src={ImgLogo15} alt='Logo lam' />
                        <Image src={ImgLogo16} alt='Logo everis' />
                        <Image src={ImgLogo17} alt='Logo enel' />
                    </div>

                    <div className='h-[100px] flex gap-3 items-center justify-between'>
                        <Image src={ImgLogo18} alt='Logo essilor' />
                        <Image src={ImgLogo19} alt='Logo merck' />
                        <Image src={ImgLogo20} alt='Logo brother' />
                        <Image src={ImgLogo21} alt='Logo mhm' />
                        <Image src={ImgLogo22} alt='Logo neoenergia' />
                        <Image src={ImgLogo23} alt='Logo tag' />
                        <Image src={ImgLogo24} alt='Logo ingresso' />
                        <Image src={ImgLogo25} alt='Logo vestas' />
                        <Image src={ImgLogo26} alt='Logo ecogen' />
                    </div>
                </div>
            </div>
        </section>
    );
}
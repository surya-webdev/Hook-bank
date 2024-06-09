import { useGSAP } from '@gsap/react';
import { discount, robot } from '../assets';
import styles from '../style';
import gsap from 'gsap';
function Hero() {
  useGSAP(() => {
    const t1 = gsap.timeline({
      defaults: { duration: 0.75, ease: 'power2.out' },
    });
    t1.fromTo(
      '.text-1',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.35 },
      '<',
    );
    t1.fromTo('.text-2', { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, '<');
    t1.fromTo('.text-3', { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, '<');
  }, []);
  return (
    <div className="gris-cols-1 my-10 grid items-center gap-10 md:mx-0 md:my-0 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div className="mx-10 flex">
          <div className="bg-black-gradient flex items-center rounded-lg px-2">
            <img className="w-[50px]" src={discount} alt="discount" />
            <p className={styles.paragraph}>
              20%
              {''} <span className="text-white">DISCOUNT FOR</span>
              {''} <span>1 MONTH</span> ACCOUNT
            </p>
          </div>
        </div>
        {/* grid  */}
        <div className="items-center px-10 text-5xl md:text-7xl">
          <p>
            <span className="text-1 block">The Next </span>{' '}
            <span className="text-2 text-gradient block">Generation</span>{' '}
            <span className="text-3 block"> Payment Method.</span>
          </p>
          <p className={`${styles.paragraph} py-10`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="self-end">
        <img
          className="relative z-[5] h-full w-full"
          src={robot}
          alt="Hero-image"
        />
        <div className="pink__gradient absolute bottom-0 z-[0] h-[35%] w-[45%] md:top-0"></div>
        <div className="white__gradient absolute bottom-0 z-[1] h-[25%] w-[35%] md:top-1"></div>
        <div className="blue__gradient absolute bottom-0 z-[2] h-[55%] w-[35%] md:top-0"></div>
      </div>
    </div>
  );
}

export default Hero;

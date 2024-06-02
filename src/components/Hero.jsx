import { discount, robot } from '../assets';
import styles from '../style';
function Hero() {
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
        <div className="mx-10 text-5xl md:text-7xl">
          <p>
            The Next <span className="text-gradient block">Generation</span>{' '}
            Payment Method.
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

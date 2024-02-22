import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-green-100 min-h-screen max-container flex xl:flex-row flex-col w-full justify-center gap-10"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start  max-xl:padding-x pt-28">
        <p className="text-orange-500">Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;

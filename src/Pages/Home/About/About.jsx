import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
            <img
              className="max-w-[460px] h-[470px] shadow-2xl  rounded-md"
              src={person}
              alt=""
            />
            <img
              className="max-w-[320px] ma-w-[320px] h-[330px] absolute right-8 -bottom-14  rounded-lg border-4"
              src={parts}
              alt=""
            />
          </div>

          <div className="w-1/2">
            <p className="text-xl font-bold text-primary">About Us</p>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don&rsquo;t look even
              slightly believable.
            </p>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomized words which do&rsquo;t look even slightly
              believable.
            </p>
            <button className="btn bg-primary hover:text-primary text-white">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;
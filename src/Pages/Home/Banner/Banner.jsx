import img5 from '../../../assets/images/banner/5.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]  text-white">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img5} className="w-full object-cover " />
          <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className='w-1/2 ml-20 space-y-6'>
              <h2 className="text-6xl font-bold">
                Affordable <br /> Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className=" text-lg font-semibold border hover:bg-primary hover:text-white mr-5 py-4 px-7 rounded-md">
                Discover More
              </button>
              <button className="text-lg font-semibold border hover:bg-primary hover:text-white mr-5 py-4 px-7 rounded-md">
                Latest Project
              </button>
            </div>
          </div>
          <div className="absolute flex items-center gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a
              href="#slide4"
              className="btn btn-circle  hover:btn-outline border-none bg-primary hover:bg-inherit text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle  hover:btn-outline border-none bg-primary hover:bg-inherit text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
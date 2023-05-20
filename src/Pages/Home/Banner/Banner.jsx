import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1}className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>
                    Afforable Price FOr Car Servcing
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis dolorem, incidunt repudiandae quas consectetur quae magni recusandae, accusantium temporibus nostrum ullam fugit unde ducimus optio et fugiat vero sit!
                </p>
                <div>
                <button className="btn btn-primary mr-5">Discover more</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={img2}className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>
                    Afforable Price FOr Car Servcing
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis dolorem, incidunt repudiandae quas consectetur quae magni recusandae, accusantium temporibus nostrum ullam fugit unde ducimus optio et fugiat vero sit!
                </p>
                <div>
                <button className="btn btn-primary mr-5">Discover more</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={img3}className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>
                    Afforable Price FOr Car Servcing
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis dolorem, incidunt repudiandae quas consectetur quae magni recusandae, accusantium temporibus nostrum ullam fugit unde ducimus optio et fugiat vero sit!
                </p>
                <div>
                <button className="btn btn-primary mr-5">Discover more</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={img4}className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'>
                    Afforable Price FOr Car Servcing
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis dolorem, incidunt repudiandae quas consectetur quae magni recusandae, accusantium temporibus nostrum ullam fugit unde ducimus optio et fugiat vero sit!
                </p>
                <div>
                <button className="btn btn-primary mr-5">Discover more</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
                </div>
            </div>
          </div>
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      
    );
};

export default Banner;
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};



// swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';

// icons
// import { BsArrowRight } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group:">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt=";" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                      </div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Live </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">Project </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] delay-200"><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>)
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;





















// // data
// const workSlides = {
//   slides: [
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//       ],
//     },
//   ],
// };

// const WorkSlider = () => {
//   return <div>Work Slider</div>;
// };

// export default WorkSlider;

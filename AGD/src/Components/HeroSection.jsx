// // import React from "react";
// // import Main from "../assets/MainImage.png";
// // import girl from "../assets/HeroImage.svg";

// // import { ServiceData } from "../Constants/Services";

// // const HeroSection = () => {
// //   return (
// //     <>
// //       <div
// //         className="flex flex-col    w-full h-[120vh] max-h-full overflow-hidden  "
// //         style={{ backgroundImage: `url(${Main})` }}
// //       >
// //         <div className="flex px-4 md:px-6 lg:px-10  w-full mx-auto max-w-7xl justify-center ">
          
// //           <div className="max-sm:max-w-3xl max-sm:mx-2  w-full pt-36  relative  ">
// //             <h1 className="max-sm:text-2xl  font-Sarlow z-50 text-white text-5xl font-semibold leading-snug tracking-wide">
// //               The World First Jewellery <br /> E Commerce Platform <br /> Explore The Future
// //               Talent{" "}
// //             </h1>
// //             <p className="text-white max-w-[404px] mt-4">
// //               Discover the future of jewelry shopping with our innovative
// //               e-commerce platform, showcasing exceptional talent and unique
// //               designs.
// //             </p>
    
// //           </div>
// //                      <div className="flex lg:h-full lg:w-full  absolute bottom-0 ">
// //           <img src={girl}
// //            alt="Photo"  />
// //         </div>
       
       
// //            <div className="flex w-full h-40 bg-black absolute bottom-10  "> csdadfay</div>
       
// //         </div>
         
// //       </div>
// //     </>
// //   );
// // };

// // export default HeroSection;

// import React from "react";
// import bgImage from "../assets/MainImage.png";
// import women from "../assets/HeroImage.svg?url"
// import { ServiceData } from "../Constants/Services.js";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-[120vh] max-h-full ">
//       {/* BACKGROUND IMAGE DIV */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 h-full w-full"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* LEFT GRADIENT OVERLAY */}
//       <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

//             {/* TEXT (BEHIND WOMAN) */}
//           <div className="relative
//   h-full
//   flex items-center
//   z-0
//   min-[1601px]:z-50">
//         <div className="w-full max-w-400 mx-auto px-6 md:px-20 lg:px-28">
//           <div className="max-w-2xl text-white">
//             <h1 className="text-3xl md:text-5xl font-bold font-solway leading-tight mb-4">
//               The World First Jewelry <br />
//               Commerce Platform <br />
//               The Future Tale
//             </h1>
//             <p className="text-sm md:text-base text-gray-200">
//               Discover the future of jewelry shopping with our <br /> innovative
//               e-commerce platform, showcasing exceptional<br /> talent and unique
//               designs.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* WOMAN FOREGROUND IMAGE */}
//       <img
//         src={women}
//         alt="Model"
//         className="absolute right-0 bottom-0 w-1600 h-207.5 min-h-full  z-20 object-cover pointer-events-none hidden lg:block  min-[1601px]:hidden"
//       />

//       {/* BOTTOM GLASS STRIP */}

//       {/* <div className="absolute  bg-amber-700  bottom-0 left-0 w-full z-50">

//       </div> */}
// <div className="absolute bottom-0 left-0 w-full z-[999] bg-yellow-500">
//         <div className="bg-black/40 backdrop-blur-sm">
//           <div className="max-w-5xl mx-auto px-2 md:px-10 lg:px-20 py-3 md:py-10">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
//               {ServiceData.map((item) => (
//                 <div key={item.title} className="flex flex-col items-center gap-4">
//                   <div className="w-12 h-12 rounded-full  bg-red-500  flex items-center justify-center">
                
                    
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold">{item.title}</h4>
//                     <p className="text-xs text-gray-300">{item.subtitle}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> 
//         </div>
//        </div>
//     </section> 
//   );
// };

// export default HeroSection;

import React from "react";
import bgImage from "../assets/MainImage.png";
import women from "../assets/HeroImage.svg?url";
import { ServiceData } from "../Constants/Services";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex bottom-15 items-center min-h-screen px-5">
        <div className="w-full max-w-7xl mx-auto ">
          <div className="max-w-3xl text-white  ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-Sarlow font-bold leading-tight">
              The World First Jewelry <br />
              E  Commerce Platform <br />
              The Future Tale
            </h1>
            <p className="mt-4 text-md md:text-base text-gray-200 max-w-md">
             Discover the future of jewelry shopping with our <br /> innovative
              e-commerce platform, showcasing exceptional<br /> talent and unique
              designs.
            </p>
          </div>
        </div>
      </div>

      {/* WOMAN CUTOUT (LG+ ONLY) */}
        {/* <img
          src={women}
          alt="Model"
          className="
            hidden lg:block
            absolute bottom-0
            right-[5%] 
            lg:right-0
            lg:h-[120%]
            w-auto
            object-contain
            z-30
            pointer-events-none
          "
        /> */}

      {/* BOTTOM GLASS STRIP */}
      <div className="absolute bottom-55 lg:bottom-30  left-0 w-full z-40 sm:h-24 h-32">
        <div className="bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto  py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-6 text-white">
              {ServiceData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center lg:gap-3"
                >
                  <div className="w-20 h-20 rounded-full  flex items-center justify-center">
                    <item.Icon className="h-12 w-12 lg:h-18 lg:w-18 text-black" />
                  </div>
                  <h4 className="text-md font-semibold">{item.title}</h4>
                  <p className="text-md text-gray-300">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

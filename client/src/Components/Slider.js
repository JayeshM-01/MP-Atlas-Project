import React from 'react';
import Stupa from "../Components/images/stupa.png";
import Fort from "../Components/images/fort.png";
import Gwal from "../Components/images/gwal.png";
import Om from "../Components/images/om.png";


//   const [currentIndex, setCurrentIndex] = useState(1);
//   const images = [
//     'https://media.istockphoto.com/id/481494314/photo/gwalior-fort.jpg?s=1024x1024&w=is&k=20&c=ORh_QUd1dVomDuXRdMcFhiqeBsPLC8N3dy9gH-cGwj4=',
//     'https://source.unsplash.com/1600x900/?cat',
//     'https://source.unsplash.com/1600x900/?dog',
//     'https://source.unsplash.com/1600x900/?lego',
//     'https://source.unsplash.com/1600x900/?textures&patterns'
//   ];

//   const back = () => {
//     if (currentIndex > 1) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const next = () => {
//     if (currentIndex < images.length) {
//       setCurrentIndex(currentIndex + 1);
//     } else if (currentIndex <= images.length) {
//       setCurrentIndex(images.length - currentIndex + 1);
//     }
//   };

//   return (
//     <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
//       <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
//         <span>{currentIndex}</span>/
//         <span>{images.length}</span>
//       </div>

//       {images.map((image, index) => (
//         <figure
//           key={index}
//           className={`h-96 ${currentIndex === index + 1 ? '' : 'hidden'}`}
//         >
//           <img
//             src={image}
//             alt="Image"
//             className="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
//           />
//           <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-25">
//             Any kind of content here! Primum in nostrane potestate est, quid meminerimus? Nulla erit controversia. Vestri haec verecundius, illi fortasse constantius.
//           </figcaption>
//         </figure>
//       ))}

//       <button
//         onClick={back}
//         className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
//         </svg>
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
//         </svg>
//       </button>
//     </article>
//   );
// };

import Carousel from "./Carousel";

export default function Slider(){
  const images = [
    Fort,
     Stupa,
    Gwal,
    Om
  ];

  return (
    <div className=" mx-auto w-full h-[620px] overflow-hidden bg-cover">
      <Carousel images={images}/>
    </div>
  );
};


// import React from "react";
// import { Link } from "react-router-dom";

//  map contact

// const Contact = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//             <iframe
//               className="absolute inset-0"
//             style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
//               title="map"
//               marginheight="0"
//               marginwidth="0"
//             //   scrolling="no"
//             //   src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
//               width="100%"
//               height="100%"
//               frameborder="0"
//             ></iframe>
//             <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//               <div className="lg:w-1/2 px-6">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                   ADDRESS
//                 </h2>
//                 <p className="mt-1">
//                   Photo booth tattooed prism, portland taiyaki hoodie neutra
//                   typewriter
//                 </p>
//               </div>
//               <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                   EMAIL
//                 </h2>
//                 <Link className="text-indigo-500 leading-relaxed">example@email.com</Link>
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//                   PHONE
//                 </h2>
//                 <p className="leading-relaxed">123-456-7890</p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//               Feedback
//             </h2>
//             <p className="leading-relaxed mb-5 text-gray-600">
//               Post-ironic portland shabby chic echo park, banjo fashion axe
//             </p>
//             <div className="relative mb-4">
//               <label for="name" className="leading-7 text-sm text-gray-600">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label for="email" className="leading-7 text-sm text-gray-600">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>
//             <div className="relative mb-4">
//               <label for="message" className="leading-7 text-sm text-gray-600">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               ></textarea>
//             </div>
//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//               Button
//             </button>
//             <p className="text-xs text-gray-500 mt-3">
//               Chicharrones blog helvetica normcore iceland tousled brook viral
//               artisan.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-200 to-gray-600">
        <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto text-gray-900 rounded-lg">
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about Census India !
              </h2>
              <div className="text-gray-700 mt-8">
                Send us an &nbsp;
                <a className="underline" href="mailto:someone@gmail.com">
                  email
                </a>
                &nbsp; instead.
              </div>
            </div>
            <div className="mt-12 text-center">
              <img
                src="https://res.cloudinary.com/dranaclni/image/upload/v1685796281/cenIN/landingPage/images_14_cmttoh.jpg "
                alt="Contact"
              />
            </div>
          </div>
          <form>
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="text"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Phone Number
              </span>
              <input
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                type="phone"
                placeholder="Enter your Phone Number including country code"
                required
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your Message"
                required
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                className="btn btn-secondary  w-full text-center"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="https://res.cloudinary.com/dranaclni/image/upload/v1685850252/cenIN/someDeom/favicon-32x32_pudb31.png"
                alt="icon "
                // srcset=""
              />
              <span className="ml-3 text-xl">cenIN</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2023 cenIN- All rights reserved
              <Link
                className="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @CenIN
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default Contact;

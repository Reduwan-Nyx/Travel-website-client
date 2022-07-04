import React from 'react';

const About = () => {
    return (
        <section className='text-gray-600 body-font'>
            <h1 className='text-4xl font-bold text-gray-800 text-center mt-16'>OUR STORY</h1>
            <div className='container px-5 py-24 mx-auto flex flex-col'>
                <div className='lg:w-4/6 mx-auto'>
                    <div className='rounded-lg h-64 overflow-hidden'>
                    <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://i.ibb.co/2KKFX75/our-story.png"
              />
            </div>
            <div className='flex flex-col sm:flex-row mt-10'>
                <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                    <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                    <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    JustGo
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                  JustGo Travel Agency enables people to
                  explore the world through the insights and experiences of
                  others.
                  </p>
                </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  We JustGo Travel Agency enables people to
                  explore the world through the insights and experiences of
                  others. Its tag line “Every place has a story” resonates
                  through the notes people leave on the platform. In March this
                  year, JustGo rolled out an website, which is also available for
                  use on the mobile web. This website lets users explore the world, go to their favorite destination, book special tourist place and take experience from specific locations and share their story in the world for others to see and discover.
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
        </div>
     </div>

        </section>
    );
};

export default About;
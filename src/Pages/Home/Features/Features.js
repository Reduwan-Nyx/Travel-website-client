import React from "react";

const Features = () => {
  return (
    <div>
      <div className="relative bg-white  p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-24">
          FEATURES
        </h1>
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl leading-8 font-extrabold text-gray-900  tracking-tight sm:leading-9">
              Top Values For You
            </h4>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 text-gray-900  font-bold">
                      Lot's Of Choices
                    </h5>
                    <p class="mt-2 text-lg leading-6 text-gray-500 ">
                      Total 100+ Destinations that we work with.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 text-gray-900  font-bold">
                      Best Tour Guide
                    </h5>
                    <p class="mt-2 text-lg leading-6 text-gray-500 ">
                      Our tour guide with 10+ years of experience.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="text-lg leading-6 text-gray-900  font-bold">
                      Easy Booking
                    </h5>
                    <p class="mt-2 text-lg leading-6 text-gray-500 ">
                      With an easy and first ticket purchase process.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <img
              src="https://i.ibb.co/M1SCTKQ/feature-img.jpg"
              alt="illustration"
              class="h-96 w-auto relative mx-auto shadow-lg rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

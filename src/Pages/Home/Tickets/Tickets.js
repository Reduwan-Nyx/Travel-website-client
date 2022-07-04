import React from "react";

const Tickets = () => {
  return (
    <div>
      <section class="w-11/12 mx-auto mb-12 bg-gradient bg-green-500  py-8 md:py-16">
        <div class="max-w-5xl mx-auto px-5 box-content">
          <div class="flex items-center flex-col md:flex-row -mx-5">
            <div class="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
              <h6 class="uppercase font-bold text-xs md:text-base text-gray-800 dark:text-gray-100">
                Opening tickets
              </h6>
              <h3 class="font-bold font-heading text-2xl md:text-4xl text-white">
                Saturday 17
              </h3>
              <h3 class="font-bold font-heading text-lg md:text-xl text-white leading-tight">
                @ 10:00 AM
              </h3>
              <div class="mt-4 w-full md:w-44">
                <button
                  type="button"
                  class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Early bird
                </button>
              </div>
            </div>
            <div class="w-full md:w-auto px-5">
              <div class="flex justify-center text-white text-center">
                <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div class="text-2xl md:text-3xl font-semibold">
                    <span>0</span>
                    <span>1</span>
                  </div>
                  <div class="opacity-75 text-xs mt-3 uppercase">Day</div>
                </div>
                <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div class="text-2xl md:text-3xl font-semibold">
                    <span>1</span>
                    <span>8</span>
                  </div>
                  <div class=" opacity-75 text-xs mt-3 uppercase">Hour</div>
                </div>
                <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div class="text-2xl md:text-3xl font-semibold">
                    <span>5</span>
                    <span>0</span>
                  </div>
                  <div class=" opacity-75 text-xs mt-3 uppercase">Min</div>
                </div>
                <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                  <div class="text-2xl md:text-3xl font-semibold">
                    <span>1</span>
                    <span>9</span>
                  </div>
                  <div class=" opacity-75 text-xs mt-3 uppercase">Second</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;

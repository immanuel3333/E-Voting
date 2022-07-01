import React from "react";
import Logo from "../../assets/image/logo.png";
import LandingPageImage from "../../assets/image/image_landing_page.png";

function LandingPage() {
  return (
    <div class="max-w-7xl mx-auto">
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen font-poppins">
        <header class="h-24 sm:h-32 flex items-center z-30 w-full">
          <div class="container mx-auto px-6 flex items-center justify-between">
            <img className="max-w-3xl   mt-4 flex spa" src={Logo} alt="Logo" />
            <div class="flex items-center">
              <nav class=" text-gray-text dark:text-white  text-lg lg:flex items-center hidden">
                <a href="#" class="py-2 px-6 flex">
                  Tentang
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Cara Kerja
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Voting
                </a>
                <a href="#" class="py-2 px-6 flex">
                  Hasil Pemilu
                </a>
                <a
                  href="#"
                  class="py-1 px-4 rounded-full outline outline-offset-1 outline-blue-button  text-blue-button text-md mr-4 "
                >
                  Login
                </a>
              </nav>
              <button class="lg:hidden flex flex-col ml-4">
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-1/2 flex flex-col relative z-20 py-16 ">
              <div class="w-80 rounded-full bg-blue-border text-blue-button">
                Pemilihan gubernur DKI Jakarta
              </div>
              <h1 class=" text:4xl tracking-tight font-semibold text-gray-900 sm:text-5xl md:text-4xl mb-5 mt-5">
                Tentukan pemimpin yang berdaulat dengan jujur, adil, dan
                efisien.
              </h1>
              <p class="text-base sm:text-base  text-gray-text dark:text-white">
                Efisiesi PEMILU online tetap bedasarkan prinsip-prinsip PEMILU,
                yaitu langsung, umum, bebas, rahasia, jujur, dan adil.
              </p>
              <div class="flex mt-8">
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-full bg-blue-button border-2 border-transparent text-white text-md mr-4"
                >
                  Mulai Vote
                </a>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src={LandingPageImage} class="max-w-xs md:max-w-sm m-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

import React from "react";
import Logo from "../../assets/image/logo.png";

function LoginPage() {
  return (
    <div class="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 mx-auto my-28 font-poppins">
      <div class="self-center pb-4">
        <img className="max-w-3xl mb-5 flex spa" src={Logo} alt="Logo" />
      </div>
      <div class="self-center mb-6 text-4xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
        Sign In
      </div>
      <div class="mt-8">
        <form action="#" autoComplete="off">
          <div class="flex flex-col mb-2">
            <div class="flex relative ">
              <input
                type="text"
                id="sign-in-email"
                class="  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen rounded-full"
                placeholder="NIK"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <div class="flex relative ">
              <input
                type="password"
                id="sign-in-email"
                class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full"
                placeholder="Umur"
              />
            </div>
          </div>

          <div class="flex w-full">
            <button
              type="submit"
              class="py-2 px-4  bg-blue-button  focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full "
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
      <div class="flex items-center justify-center mt-6">
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
        >
          <span class="ml-2">Kembali ke halaman awal</span>
        </a>
      </div>
    </div>
  );
}

export default LoginPage;

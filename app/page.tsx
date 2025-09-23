import GoogleLogoutButton from "@/components/GoogleLogoutButton";

export default function
    Home() {
  return (

      <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
          <div className="flex items-start justify-between">
              <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
                  <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
                      <div className="flex items-center justify-center pt-6">
                          <svg width="35" height="30" viewBox="0 0 256 366" version="1.1"
                               preserveAspectRatio="xMidYMid">
                              <defs>
                                  <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%"
                                                  id="linearGradient-1">
                                      <stop stop-color="#FF0057" stop-opacity="0.16" offset="0%">
                                      </stop>
                                      <stop stop-color="#FF0057" offset="86.1354%">
                                      </stop>
                                  </linearGradient>
                              </defs>
                              <g>
                                  <path
                                      d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                                      fill="#001B38">
                                  </path>
                                  <circle fill="url(#linearGradient-1)"
                                          transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                                          cx="147.013244" cy="147.014675" r="78.9933938">
                                  </circle>
                                  <circle fill="url(#linearGradient-1)" opacity="0.5"
                                          transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                                          cx="147.013244" cy="147.014675" r="78.9933938">
                                  </circle>
                              </g>
                          </svg>
                      </div>
                      <nav className="mt-6">
                          <div>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Dashboard
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Projects
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                My tasks
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Calendar
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" className="m-auto" fill="currentColor"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Time manage
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto"
                                     viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Reports
                            </span>
                              </a>
                              <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
                                 href="#">
                            <span className="text-left">
                                <svg width="20" fill="currentColor" height="20" className="w-5 h-5"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                    </path>
                                </svg>
                            </span>
                                  <span className="mx-4 text-sm font-normal">
                                Settings
                            </span>
                              </a>
                          </div>
                      </nav>
                  </div>
              </div>
              <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                  <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
                      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                          <div className="relative flex items-center w-full pl-1 sm:pr-2 sm:ml-0">
                              <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                  <div className="relative flex items-center w-full h-full lg:w-64 group">
                                      <div
                                          className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                          <svg fill="none" className="relative w-5 h-5" stroke-linecap="round"
                                               stroke-linejoin="round" stroke-width="2" stroke="currentColor"
                                               viewBox="0 0 24 24">
                                              <path
                                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                              </path>
                                          </svg>
                                      </div>
                                      <svg
                                          className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                          <path
                                              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                          </path>
                                      </svg>
                                      <input type="text"
                                             className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                                             placeholder="Search"/>
                                      <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                          +
                                      </div>
                                  </div>
                              </div>
                              <GoogleLogoutButton />
                          </div>
                      </div>
                  </header>
                  <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                      <div className="flex flex-col flex-wrap sm:flex-row ">
                          <div className="w-full">
                              <div className="mb-4">
                                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                      <div className="flex items-center justify-between mb-6">
                                          <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                                <svg width="25" height="25" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                                    <path
                                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                                        fill="#4285F4">
                                                    </path>
                                                    <path
                                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                                        fill="#34A853">
                                                    </path>
                                                    <path
                                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                                        fill="#FBBC05">
                                                    </path>
                                                    <path
                                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                                        fill="#EB4335">
                                                    </path>
                                                </svg>
                                            </span>
                                              <div className="flex flex-col">
                                                <span className="ml-2 font-bold text-black text-md dark:text-white">
                                                    Google
                                                </span>
                                                  <span className="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Google Inc.
                                                </span>
                                              </div>
                                          </div>
                                          <div className="flex items-center">
                                              <button className="p-1 border border-gray-200 rounded-full">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                       className="w-4 h-4 text-yellow-500" fill="currentColor"
                                                       viewBox="0 0 1792 1792">
                                                      <path
                                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                      </path>
                                                  </svg>
                                              </button>
                                              <button className="text-gray-200">
                                                  <svg width="25" height="25" fill="currentColor"
                                                       viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                          d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                      </path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                      <div className="flex items-center justify-between mb-4 space-x-12">
                                        <span
                                            className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                            PROGRESS
                                        </span>
                                          <span
                                              className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                            HIGH PRIORITY
                                        </span>
                                      </div>
                                      <div className="block m-auto">
                                          <div>
                                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span className="font-bold text-gray-700 dark:text-white">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                          </div>
                                          <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                              <div
                                                  className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full">
                                              </div>
                                          </div>
                                      </div>
                                      <div className="flex items-center justify-start my-4 space-x-4">
                                        <span
                                            className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                          <span
                                              className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                            UI/UX
                                        </span>
                                      </div>
                                      <div className="flex -space-x-2">
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/1.jpg" alt="Guy"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/2.jpeg" alt="Max"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/3.jpg" alt="Charles"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/4.jpg" alt="Jade"/>
                                          </a>
                                      </div>
                                      <span
                                          className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                  </div>
                              </div>
                              <div className="mb-4">
                                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                      <div className="flex items-center justify-between mb-6">
                                          <div className="flex items-center">
                                            <span className="relative p-2 bg-blue-100 rounded-xl">
                                                <svg width="25" height="25" viewBox="0 0 2447.6 2452.5"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-rule="evenodd" fill-rule="evenodd">
                                                        <path
                                                            d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                                                            fill="#36c5f0">
                                                        </path>
                                                        <path
                                                            d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                                                            fill="#2eb67d">
                                                        </path>
                                                        <path
                                                            d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                                                            fill="#ecb22e">
                                                        </path>
                                                        <path
                                                            d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                                                            fill="#e01e5a">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </span>
                                              <div className="flex flex-col">
                                                <span className="ml-2 font-bold text-black text-md dark:text-white">
                                                    Slack
                                                </span>
                                                  <span className="ml-2 text-sm text-gray-500 dark:text-white">
                                                    Slack corporation
                                                </span>
                                              </div>
                                          </div>
                                          <div className="flex items-center">
                                              <button className="p-1 border border-gray-200 rounded-full">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                       className="w-4 h-4 text-yellow-500" fill="currentColor"
                                                       viewBox="0 0 1792 1792">
                                                      <path
                                                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                      </path>
                                                  </svg>
                                              </button>
                                              <button className="text-gray-200">
                                                  <svg width="25" height="25" fill="currentColor"
                                                       viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                          d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                      </path>
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                      <div className="flex items-center justify-between mb-4 space-x-12">
                                        <span
                                            className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                                            COMPLETED
                                        </span>
                                          <span
                                              className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                                            MEDIUM PRIORITY
                                        </span>
                                      </div>
                                      <div className="block m-auto">
                                          <div>
                                            <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span className="font-bold text-gray-700 dark:text-white">
                                                    50
                                                </span>
                                                /50
                                            </span>
                                          </div>
                                          <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                              <div
                                                  className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full">
                                              </div>
                                          </div>
                                      </div>
                                      <div className="flex items-center justify-start my-4 space-x-4">
                                        <span
                                            className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                            IOS APP
                                        </span>
                                          <span
                                              className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                                            ANDROID
                                        </span>
                                      </div>
                                      <div className="flex -space-x-2">
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/1.jpg" alt="Guy"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/2.jpeg" alt="Max"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/3.jpg" alt="Charles"/>
                                          </a>
                                          <a href="#" className="">
                                              <img
                                                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                                                  src="/images/person/4.jpg" alt="Jade"/>
                                          </a>
                                      </div>
                                      <span
                                          className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                        DUE DATE : 18 JUN
                                    </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>

  );
}

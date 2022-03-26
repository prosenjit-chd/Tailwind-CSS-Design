import React from 'react';
import { FaRegChartBar, FaBandcamp } from "react-icons/fa";
const SeventhSection = () => {
    return (
        <div>
            <div class="bg-slate-100 py-16 mt-8">
                <div class="mb-8">
                    <h1 class="text-3xl font-extrabold mb-6">DISCOVER MORE NFTS</h1>

                    <nav class="px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                        <div class="container flex flex-wrap justify-between items-center mx-auto">

                            <div class="flex items-center md:order-2">
                                <div class="hidden mr-3 md:mr-0 md:block">
                                    <div class="flex">
                                        <button class="flex items-center gap-2 rounded-full bg-slate-300 text-indigo-700 text-extrabold px-5 py-2 "><FaRegChartBar /> All Filters</button>
                                    </div>

                                </div>


                                <button data-collapse-toggle="mobile-menu-3" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
                                <a href="https://flowbite.com" class="flex items-left">
                                    <button class="rounded-full bg-indigo-700 text-white px-5 py-2">All Categories</button>

                                </a>
                                <ul class="flex flex-col mt-2 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ml-2">Art</button>
                                    </li>
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ">Celebrities</button>
                                    </li>
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ">Gaming</button>
                                    </li>
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ml-2">Sport</button>
                                    </li>
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ">Music</button>
                                    </li>
                                    <li>
                                        <button class="rounded-full bg-slate-300 text-black text-extrabold px-5 py-2 ">Crypto</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="grid grid-cols-4 gap-10 ">
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="p-3 bg-white rounded-xl">
                        <div className='relative'>
                            <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-64 rounded-2xl" alt="Flowbite Logo" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-12' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10  w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-20' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                            <img className='h-10 w-10 rounded-full border-2 border-gray-200 absolute -bottom-4 left-28' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div>
                            <h1 class="text-xl font-bold mt-4">ArtCrypto</h1>
                            <div class="flex justify-between mt-4">
                                <div class="flex items-center">
                                    <FaBandcamp class="font-semibold text-green-700" />
                                    <h1 class="text-l font-semibold ml-2 text-green-700">0.25 ETH</h1>
                                </div>
                                <div>
                                    <h1 class="text-l font-semibold text-stone-500">1 of 321</h1>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-3 mb-1 font-extrabold text-stone-500" />
                        <div>
                            <div class="flex justify-between mt-4 items-center">
                                <div>
                                    <button class="rounded-full border-2 text-indigo-700 px-4 py-2 text-bold bg-slate-100">3h 50m 2s left</button>
                                </div>
                                <div>
                                    <h1 class="text-l text-indigo-700">Place a bid</h1>
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
                <div class="text-center">
                    <button class=" rounded-full border-2 border-indigo-700 text-indigo-700 px-6 py-3 text-bold my-8 text-bold ">More NFTs</button>
                </div>

            </div>
        </div>
    );
};

export default SeventhSection;
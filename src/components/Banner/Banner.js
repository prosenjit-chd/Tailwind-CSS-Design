import React from 'react';
import { FaEthereum } from "react-icons/fa";

const Banner = () => {
    return (
        <>
            <div class="grid grid-cols-2 gap-4 py-20">
                <div >
                    <h1 class="text-4xl font-extrabold">DISCOVER, AND COLLECT <br />DIGITAL ART NFTS</h1>
                    <h2 class="mt-4 font-normal">Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</h2>
                    <button class="rounded-full bg-indigo-700 text-white px-8 py-3 ml-4 mt-6">Explore Now</button>
                    <div class="grid grid-cols-3 mt-6">
                        <div>
                            <h1 class="text-4xl font-extrabold">98K+</h1>
                            <h2>Artwork</h2>
                        </div>
                        <div>
                            <h1 class="text-4xl font-extrabold">12K+</h1>
                            <h2>Auction</h2>
                        </div>
                        <div>
                            <h1 class="text-4xl font-extrabold">15K+</h1>
                            <h2>Artist</h2>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="px-4 rounded-lg" alt="Flowbite Logo" /> */}
                    <div className='relative h-96 ml-40'>
                        <img className='object-cover h-96 w-80 rounded-2xl' src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <img className='absolute md:top-8 md:left-6 top-24 object-cover h-80 md:w-80 w-80 rounded-2xl' src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" style={{ 'zIndex': '-1' }} />
                        <img className='absolute md:top-12 md:left-12 top-40 object-cover h-72 md:w-80 w-80 rounded-2xl' src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" style={{ 'zIndex': '-2' }} />
                        <div className=''>
                            <div className='absolute top-4 left-6 text-white'>
                                <h3 className='md:text-lg text-2xl font-semibold'>Abstr Gradient NFT</h3>
                                <div className='flex items-center'>
                                    <img className='h-10 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                    <small className='md:text-sm text-lg ml-2'>Akrah17</small>
                                </div>
                            </div>
                            <img className='animate-spin-slow object-cover absolute bottom-20 md:-left-12 left-24 w-28 h-28' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                            <div className='flex justify-around bg-gray-100/[.2] backdrop-blur-md rounded-md py-2 w-72 absolute bottom-3 md:left-4 left-3  text-white'>
                                <div>
                                    <small className='text-xs font-light'>Current Bid</small>
                                    <p className='text-sm flex items-center'><FaEthereum /> 0.25 ETH</p>
                                </div>
                                <div>
                                    <small className='text-xs font-light'>Ends in</small>
                                    <p className='text-sm'>12h 43m 42s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
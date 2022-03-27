import React from 'react';
import { FaEthereum } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const FourthSection = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 py-20 lg:px-20 px-8'>
            <div className='col-span-1 mb-0'>
                <img className='object-cover h-96 w-96 rounded-xl mx-0' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className='flex justify-between rounded-md py-4 lg:w-96 w-full mt-4 mx-0'>
                    <div className='flex'>
                        <img className='h-12 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                        <div className='ml-2'>
                            <h4 className='text-xl font-semibold'>The Futr Abstr</h4>
                            <small className='text-xs'>10 in the stock</small>
                        </div>
                    </div>
                    <div>
                        <small className='text-xs'>Highest Bid</small>
                        <p className='flex items-center font-semibold'><FaEthereum /> 0.25 ETH</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-between pb-6'>

                {
                    [1, 2, 3].map((p) => <div className='flex mb-4 lg:mb-0'>
                        <img className='object-cover h-32 w-32 rounded-xl' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <div className='ml-4'>
                            <h3 className='font-medium'>The Futr Abstr</h3>
                            <div className='flex items-center'>
                                <img className='h-10 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                                <small className='ml-2 text-gray-400'>1 of 8</small>
                            </div>
                            <button type='button' className='mt-2 rounded-full bg-indigo-700 border-2 border-indigo-700 text-white px-5 py-2.5 text-center text-sm'>Place a bid</button>
                        </div>
                    </div>
                    )
                }
                {/* <div className='flex  mb-4 lg:mb-0'>
                    <img className='object-cover h-32 w-32 rounded-xl' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='ml-4'>
                        <h3 className='font-medium'>The Futr Abstr</h3>
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                            <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                            <small className='ml-2 text-gray-400'>1 of 8</small>
                        </div>
                        <button type='button' className='mt-2 rounded-full border-2 border-indigo-700 text-indigo-700 px-5 py-2.5 text-center text-sm'>Place a bid</button>
                    </div>
                </div>
                <div className='flex  mb-4 lg:mb-0'>
                    <img className='object-cover h-32 w-32 rounded-xl' src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='ml-4'>
                        <h3 className='font-medium'>The Futr Abstr</h3>
                        <div className='flex items-center'>
                            <img className='h-10 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                            <div className='ml-2 border-2 border-green-400 rounded text-green-400 text-sm px-2 py-1 flex items-center'><FaEthereum />0.25 ETH</div>
                            <small className='ml-2 text-gray-400'>1 of 8</small>
                        </div>
                        <button type='button' className='mt-2 rounded-full border-2 border-indigo-700 text-indigo-700 px-5 py-2.5 text-center text-sm'>Place a bid</button>
                    </div>
                </div> */}
            </div>
            <div className='border-l border-gray-200 px-12'>
                <h1 className='text-xl font-bold'>Top Collections over</h1>
                <p className='text-indigo-700 text-sm'>Last 7 days</p>
                <ul className=" text-sm font-medium text-gray-900 bg-white mt-4">
                    <li className="w-full py-2 border-b">
                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>1</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-green-600'>+26.52%</p>
                        </div>

                    </li>
                    <li className="w-full py-2 border-b">

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>2</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-red-600'>+26.52%</p>
                        </div>

                    </li>
                    <li className="w-full py-2 border-b">

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>3</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-green-600'>+26.52%</p>
                        </div>

                    </li>
                    <li className="w-full py-2 border-b">

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>4</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' />
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-red-600'>+26.52%</p>
                        </div>

                    </li>
                    <li className="w-full py-2 border-b">

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>5</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-green-600'>+26.52%</p>
                        </div>

                    </li>
                    <li className="w-full py-2 border-b">

                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-medium'>6</p>
                            <div className='relative'>
                                <img className='h-14 rounded-full' src="https://pbs.twimg.com/media/FOySW45agAEKGdE?format=jpg&name=large" alt="" />
                                {/* <BsFillPatchCheckFill className='text-sky-500 text-xl absolute -top-1.5 -right-1.5' /> */}
                            </div>
                            <div>
                                <p>CryptoFunks</p>
                                <small className='flex items-center'><FaEthereum /> 19,769.19</small>
                            </div>
                            <p className='text-red-600'>+26.52%</p>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FourthSection;
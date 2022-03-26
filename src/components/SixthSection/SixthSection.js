import React from 'react';

const SixthSection = () => {
    return (
        <div class="my-16">
            <div class="grid grid-cols-7 gap-4">

                <div className='col-span-4 grid grid-cols-2 grap-4'>
                    <div className=' flex flex-col justify-between'>
                        <div className='relative'>
                            <img className='float-right object-cover h-72 w-72 rounded-xl' src="https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <img className='h-12 w-12 rounded-full border-2 border-gray-200 absolute -bottom-4 -right-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                        <div className='relative mt-10'>
                            <img className='float-right object-cover h-56 w-56 rounded-xl' src="https://images.unsplash.com/photo-1617791160588-241658c0f566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                            <img className='h-12  w-12  rounded-full border-2 border-gray-200 absolute -bottom-4 -right-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='ml-10 relative'>
                            <img className='object-cover h-64 w-64 rounded-xl' src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            <img className='h-12  w-12  rounded-full border-2 border-gray-200 absolute -bottom-4 right-4' src="https://pbs.twimg.com/media/FOrRE92aAAAlO3n?format=jpg&name=large" alt="" />
                        </div>
                    </div>
                </div>

                <div class="col-span-3 flex flex-col justify-center">
                    <div>
                        <h1 class="text-3xl font-extrabold">CREATE AND<br />SELL YOUR NFTS</h1>
                        <h2 class="mt-4 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum
                            sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</h2>
                        <button class="rounded-full bg-indigo-700 text-white px-8 py-3 mt-6">Sign Up Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;
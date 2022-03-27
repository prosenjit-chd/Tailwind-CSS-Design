import React from 'react';

const FifthSection = () => {
    return (
        <div class="bg-slate-100 py-16 mt-8 lg:px-20 px-8">
            <h1 class="text-3xl font-extrabold mb-6">COLLECTION FEATURED NFTS</h1>

            <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    [1, 2, 3].map((p) => <div>
                        <div class="flex">
                            <div>
                                <img src="https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="object-cover w-80 h-80 rounded-lg" alt="Flowbite Logo" />
                            </div>
                            <div class="grid grid-rows-3 gap-2 ml-4">
                                <div>
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="object-cover w-24 h-24 rounded-lg" alt="Flowbite Logo" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class="object-cover w-24 h-24 rounded-lg" alt="Flowbite Logo" />
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class=" object-cover w-24 h-24 rounded-lg" alt="Flowbite Logo" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <h1 class="text-2xl font-bold mt-4">Amazing Collection</h1>
                            <div class="flex justify-between">
                                <div class="flex items-center">
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" class=" object-cover w-6 h-6 rounded-full" alt="Flowbite Logo" />
                                    <h1 class="text-l font-semibold ml-2">by Arkhan</h1>
                                </div>
                                <div>
                                    <button class="rounded-full border-2 border-indigo-700 text-indigo-700 px-4 py-2 text-bold">Total 54 Items</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default FifthSection;
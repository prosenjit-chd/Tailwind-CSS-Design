import React from 'react';

const Footer = () => {
    return (
        <div class="mt-12">
            <div class="grid grid-cols-4 gap-4">
                <div>
                    <h1 class="text-2xl font-extrabold">NFTERS</h1>
                    <h2 class="my-4 font-normal">The world's first and lagest digital marketplace
                        for crypto collectibles and non--fungible  tokens (NFTs). Buy, sell, and discover
                        exclusive items.</h2>
                    <div class="flex mt-3">
                        <img src="https://seeklogo.com/images/F/facebook-logo-C64946D6D2-seeklogo.com.png" class=" object-cover w-8 h-8 rounded-full mr-3" alt="Flowbite Logo" />
                        <img src="https://e7.pngegg.com/pngimages/421/879/png-clipart-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf.png" class=" object-cover w-8 h-8 rounded-full mr-3" alt="Flowbite Logo" />
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" class=" object-cover w-8 h-8 rounded-full" alt="Flowbite Logo" />
                    </div>
                </div>

                <div class="ml-16">
                    <ul>
                        <li>
                            <h5 class="text-xl font-bold mb-3">Market Place</h5>
                        </li>
                        <li class="font-semibold my-1">All NFTs</li>
                        <li class="font-semibold my-1">New</li>
                        <li class="font-semibold my-1">Art</li>
                        <li class="font-semibold my-1">Sports</li>
                        <li class="font-semibold my-1">Sports</li>
                        <li class="font-semibold my-1">Music</li>
                        <li class="font-semibold my-1">Domain Name</li>
                    </ul>
                </div>

                <div >
                    <ul>
                        <li>
                            <h5 class="text-xl font-bold mb-3">My Account</h5>
                        </li>
                        <li class="font-semibold my-1">Profile</li>
                        <li class="font-semibold my-1">Favorite</li>
                        <li class="font-semibold my-1">My Collections</li>
                        <li class="font-semibold my-1">Settings</li>
                    </ul>
                </div>
                <div>
                    <h1 class="text-xl font-bold">Stay in the loop</h1>
                    <h2 class="my-4 font-normal">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs</h2>
                    <button class="rounded-full bg-indigo-700 text-white px-8 py-3 ml-4 mt-6">Subscibe Now</button>
                </div>
            </div>
            <h2 class="font-2xl pt-24 pb-4 text-center text-slate-400">Copyright  © 2022 Prosenjit Chowdhury</h2>
        </div>
    );
};

export default Footer;
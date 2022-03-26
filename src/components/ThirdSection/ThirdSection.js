import React from 'react';
import { FaCreditCard, FaRegChartBar } from "react-icons/fa";

const ThirdSection = () => {
    return (
        <>
            <div class="bg-slate-100 grid grid-cols-3 gap-4 py-20">
                <div>
                    <h1 class="text-2xl font-extrabold">THE AMAZING ART<br /> OF THE WORLD HERE </h1>
                </div>
                <div class="flex gap-3">
                    <div>
                        <FaCreditCard class="text-3xl" />
                    </div>
                    <div>
                        <h1 class="text-xl font-bold"> Fast Transaction</h1>
                        <h2 class="mt-4">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Aliquam <br /> etiam viverra tellus imperdiet.</h2>
                    </div>
                </div>
                <div class="flex gap-3">
                    <div>
                        <FaRegChartBar class="text-3xl" />
                    </div>
                    <div>
                        <h1 class="text-xl font-bold">Growth Transaction</h1>
                        <h2 class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus.</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdSection;
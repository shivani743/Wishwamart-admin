"use client";
import React from "react";

export const Pricerange = () => {
    return (
        <>

            <section className="py-4">
              
                <div className="flex items-center rounded ">
                    <label htmlFor="bordered-checkbox-1" className="w-full py-1 ms-2 text-sm font-normal text-black ">Under ₹2,000</label>
                </div>
                <div className="flex items-center rounded ">
                    <label htmlFor="bordered-checkbox-1" className="w-full py-1 ms-2 text-sm font-normal text-black ">₹2,000 - ₹5,000</label>
                </div>
                <div className="flex items-center rounded ">
                    <label htmlFor="bordered-checkbox-1" className="w-full py-1 ms-2 text-sm font-normal text-black ">₹5,000 - ₹10,000</label>
                </div>
                <div className="flex items-center rounded ">
                    <label htmlFor="bordered-checkbox-1" className="w-full py-1 ms-2 text-sm font-normal text-black ">₹10,000 - ₹20,000</label>
                </div>
                <div className="flex items-center rounded ">
                    <label htmlFor="bordered-checkbox-1" className="w-full py-1 ms-2 text-sm font-normal text-black ">Over ₹20,000</label>
                </div>
                
            </section>

        </>
    );
};

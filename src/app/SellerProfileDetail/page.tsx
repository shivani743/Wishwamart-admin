"use client";
import React, { useState } from 'react';
import { Star, Globe, Upload, GripHorizontal, EllipsisVertical } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import ChartOne from '@/components/Home/Charts/ChartOne';
import ChartTwo from '@/components/Home/Charts/ChartTwo';
import ChartThree from '@/components/Home/Charts/ChartThree';
import AllProduct from '../AllProduct/page';
import ProductTable from '@/components/ProductTable';




const SellerProfileDetail: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Seller Profile Details" />
                <div className="mx-auto pb-4">
                    <div className=" pt-2">
                        <div className="container row lg:flex block gap-4">
                            <div className="@responsive xl:w-1/4 lg:w-2/5 w-full">
                                <div className="bg-white p-4 shadow-xl py-12.5">
                                    <div>
                                        <span className="h-24 w-24 rounded-full mx-auto">
                                            <Image src="/assets/images/company.svg" alt="Wishwamart" width={104} height={104} className="mx-auto" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="@responsive xl:w-3/4 lg:w-3/5 w-full">
                                <div className="bg-white shadow-xl p-6">
                                    <h2 className="font-Exo mb-2 text-xl">Company details</h2>
                                    <p className="text-lg  text-orange-600 font-bold font-Exo mb-2">Demo company</p>
                                    <p className="mt-3 text-gray-400 text-left mb-3">Introducing "Scarlet Temptation" - the ultimate red lipstick. With its rich, vibrant color and long-lasting formula, it's perfect for any occasion,from a casual day out to a glamorous evening affair. Flaunt your confidence and elegance with "Scarlet Temptation".</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 grid grid-cols-12 gap-2 md:gap-6 2xl:gap-2.5 shadow-xl">
                            <ChartOne/>
                            <ChartThree />
                        </div>

                        <div className="mt-2">
                            <ProductTable/>

                        </div>
                        
                    </div>
                </div>


            </DefaultLayout>
        </>
    );
};

export default SellerProfileDetail;

"use client";
import React, { useState } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const EditProduct: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Edit Product" />
                <div className="row lg:flex block gap-2">
                    <div className="lg:w-1/4 w-full ">
                        <div className="bg-white shadow-xl p-6">
                            <h2 className="font-Exo mb-2 text-xl">Thumbnail</h2>
                            <Image src="/assets/images/product.png" className="h-full w-full" alt="Wishwamart" width={154} height={154} />
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Status</h2>
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Published</span>
                            <p className="mt-2 text-sm text-gray-500">Date: 02-04-2024</p>
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Categories</h2>
                            <hr></hr>
                            <span className="mt-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Cosmetic</span>
                            <h2 className="font-Exo mb-2 text-xl mt-4">Tags</h2>
                            <hr></hr>
                            <div className="flex gap-2 mt-2">
                                <div data-dismissible="chip"
                                    className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-200 py-1.5 px-3 font-sans text-xs text-black">
                                    <span className="mr-5">cosmetics</span>
                                    <button data-dismissible-target="chip"
                                        className="!absolute  top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs f text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"
                                                stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div data-dismissible="chip"
                                    className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-200 py-1.5 px-3 font-sans text-xs text-black">
                                    <span className="mr-5">makeup</span>
                                    <button data-dismissible-target="chip"
                                        className="!absolute  top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs f text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button">
                                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"
                                                stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Product Reports</h2>
                            <Image src="/assets/images/nodata.png" className="mx-auto" alt="Wishwamart" width={154} height={154} />

                            <p className="text-center text-sm text-gray-400">No data available. Sales data will begin capturing
                                once product has been published.</p>
                        </div>


                    </div>
                    <div className="lg:w-3/4 w-full">
                        <div className="bg-white shadow-xl p-6">
                            <h2 className="font-Exo mb-2 text-xl">General Details</h2>
                            <hr></hr>
                            <p className="mt-4">Product title</p>
                            <p className="text-lg  text-orange-600 font-bold font-Exo">Red lipstick - matt finishing with soft touch</p>

                            <p className="mt-3 text-gray-400 text-left mb-3">Introducing "Scarlet Temptation" - the ultimate red lipstick. With its rich,
                                vibrant color and long-lasting formula, it's perfect for any occasion,
                                from a casual day out to a glamorous evening affair.
                                Flaunt your confidence and elegance with "Scarlet Temptation".</p>

                            <hr></hr>

                            <h2 className="font-Exo mb-2 text-xl mt-4">Product variants</h2>
                            <p className="mt-1 mb-2 text-gray-400 text-left">Color variants</p>
                            <div className="flex gap-2">
                                <span className="bg-[#1a2f6e] w-6 px-4 py-4 rounded opacity-1"></span>
                              
                                <span className="bg-[#7838b7] w-6 px-4 py-4 rounded opacity-1"></span>
                                <span className="bg-[#218438] w-6 px-4 py-4 rounded opacity-1"></span>
                                <span className="bg-[#922121] w-6 px-4 py-4 rounded opacity-1"></span>
                            </div>
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo text-xl">Media</h2>
                            <p className=" text-gray-400 text-left mb-3">Photos & Videos</p>
                            <hr></hr>
                            <div className="w-full  overflow-y-auto h-[115px]">
                                <div className="flex flex-nowrap gap-2 leading-6">
                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">
                                                <Image src={`/assets/images/categories/ayurveda.jpg`} className="rounded-md h-auto w-full" alt="Wishwamart" height={90} width={100} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">
                                                <Image src={`/assets/images/categories/chemical.svg`} className="rounded-md w-full h-[88px]" alt="Wishwamart" height={88} width={100} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">
                                                <Image src={`/assets/images/categories/cosmetic.jpg`} className="rounded-md h-auto w-full" alt="Wishwamart" height={89} width={100} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">
                                                <Image src={`/assets/images/categories/agriculture.jpg`} className="rounded-md h-[89px] w-full" alt="Wishwamart" height={1} width={100} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/clothing.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={100}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/footwear.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={88}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/homedecor.jpg`}
                                                    className="rounded-md h-[89px] w-full"
                                                    alt="Wishwamart"
                                                    height={88}
                                                    width={100}

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/furniture.jpg`}
                                                    className="rounded-md  h-[89px] w-full"
                                                    alt="Wishwamart"
                                                    height={85}
                                                    width={100}

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/food.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={100}

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">
                                                <Image
                                                    src={`/assets/images/categories/machinary.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={100}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/accessroies.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={100}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-white col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 p-1 rounded-md shadow-xl w-[140px]">
                                            <div className="text-center card-body">

                                                <Image
                                                    src={`/assets/images/categories/software.jpg`}
                                                    className="rounded-md h-auto w-full"
                                                    alt="Wishwamart"
                                                    height={100}
                                                    width={100}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo text-xl mb-4">Pricing</h2>
                            <p className=" text-gray-400 text-left">Base price</p>
                            <p className="text-black font-bold">₹1499.00 </p>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Discount Type *</label>
                                <div className='flex gap-2'>
                                    <div className="flex  w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Percentage %</label>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-2.5 mb-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">TAX Class *</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tax free goods" required disabled />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">VAT Amount (%) *</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12%" required disabled />
                                </div>
                            </div>
                            <hr></hr>

                            <div className="flex">
                                <Link href="EditProduct">
                                    <button className="mt-4 flex bg-lime-600 hover:bg-lime-600 text-white font-normal font-Exo py-2 px-4 ml-2 rounded">
                                        Edit
                                    </button>
                                </Link>
                                <button className="mt-4 flex theme-bg-blue text-white font-normal font-Exo py-2 px-4 rounded ml-2">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default EditProduct;

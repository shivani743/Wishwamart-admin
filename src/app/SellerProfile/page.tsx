"use client";
import React, { useState } from 'react';
import { Star, Globe,EllipsisVertical } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';




const SellerProfile: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Manage Seller" />
                <div className="mx-auto pb-4">
                    <div className=" pt-2">
                        <div className="container row lg:flex block gap-4">
                            <div className="@responsive xl:w-1/4 lg:w-2/5 w-full">
                                <div className="bg-white p-4 shadow-xl py-6 rounded-md">
                                    <div>
                                        <span className="h-12 w-12 rounded-full mx-auto">
                                            <Image
                                                className="mx-auto"
                                                width={111}
                                                height={111}
                                                src={"/images/user/user-img.webp"}
                                               
                                                alt="User"
                                            />
                                        </span>
                                        <div className="text-center pt-2">
                                            <h3 className="font-medium text-lg">Jane Thomas</h3>
                                            <div className="rating text-sm leading-[21px] flex justify-center py-1  items-center">
                                                <div className="flex mr-2">
                                                    <Star size={16} fill="#ffa500" strokeWidth={0} />
                                                    <Star size={16} fill="#ffa500" strokeWidth={0} />
                                                    <Star size={16} fill="#ffa500" strokeWidth={0} />
                                                    <Star size={16} fill="#ffa500" strokeWidth={0} />
                                                </div>
                                                <span className="text-gray-700"><strong className="font-medium">4.5</strong> - 20 Reviews</span>
                                            </div>
                                            <div className="flex items-center justify-center mb-1">
                                                <span className="mr-2">
                                                    <Globe size={16} color="#878787" strokeWidth={0.75} />
                                                </span>
                                                <p className="text-sm">http://swadesi.io/profile</p>
                                            </div>

                                            <p className="py-2 text-gray-400 text-sm font-Exo mb-4">
                                                A wholesome farm owner in Montana. Upcoming gallery solo
                                                show in Germany
                                            </p>

                                        </div>


                                        <div id="third-party-auth" className="flex items-center justify-center flex-wrap">
                                            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                                <img className="max-w-[25px]" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
                                            </button>
                                            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                                                <img className="max-w-[25px]" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="Linkedin" />
                                            </button>
                                            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1" >
                                                <img className="max-w-[25px]" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
                                            </button>
                                        </div>
                                        <button className="block w-full py-4 border-t border-gray-50 text-xs text-gray-500 hover:text-gray-800 uppercase">
                                            Member since Mar 15, 2023
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="@responsive xl:w-3/4 lg:w-3/5 w-full">
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-2.5">
                                    <Link href="/SellerProfileDetail">

                                 
                                    <div className="bg-white p-4 shadow-xl py-6">
                                        <div className="relative inline-block text-left float-end">
                                            <div className="group">
                                                <button type="button" className="mt-1 inline-flex justify-center items-center w-full text-sm font-medium text-black">
                                                    <EllipsisVertical strokeWidth={1} />

                                                </button>
                                                <div
                                                    className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="float-end inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                        <Image src="/assets/images/company.svg" alt="Wishwamart" width={54} height={54} />
                                        <h3 className="mt-2 font-bold font-Exo theme-text-color">Wishwamart</h3>
                                        <p className="mt-2 text-sm text-gray-600">Vill-Bhataulia, PO-Patahi, Belsand, Near baluahi pokhar, SITAMARHI, BIHAR., Bhatulia, Sitamarhi, Bihar - 843316</p>
                                    </div>
                                    </Link>
                                    <div className="bg-white p-4 shadow-xl py-6">
                                        <div className="relative inline-block text-left float-end">
                                            <div className="group">
                                                <button type="button" className="mt-1 inline-flex justify-center items-center w-full text-sm font-medium text-black">
                                                    <EllipsisVertical strokeWidth={1} />

                                                </button>
                                                <div
                                                    className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="float-end inline-flex items-center rounded-md bg-pink-100 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-green-600/20">Unverified</span>
                                        <Image src="/assets/images/company.svg" alt="Wishwamart" width={54} height={54} />
                                        <h3 className="mt-2 font-bold font-Exo theme-text-color">Wishwamart</h3>
                                        <p className="mt-2 text-sm text-gray-600">Vill-Bhataulia, PO-Patahi, Belsand, Near baluahi pokhar, SITAMARHI, BIHAR., Bhatulia, Sitamarhi, Bihar - 843316</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-xl py-6">
                                        <div className="relative inline-block text-left float-end">
                                            <div className="group">
                                                <button type="button" className="mt-1 inline-flex justify-center items-center w-full text-sm font-medium text-black">
                                                    <EllipsisVertical strokeWidth={1} />

                                                </button>
                                                <div
                                                    className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="float-end inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                        <Image src="/assets/images/company.svg" alt="Wishwamart" width={54} height={54} />
                                        <h3 className="mt-2 font-bold font-Exo theme-text-color">Wishwamart</h3>
                                        <p className="mt-2 text-sm text-gray-600">Vill-Bhataulia, PO-Patahi, Belsand, Near baluahi pokhar, SITAMARHI, BIHAR., Bhatulia, Sitamarhi, Bihar - 843316</p>
                                    </div>
                                    <div className="bg-white p-4 shadow-xl py-6">
                                        <div className="relative inline-block text-left float-end">
                                            <div className="group">
                                                <button type="button" className="mt-1 inline-flex justify-center items-center w-full text-sm font-medium text-black">
                                                    <EllipsisVertical strokeWidth={1} />

                                                </button>
                                                <div
                                                    className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                    <div className="py-1">
                                                        <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Remove</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="float-end inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                        <Image src="/assets/images/company.svg" alt="Wishwamart" width={54} height={54} />
                                        <h3 className="mt-2 font-bold font-Exo theme-text-color">Wishwamart</h3>
                                        <p className="mt-2 text-sm text-gray-600">Vill-Bhataulia, PO-Patahi, Belsand, Near baluahi pokhar, SITAMARHI, BIHAR., Bhatulia, Sitamarhi, Bihar - 843316</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </DefaultLayout>
        </>
    );
};

export default SellerProfile;

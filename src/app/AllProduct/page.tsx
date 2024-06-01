"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Star } from 'lucide-react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Pagination } from "@/components/Home/Pagination/pagination";
import DatePickerOne from "@/components/Home/DatePicker/DatePickerOne";
import { Pricerange } from "@/components/Home/Pricerange/Pricerange";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


const AllProduct: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Product Catalogue" />
                {/* Table satrt here */}
                <div className="relative shadow-md mt-2 bg-white p-4">
                    <div>
                        <div className="row lg:flex block">
                            <div className="w-3/12	">
                                <h2 className="font-bold">Orders reports</h2>
                                <p className="text-xs">2206 Items on 22-04-2024 </p>
                            </div>
                            <div className="w-9/12	flex gap-2 justify-end">
                                <div className="relative z-20 inline-block bg-blue-100 mb-2">
                                    <div className="relative inline-block text-left">
                                        <div className="group">
                                            <button type="button" className="mt-1 inline-flex justify-center items-center w-full px-4 py-1 text-sm font-medium text-black  focus:outline-none focus:bg-gray-700">
                                                Status
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">In Stock</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Out of Stock</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-orange-700 hover:bg-gray-100">Low of Stock</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-20 inline-block bg-blue-100 mb-2">
                                    <DatePickerOne />
                                </div>

                                <div className="relative z-20 inline-block bg-blue-100 mb-2">
                                    <div className="relative inline-block text-left">
                                        <div className="group">
                                            <button type="button" className="mt-1 inline-flex justify-center items-center w-full px-4 py-1 text-sm font-medium text-black  focus:outline-none focus:bg-gray-700"> Price
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-[-73px] w-40 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                <div className="py-1">
                                                    <Pricerange />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Link href="AddNewProduct">
                                        <button className="bg-orange-100 text-orange-600 font-normal py-2 px-4 text-sm rounded">
                                            Add New
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#edf3ff]  dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3"> ITEM</th>
                                <th scope="col" className="px-6 py-3"> PRODUCT ID </th>
                                <th scope="col" className="px-6 py-3"> COSTOMER </th>
                                <th scope="col" className="px-6 py-3">  DATE </th>
                                <th scope="col" className="px-6 py-3">  QTY </th>
                                <th scope="col" className="px-6 py-3">  PRICE </th>
                                <th scope="col" className="px-6 py-3"> RATING</th>
                                <th scope="col" className="px-6 py-3">  STATUS </th>
                                <th scope="col" className="px-6 py-3">  ACTION </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image src="/images/image 1.png" alt="Wishwamart" width={54} height={54} />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Printed t-shirt</div>
                                        <div className="font-normal text-gray-500">Seller ID : #Sl354646</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">  #ADF15315 </td>
                                <td className="px-6 py-4">  #ADF15315 </td>
                                <td className="px-6 py-4"> 12-04-2024 </td>
                                <td className="px-6 py-4">   86X  </td>
                                <td className="px-6 py-4"> ₹1900  </td>
                                <td className="px-6 py-4">
                                    <div className="rating text-sm leading-[21px] flex justify-center py-1  items-center">
                                        <div className="flex mr-2">
                                            <Star size={16} fill="#ffa500" strokeWidth={0} />
                                            <Star size={16} fill="#ffa500" strokeWidth={0} />
                                            <Star size={16} fill="#ffa500" strokeWidth={0} />
                                            <Star size={16} fill="#999999" strokeWidth={0} />
                                            <Star size={16} fill="#999999" strokeWidth={0} />
                                        </div>
                                    </div>
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-red text-red">Inactive</p></td>
                                <td>
                                    <div className="relative inline-block text-left">
                                        <div className="group">
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-1 text-sm font-medium text-black  focus:outline-none focus:bg-gray-700">
                                                Action
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image src="/images/image 1.png" alt="Wishwamart" width={54} height={54} />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Printed t-shirt</div>
                                        <div className="font-normal text-gray-500">Seller ID : #Sl354646</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    #ADF15315
                                </td>
                                <td className="px-6 py-4">
                                    #ADF15315
                                </td>
                                <td className="px-6 py-4">
                                    12-04-2024
                                </td>
                                <td className="px-6 py-4">
                                    86X
                                </td>
                                <td className="px-6 py-4">
                                    ₹1900
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex mr-2">
                                        <Star size={16} fill="#ffa500" strokeWidth={0} />
                                        <Star size={16} fill="#ffa500" strokeWidth={0} />
                                        <Star size={16} fill="#ffa500" strokeWidth={0} />
                                        <Star size={16} fill="#999999" strokeWidth={0} />
                                        <Star size={16} fill="#999999" strokeWidth={0} />
                                    </div>
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-success text-s">Active</p></td>
                                <td>
                                    <div className="relative inline-block text-left">
                                        <div className="group">
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black  focus:outline-none focus:bg-gray-700">
                                                Action
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-0 w-40 origin-top-left z-99 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Edit</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination />
                </div>
                {/* Table satrt here */}
            </DefaultLayout>
        </>
    );
};

export default AllProduct;

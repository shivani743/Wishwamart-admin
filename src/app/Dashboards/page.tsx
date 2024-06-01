"use client";
import React, { useState } from 'react';
import { EllipsisVertical, ShoppingBag, Activity, PackageCheck, Undo2, CopyX } from 'lucide-react';
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ChartOne from "@/components/Home/Charts/ChartOne";
import ChartTwo from "@/components/Home/Charts/ChartTwo";
import ChartThree from "@/components/Home/Charts/ChartThree";
import DatePickerOne from "@/components/Home/DatePicker/DatePickerOne";
import { Pricerange } from "@/components/Home/Pricerange/Pricerange";
import { Pagination } from "@/components/Home/Pagination/pagination";
import DateRangeSelector from '@/components/DateRangeSelector';
import RangeSlider from '@/components/RangeSlider';


const Dashboards: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const handleRangeChange = (minValue: number, maxValue: number) => {
        console.log(`Selected range: ${minValue} - ${maxValue}`);
    };

    return (
        <>
            <DefaultLayout>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-2.5">
                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left justify-between">
                            <h6 className="text-sm font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Total Oders
                            </h6>
                            <div>
                                <EllipsisVertical strokeWidth={1} />
                            </div>
                        </div>
                        <div className="flex items-left justify-between">
                            <div className="h-full theme-bg-blue p-1.5 rounded-md">
                                <span>
                                    <ShoppingBag color="#ffffff" strokeWidth={1.1} />
                                </span>
                            </div>
                            <span className="text-md font-semibold w-full float-left ml-2 pt-1">₹126.500</span>
                            <div className="justify-between pl-2 pt-1">
                                <span className="inline-block px-2 text-xs text-green-500 bg-green-100 rounded-md">
                                    34.7%
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-right">Compared to Oct 2023</p>
                    </div>

                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left justify-between">
                            <h6 className="text-sm font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Active Orders
                            </h6>
                            <div>
                                <EllipsisVertical strokeWidth={1} />
                            </div>
                        </div>
                        <div className="flex items-left justify-between">
                            <div className="h-full theme-bg-blue p-1.5 rounded-md">
                                <span>
                                    <Activity color="#ffffff" strokeWidth={1.1} />
                                </span>
                            </div>
                            <span className="text-md font-semibold w-full float-left ml-2 pt-1">₹126.500</span>
                            <div className="justify-between pl-2 pt-1">
                                <span className="inline-block px-2 text-xs text-green-500 bg-green-100 rounded-md">
                                    34.7%
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-right">Compared to Oct 2023</p>
                    </div>

                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left justify-between">
                            <h6 className="text-sm font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Completed Orders
                            </h6>
                            <div>
                                <EllipsisVertical strokeWidth={1} />
                            </div>
                        </div>
                        <div className="flex items-left justify-between">
                            <div className="h-full theme-bg-blue p-1.5 rounded-md">
                                <span>
                                    <PackageCheck color="#ffffff" strokeWidth={1.1} />
                                </span>
                            </div>
                            <span className="text-md font-semibold w-full float-left ml-2 pt-1">₹126.500</span>
                            <div className="justify-between pl-2 pt-1">
                                <span className="inline-block px-2 text-xs text-green-500 bg-green-100 rounded-md">
                                    34.7%
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-right">Compared to Oct 2023</p>
                    </div>

                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left justify-between">
                            <h6 className="text-sm font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Return Orders
                            </h6>
                            <div>
                                <EllipsisVertical strokeWidth={1} />
                            </div>
                        </div>
                        <div className="flex items-left justify-between">
                            <div className="h-full theme-bg-blue p-1.5 rounded-md">
                                <span>
                                    <Undo2 color="#ffffff" strokeWidth={1.1} />
                                </span>
                            </div>
                            <span className="text-md font-semibold w-full float-left ml-2 pt-1">₹126.500</span>
                            <div className="justify-between pl-2 pt-1">
                                <span className="inline-block px-2 text-xs text-green-500 bg-green-100 rounded-md">
                                    34.7%
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-right">Compared to Oct 2023</p>
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-12 gap-2 md:gap-6 2xl:gap-2.5 shadow-xl">
                    <ChartOne />
                    <ChartTwo />
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-2.5 mt-2">
                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left ">
                            <h6 className="text-lg font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Total Supplier
                            </h6>
                            <span className="inline-block px-2 text-xs ml-2 text-green-500 bg-green-100 rounded-md">
                                34.7%
                            </span>
                        </div>
                        <p className="text-sm text-left pt-2 text-gray-200">Compared to Oct 2023</p>
                        <div className="text-center">
                            <span className="text-4xl font-semibold w-full float-left ml-2 pt-1">80</span>
                        </div>

                    </div>
                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl">
                        <div className="flex items-left ">
                            <h6 className="text-lg font-medium leading-none text-gray-500 uppercase dark:text-primary-light">
                                Total Customer
                            </h6>
                            <span className="inline-block px-2 text-xs ml-2 text-green-500 bg-green-100 rounded-md">
                                26.7%
                            </span>
                        </div>
                        <p className="text-sm text-left pt-2 text-gray-200">Compared to Oct 2023</p>
                        <div className="text-center">
                            <span className="text-4xl font-semibold w-full float-left ml-2 pt-1">120</span>
                        </div>

                    </div>
                    <div className="px-5 bg-white rounded-md dark:bg-darker py-6 shadow-xl justify-center content-center flex">
                        <div>
                            <span className="text-xl font-semibold align-item ml-2 pt-1">Live News About Transitions</span>
                        </div>
                    </div>
                </div>

                <div className="mt-2 grid grid-cols-12 gap-2 md:gap-6 2xl:gap-2.5 shadow-xl">
                    <ChartOne />
                    <ChartThree />
                </div>

                {/* Table satrt here */}
                <div className="relative shadow-md mt-2 bg-white p-4">
                    <div>
                        <div className="row lg:flex block">
                            <div className="w-3/12">
                                <h2 className="font-bold">Stock Report</h2>
                                <p className="text-xs">2306 Items on cataloged </p>
                            </div>

                            <div className="w-9/12 flex gap-2 justify-end">
                                <div className="relative z-20 inline-block bg-blue-100 mb-2">
                                    <div className="relative inline-block text-left">
                                        <div className="group">
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-3 text-sm font-medium text-black">
                                                Status
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-0 w-40 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
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
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-3 text-sm font-medium text-black">
                                                Price
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
                            </div>
                        </div>
                    </div>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#edf3ff]  dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ITEM
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRODUCT ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    QTY
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRICE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DATE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="/images/image 1.png"
                                        alt="Wishwamart"
                                        width={54}
                                        height={54}
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Printed t-shirt</div>
                                        <div className="font-normal text-gray-500">Seller ID : #Sl354646</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    #ADF15315
                                </td>
                                <td className="px-6 py-4">
                                    86X
                                </td>
                                <td className="px-6 py-4">
                                    1900
                                </td>
                                <td className="px-6 py-4">
                                    12-04-2024
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-red text-red">Out of Stock</p></td>

                            </tr>

                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="/images/image 1.png"
                                        alt="Wishwamart"
                                        width={54}
                                        height={54}
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">Printed t-shirt</div>
                                        <div className="font-normal text-gray-500">Seller ID : #Sl354646</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    #ADF15315
                                </td>
                                <td className="px-6 py-4">
                                    86X
                                </td>
                                <td className="px-6 py-4">
                                    1900
                                </td>
                                <td className="px-6 py-4">
                                    12-04-2024
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-success text-success">In Stock</p></td>

                            </tr>

                        </tbody>
                    </table>
                    <Pagination />

                </div>
                {/* Table satrt here */}


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
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-3 text-sm font-medium text-black">
                                                Status
                                                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                                </svg>
                                            </button>
                                            <div
                                                className="absolute left-0 w-40 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                                <div className="py-1">
                                                    <a href="#" className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100">Shipped</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-rose-800 hover:bg-gray-100">Reject</a>
                                                    <a href="#" className="block px-4 py-2 text-sm text-orange-700 hover:bg-gray-100">Pending</a>
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
                                            <button type="button"
                                                className="inline-flex justify-center items-center w-full px-4 py-3 text-sm font-medium text-black">
                                                Price
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

                                <div className="relative z-20 inline-block mt-2 mb-2">
                                    <EllipsisVertical strokeWidth={1} onClick={() => setShowModal(true)} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-[#edf3ff]  dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ITEM
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRODUCT ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    COSTOMER
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DATE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    QTY
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRICE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PROFIT
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="/images/image 1.png"
                                        alt="Wishwamart"
                                        width={54}
                                        height={54}
                                    />
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
                                    ₹200
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-red text-red">Reject</p></td>
                            </tr>

                            <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="/images/image 1.png"
                                        alt="Wishwamart"
                                        width={54}
                                        height={54}
                                    />
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
                                    ₹200
                                </td>
                                <td><p className="inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium bg-success text-s">Shipped</p></td>
                            </tr>

                        </tbody>
                    </table>
                    <Pagination />

                </div>
                {/* Table satrt here */}

                {/* Start Add Address  */}
                {showModal ? (
                    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#0000008a]">
                        <div className="flex justify-center text-gray-900 px-4">
                            <div className="flex justify-center flex-1 w-full z-99999 bg-white shadow row sm:rounded-lg ">
                                <div className="p-4 sm:w-full xl:w-[600px]	 lg:max-h-full h-[500px!important] overflow-auto">
                                    <div className="flex items-center justify-between p-2  border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-bold text-black font-Exo">Advance Filter</h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => setShowModal(false)}>
                                            <CopyX size={28} strokeWidth={1} />
                                        </button>
                                    </div>
                                    <p className="pb-2 mt-2 font-semibold font-Exo"> Select Date</p>
                                    <DateRangeSelector />
                                    <div className="border-t-2 border-gray-200"></div>
                                    <p className="pb-2 mt-2 font-semibold font-Exo">Select Range</p>
                                    <RangeSlider min={0} max={100} onChange={handleRangeChange} />

                                    <div className="border-t-2 border-gray-200 mt-4"></div>
                                    <p className="pb-2 mt-2 font-semibold font-Exo">Stock select</p>
                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-pink-200 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-600/10">Inactive</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span>

                                    <div className="border-t-2 border-gray-200 mt-4"></div>
                                    <p className="pb-2 mt-2 font-semibold font-Exo">Rating select</p>
                                    <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">01</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20">02</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20">03</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20">04</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-600/20">05</span>

                                    <div className="border-t-2 border-gray-200 mt-4"></div>
                                    <p className="pb-2 mt-2 font-semibold font-Exo">Shipping select</p>
                                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Shipped</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-pink-200 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-600/10">Reject</span>
                                    <span className="inline-flex ml-2 items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                                
                                    <div className="border-t-2 border-gray-200 mt-4"></div>
                                    <button className="theme-bg-blue text-white font-normal py-2 px-4 text-sm mt-2 rounded">
                                           Submit
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                {/* End of Address */}

            </DefaultLayout>


        </>
    );
};

export default Dashboards;

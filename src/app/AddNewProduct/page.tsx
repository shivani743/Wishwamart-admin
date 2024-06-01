"use client";
import React, { useState } from 'react';
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { CirclePlus  } from 'lucide-react';
import TextEditor from '@/components/Product/TextEditor';
import ButtonManager from '@/components/Product/ButtonManager';

const AddNewProduct: React.FC = () => {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Product" />
                <div className="row lg:flex block gap-2">
                    <div className="lg:w-1/4 w-full ">
                        <div className="bg-white shadow-xl p-6">
                            <h2 className="font-Exo mb-2 text-xl">Thumbnail</h2>
                            <div className="mt-2 relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                <div className="text-center">
                                    <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                        <span>Drag and drop</span>
                                        <span className="text-indigo-600"> or browse</span>
                                        <span>to upload</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted
                                    </p>
                                </div>
                                <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
                            </div>
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Status</h2>
                            <select id="countries" className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Status</option>
                                <option value="">Published</option>
                                <option value="">Reject</option>

                            </select>
                            <small>Set the product status.</small>
                        </div>
                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Categories</h2>
                            <select id="countries" className="bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>cosmetics</option>
                                <option value="">Agriculture</option>
                                <option value="">Health</option>

                            </select>
                            <small>Add product to a category.</small>
                            <button className="mt-4 flex bg-orange-500 hover:bg-orange-700 text-white font-normal font-Exo py-2 px-4 rounded">
                                <CirclePlus strokeWidth={1.75} className='mr-2' /> Add New Category
                            </button>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Tag</label>
                                <small>Click button Add tags to a product.</small>
                                <ButtonManager />

                            </div>
                        </div>

                        <div className="bg-white shadow-xl p-6 mt-2">
                            <h2 className="font-Exo mb-2 text-xl">Product variants</h2>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Product colours</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                <small>Add variants to a product.</small>
                            </div>
                        </div>


                    </div>
                    <div className="lg:w-3/4 w-full">
                        <div className="bg-white shadow-xl p-6">

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Product title*</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product title*" required />
                                <small>A product name is required and recommended to be unique.</small>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Description*</label>
                                <TextEditor />
                                <small>Set a description to the product for better visibility.</small>
                            </div>
                            <div>
                                <h1 className='font-bold mt-6 mb-2'>Photos and videos</h1>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Media*</label>
                                <div className="mt-2 relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                                    <div className="text-center">
                                        <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" />
                                        <h3 className="mt-2 text-sm font-medium text-gray-900">
                                            <span>Drag and drop</span>
                                            <span className="text-indigo-600"> or browse</span>
                                            <span>to upload</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </h3>
                                        <p className="mt-1 text-xs text-gray-500">
                                            Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted
                                        </p>
                                    </div>
                                    <img src="" className="mt-4 mx-auto max-h-40 hidden" id="preview" />
                                </div>
                                <small>Set the product media gallery.</small>
                            </div>
                            <div>
                                <h1 className='font-bold mt-6 mb-2'>Pricing</h1>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Base price *</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product price " required />
                                <small>Set the product price.</small>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Discount Type *</label>
                                <div className='flex gap-2'>
                                    <div className="flex  w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> No Discount</label>
                                    </div>
                                    <div className="flex  w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Percentage %</label>
                                    </div>
                                    <div className="flex  w-full items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fixed price</label>
                                    </div>
                                </div>

                            </div>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-2.5">

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">TAX Class *</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tax free goods" required />
                                    <small>Set the product tax class.</small>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">VAT Amount (%) *</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tax free goods" required />
                                    <small>Set the product VAT about.</small>
                                </div>
                            </div>
                            <br></br>
                            <hr></hr>
                            <div className="flex">

                                <button className="mt-4 flex bg-red hover:bg-red text-white font-normal font-Exo py-2 px-4 rounded">
                                    Cancel
                                </button>
                                <Link href="EditProduct">
                                <button className="mt-4 flex bg-lime-600 hover:bg-lime-600 text-white font-normal font-Exo py-2 px-4 ml-2 rounded">
                                    Edit & Preview
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

export default AddNewProduct;

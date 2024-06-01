import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="rounded-sm w-10/12 border border-stroke bg-[#FFE8D4] shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="flex flex-wrap items-center">
                    <div className="hidden w-full xl:block xl:w-1/2">
                        <div className="text-center">
                            <Image
                                className="mx-auto"
                                width={500}
                                height={500}
                                src={"/images/login.svg"}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                        <div className="w-full p-6  xl:p-18 bg-white">
                            <Image
                                className="mx-auto mb-6"
                                width={200}
                                height={200}
                                src={"/images/logo/logo.png"}
                                alt="Logo"
                            />
                            <h2 className="text-xl font-bold text-black dark:text-white">
                                Getting Started
                            </h2>
                            <p className="mb-4">Let’s login for explore continues</p>
                            <form>
                                <div className="mb-4">

                                    <div className="relative">
                                        <input type="email" placeholder="Username" className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" />
                                        <span className="absolute right-4 top-4">
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.5">
                                                    <path d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                                                        fill=""
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6">

                                    <div className="relative">
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                            className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                        <span className="absolute right-4 top-4">
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.5">
                                                    <path
                                                        d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                                                        fill=""
                                                    />
                                                    <path
                                                        d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                                                        fill=""
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                                        </div>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="mb-5">
                                    <Link href="/Dashboards">
                                        <input
                                            type="submit"
                                            value="Sign In"
                                            className="w-full cursor-pointer rounded-lg border theme-bg-blue p-3 text-white transition hover:bg-opacity-90"
                                        />
                                    </Link>
                                </div>

                                <div className="my-4 mb-2 text-center border-b">
                                    <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 translate-y-1/2 bg-white transhtmlForm">
                                        Or SignIn With
                                    </div>
                                </div>
                                <div
                                    id="third-party-auth"
                                    className="flex items-center justify-center mt-5 flex-wrap"
                                >
                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px]"
                                            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                            alt="Google"
                                        />
                                    </button>
                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px]"
                                            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                                            alt="Linkedin"
                                        />
                                    </button>
                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px] filter dark:invert"
                                            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                                            alt="Github"
                                        />
                                    </button>
                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px]"
                                            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                                            alt="Facebook"
                                        />
                                    </button>
                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px] dark:gray-100"
                                            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                                            alt="twitter"
                                        />
                                    </button>

                                    <button

                                        className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                                    >
                                        <img
                                            className="max-w-[25px]"
                                            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                                            alt="apple"
                                        />
                                    </button>
                                </div>


                                <div className="max-w-xs mx-auto mt-2">
                                    <p className="py-3 text-sm text-center text-blue-800">Create a New Account ?</p>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

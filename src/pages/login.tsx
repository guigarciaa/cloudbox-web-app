import React from "react";
import { MdFingerprint } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { ImFacebook } from "react-icons/im";
import './login-styles.css';

export default function Login() {
  return (
    <section className="login flex flex-wrap h-screen">
      {/* Welcome */}
      <div className="flex flex-col space-y-5 justify-end items-center  w-full min-w-max lg:justify-center  lg:h-screen lg:text-white lg:bg-blue-400 lg:w-4/6">
        <h1 className="flex flex-col font-light w-48 md:w-1/3">
          Welcome to <span className="text-3xl font-bold">Cloudbox</span>
        </h1>
        <h3 className="flex flex-col w-48 md:w-1/3 leading-6 font-medium text-slate-500 lg:text-white">
          Best cloud storage platform for all business and individuals to manage
          there data Join <span className="mt-3">For Free.</span>
        </h3>
      </div>

      {/* Sign */}
      <div className="flex flex-col w-full min-w-max lg:w-1/3 lg:content-center lg:justify-center">
        <div className="flex justify-center my-10 min-w-max">
          <button className="btn font-thin rounded-md py-3 mx-2 w-36 bg-blue-50 text-blue-500 space-x-2 cursor-pointer">
            <MdFingerprint className="inline-block text-3xl" />
            <span className="inline-block align-middle">Smart Id</span>
          </button>
          <button className="btn font-thin rounded-md py-2 mx-2 w-36 bg-blue-500 text-white space-x-2 cursor-pointer">
            <span>Sign in</span>
            <BsArrowRight className="inline-block text-3xl" />
          </button>
        </div>

        {/* Sign Social */}
        <div className="flex flex-col justify-center">
          <h4 className="text-center">Use Social Login</h4>
          <ul className="flex justify-center space-x-10 my-5">
            <li className="text-3xl cursor-pointer">
              <IoLogoInstagram />
            </li>
            <li className="text-3xl cursor-pointer">
              <IoLogoTwitter />
            </li>
            <li className="text-2xl cursor-pointer">
              <ImFacebook />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

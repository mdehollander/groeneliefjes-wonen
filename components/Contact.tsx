import React, { useEffect } from "react";

import mailgo from "mailgo";
const mailgoConfig = {
  dark: false,
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Contact() {
    // MailGo
    useEffect(() => {
        mailgo(mailgoConfig);
    }, []);
  return (
    <>
        <div id="contact" className="flex justify-center items-center m-auto  w-full .bg-white">
            <div
                className="flex flex-col lg:flex-row lg:w-7/12 xl:w-7/12 xl:flex-row justify-center items-center w-11/12 h-32 rounded-md bg-green-500">
                <div className="flex flex-col p-2 lg:p-4 xl:p-4">
                    <h3 className="text-2xl font-extrabold text-white">Wil je iets met ons delen of in contact komen?</h3>
                </div>
                <div className="flex p-2 lg:p-4 xl:p-4">
                <a href="" className="mailgo" data-address="mattiasenwilma" data-domain="groeneliefjes.nl">
                        <button className="flex px-6 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:shadow-outline focus:border-indigo-300" type="submit">
                        <svg className="self-center h-4 fill-current" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 24 24"  data-type="glyph" data-name="email-83">
                            <FontAwesomeIcon  icon={faEnvelope}></FontAwesomeIcon>
                        </svg>
                        <span className="self-center float-left ml-3 text-base font-medium">Mail ons</span>
                    </button>
                </a>

                </div>
            </div>
        </div>
    </>
  )
}

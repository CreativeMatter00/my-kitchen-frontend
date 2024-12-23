import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ContactUsForm from "./ContactUsForm";
import FAQ from "./faq/FAQ";

const ContactUsComponent: React.FC = () => {
  return (
    <div className=" bg-backgroundColor">
      <div className="container mx-auto py-36 max-lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-lg:gap-2 lg:divide-x lg:divide-grayDarkPrimary">
          <div className="col-span-2 ">
            <div className="w-full lg:basis-3/4 h-96 lg:h-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12280.950998026896!2d90.40216784222126!3d23.777723006367722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79b9bb31065%3A0x11da1fffa0040020!2sMY%20KITCHEN!5e0!3m2!1sen!2sbd!4v1720418340033!5m2!1sen!2sbd&zoom=14&disableDefaultUI=false&scrollwheel=false"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
            {/* <div className="bg-red-00">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12280.950998026896!2d90.40216784222126!3d23.777723006367722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79b9bb31065%3A0x11da1fffa0040020!2sMY%20KITCHEN!5e0!3m2!1sen!2sbd!4v1720418340033!5m2!1sen!2sbd&zoom=14&disableDefaultUI=false&scrollwheel=false"
                width="852"
                height="498"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>

          <div className="bg-blue-00   gap-8 py-4  lg:pl-10">
            <div className="flex flex-col max-lg:justify-center max-lg:items-center gap-8  max-lg:mt-1">
              <div className="flex flex-col gap-1 max-lg:justify-center max-lg:items-center">
                <p className="text-3xl font-normal text-text ">Address</p>
                <p className="text-lg   font-normal text-textSecondary max-lg:text-center">
                  House 8, Road 138, Gulshan 1, Dhaka, Bangladesh, 1212
                </p>
              </div>

              <div className="flex flex-col gap-1 max-lg:justify-center max-lg:items-center">
                <p className="text-3xl font-normal text-text">Mobile</p>
                <p className="text-lg font-normal text-textSecondary ">
                  01642-912612
                </p>
              </div>

              <div className="flex flex-col  gap-1 max-lg:justify-center max-lg:items-center">
                <p className="text-3xl font-normal text-text ">Email</p>
                <p className="text-lg font-normal text-textSecondary">
                  info@mykitchen-bd.com
                </p>
              </div>
            </div>

            <div className="flex flex-col  lg:text-start gap-2 mt-8">
              <p className="text-textSecondary text-base font-bold max-lg:text-center">
                Connect With Us
              </p>

              <div className="flex flex-row justify-center lg:justify-start gap-3">
                {" "}
                <div className="flex justify-center items-center px-2 py-2 bg-textSecondary hover:bg-brandColor duration-300 rounded-xl cursor-pointer">
                  <FaFacebookF fontSize={32} color="#ffffff" className="" />
                </div>
                <div className="flex justify-center items-center px-2 py-2 bg-textSecondary hover:bg-brandColor w-fit duration-300 rounded-xl cursor-pointer">
                  <FaInstagram fontSize={32} color="#ffffff" className="" />
                </div>
                <div className="flex justify-center items-center px-2 py-2 bg-textSecondary hover:bg-brandColor w-fit duration-300 rounded-xl cursor-pointer">
                  <FaLinkedinIn fontSize={32} color="#ffffff" className="" />
                </div>
                <div className="flex justify-center items-center px-2 py-2 bg-textSecondary hover:bg-brandColor w-fit duration-300 rounded-xl cursor-pointer">
                  <FaXTwitter fontSize={32} color="#ffffff" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-3xl text-text text-center lg:text-start">
            Customer Support
          </p>
          <p className="text-sm text-textOptional text-center lg:text-start mt-2">
            All fields are mandatory to fill
          </p>
          <div>
            <ContactUsForm/>
          </div>
        </div>

        <div className="mt-20">
          {/* <FAQ/> */}
          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;



import { LuTriangleRight } from "react-icons/lu";
import { IoIosColorPalette } from "react-icons/io";
import { LuPackage } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import Link from "next/link";

const servicesData = [
  { icon: LuTriangleRight, text: "Measurement", href: "/about/service/measure" },
  { icon: IoIosColorPalette, text: "Design", href: "/about/service/design" },
  { icon: LuPackage, text: "Packaging", href: "/about/service/packaging" },
  { icon: FaTruck, text: "Shipment", href: "/about/service/shipment" },
  { icon: FaGear, text: "Installation", href: "/about/service/installation" },
  { icon: RiCustomerService2Line, text: "Customer Services", href: "/about/service/customer-services" },
];

const Services = () => {
  return (
    <div>
      <div className="text-text text-2xl md:text-3xl font-normal underline decoration-brandColor underline-offset-8 py-5 md:py-10">
        Services
      </div>

      <div className="text-textSecondary font-normal text-sm md:text-base">
        From the beginning, Tilottoma Bangla Group has ensured the service. In
        that continuation, MY KITCHEN is highly committed to ensuring service.
        The following services are provided to you.
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-16 mt-10">
        {servicesData.map((service, index) => (
          <Link key={index} href={service.href}>
            <div
              className="h-52 w-40 xl:h-72 xl:w-48 bg-whitePrimary lg:bg-grayLightSecondary 
                flex flex-col justify-center items-center text-center lg:hover:pb-10 
                lg:hover:bg-whitePrimary group transition-all duration-300 cursor-pointer"
            >
              <service.icon
                size={30}
                className="lg:text-grayDarkPrimary text-brandColor transition-all duration-300 lg:group-hover:text-brandColor"
              />
              <p
                className="p-2 text-base md:text-lg lg:text-xl lg:text-grayDarkPrimary 
                text-brandColor transition-all duration-300 lg:group-hover:text-brandColor"
              >
                {service.text}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:py-12 py-6" />
    </div>
  );
};

export default Services;





import Image from "next/image";
import { FaCircle } from "react-icons/fa6";

const chattogramLocation = {
  name: "Chattogram",
  address:
    "Yahya Tower (2nd Floor), 335 CDA Avenue, M.M.Ali Road, Lalkhan Bazar, Chattogram.",
  mobile: "01642-912612",
  email: "info@mykitchen-bd.com",
};

const images = ["/images/sales-point/img5.png"];

const OutSideDhaka = () => {
  return (
    <>
      <div className="container mx-auto text-4xl mt-8 ">Chattogram</div>

      <hr className="mt-6 w-full" />
      <div className="container mx-auto mb-4">
        <div className="flex justify-center lg:justify-between px-4">
          <div className="space-y-6 border-l-2 border-dashed border-brandColor">
            <div>
              <div>
                <FaCircle className="text-brandColor ml-[-9px] border border-brandColor p-[1px] rounded-full mt-8" />
              </div>
              <div className="flex flex-col gap-10 mt-[-24px]">
                <div className="px-6 flex flex-col gap-28">
                  <div>
                    <p className="text-3xl font-normal text-text">
                      {chattogramLocation.name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-1">
                    <div className="text-lg font-normal">
                      {chattogramLocation.address}
                    </div>
                    <div className="text-lg font-normal">
                      <span className="text-textOptional">Mobile:</span>{" "}
                      {chattogramLocation.mobile}
                    </div>
                    <div>
                      <span className="text-textOptional">Email:</span>{" "}
                      {chattogramLocation.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 bg-grayLightSecondary hidden lg:block">
            {images.map((img: string, index: number) => {
              return (
                <div key={index} className="">
                  <Image
                    key={index}
                    src={img}
                    alt={"Image"}
                    width={500}
                    height={300}
                    className="w-[565px] h-[322px]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OutSideDhaka;

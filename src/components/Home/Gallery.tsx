import Image from "next/image";
import RedButtonComp from "../shared/button/RedButtonComp";
import Link from "next/link";

const Gallery = () => {
	const galleryImg1 = "/images/kitchen/galleryImg1.png";
	const galleryImg2 = "/images/kitchen/galleryImg2.png";
	const galleryImg3 = "/images/kitchen/galleryImg3.png";
	const galleryImg4 = "/images/kitchen/galleryImg4.png";
	const galleryImg5 = "/images/kitchen/galleryImg5.png";
	const galleryImg6 = "/images/kitchen/galleryImg6.png";
	const galleryImg7 = "/images/kitchen/galleryImg7.png";
	const galleryImg8 = "/images/kitchen/galleryImg8.png";
	const galleryImg9 = "/images/kitchen/galleryImg9.png";

	return (
		<div className="w-full ">
			<div className="container mx-auto px-4">
				<div className="flex justify-center md:justify-start items-center text-3xl md:text-5xl font-normal text-text mb-10">
					Inspiration&nbsp;
					<span className="text-brandColor text-5xl font-normal">G</span>allery
				</div>

				<div className=" text-whitePrimary flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="basis-1/2  flex flex-col justify-between">
							<div className="flex flex-col gap-2 w-9/12">
								<div className="text-textSecondary text-base font-normal">
									Discover the future of kitchen design with our
									state-of-the-art VR feature. {"'My Kitchen Studio'"} lets you
									immerse yourself in a virtual environment where you can
									explore our customized modular kitchen solutions in stunning
									detail.
								</div>
								<Link href={"gallery"}>
									<button className="flex justify-center md:justify-start items-center mt-8 md:mt-7">
										<RedButtonComp name="View Our Gallery" />
									</button>
								</Link>
							</div>
							<div className="flex gap-4">
								<div className="basic-1/2 content-end">
									<Image
										src={galleryImg7}
										width={372}
										height={392}
										alt="gallery 7"
										className="w-full h-[392px] transition-transform duration-300 transform-gpu hover:scale-95"
									/>
								</div>
								<div className="flex flex-col gap-4 ">
									<div>
										<Image
											src={galleryImg5}
											width={372}
											height={261}
											alt="gallery 5"
											className="w-full h-[261px] transition-transform duration-300 transform-gpu hover:scale-95"
										/>
									</div>
									<div>
										<Image
											src={galleryImg6}
											width={372}
											height={261}
											alt="gallery 6"
											className="w-full h-[261px] transition-transform duration-300 transform-gpu hover:scale-95"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="basis-1/2 flex flex-col gap-4">
							<div className="basis-1/2 flex gap-4">
								<div className="basis-1/2">
									<Image
										src={galleryImg1}
										width={372}
										height={538}
										alt="gallery 1"
										className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
									/>
								</div>
								<div className="basis-1/2 flex flex-col gap-4">
									<Image
										src={galleryImg2}
										width={372}
										height={261}
										alt="gallery 2"
										className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
									/>

									<Image
										src={galleryImg3}
										width={372}
										height={261}
										alt="gallery 3"
										className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
									/>
								</div>
							</div>
							<div>
								<Image
									src={galleryImg4}
									width={760}
									height={332}
									alt="gallery 4"
									className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-4">
						<div>
							<Image
								src={galleryImg8}
								width={501}
								height={332}
								alt="gallery 8"
								className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
							/>
						</div>
						<div>
							<Image
								src={galleryImg9}
								width={1019}
								height={332}
								alt="gallery 9"
								className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-95"
							/>
						</div>
					</div>
				</div>

				{/* <div className="w-full grid grid-rows-2 md:grid-rows-4 gap-2">
          
          <div className="row-span-1 md:row-span-3 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="col-span-1 grid grid-rows-2 md:grid-rows-4 gap-2">
             
              <div className="row-span-1 md:row-span-1">
                <p className="flex justify-center md:justify-start items-center  text-backgroundColor font-base font-normal leading-6 opacity-65 max-w-[630px]">
                  Discover the future of kitchen design with our
                  state-of-the-art VR feature. {"'My Kitchen Studio'"} lets you
                  immerse yourself in a virtual environment where you can
                  explore our customized modular kitchen solutions in stunning
                  detail.
                </p>
                <div className="flex justify-center md:justify-start items-center mt-8 md:mt-7">
                  <RedButtonComp name="View Our Gallery" />
                </div>
              </div>
              
              <div className="row-span-1 md:row-span-3 grid grid-cols-2 gap-2 ">
                <div className="col-span-1 grid grid-rows-1 md:grid-rows-5 gap-2">
                  <div className="hidden md:block row-span-2"></div>
                  <div className="row-span-1 md:row-span-3 group">
                    <Image
                      src={galleryImg7}
                      width={372}
                      height={392}
                      alt="gallery 7"
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                    />
                  </div>
                </div>
                <div className="col-span-1 grid grid-rows-2 md:grid-rows-5 gap-2">
                  <div className="row-span-1"></div>
                  <div className="row-span-1 md:row-span-2 group">
                    <Image
                      src={galleryImg5}
                      width={372}
                      height={261}
                      alt="gallery 5"
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                    />
                  </div>

                  <Image
                    src={galleryImg6}
                    width={372}
                    height={261}
                    alt="gallery 6"
                    className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-rows-2 md:grid-rows-3 gap-2">
              <div className="row-span-1 md:row-span-2 grid grid-cols-2 gap-2">
                <div className="col-span-1 group">
                  <Image
                    src={galleryImg1}
                    width={372}
                    height={538}
                    alt="gallery 1"
                    className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                  />
                </div>
                <div className="col-span-1 grid grid-rows-2 gap-2">
                  <div className="row-span-1 group">
                    <Image
                      src={galleryImg2}
                      width={372}
                      height={261}
                      alt="gallery 2"
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                    />
                  </div>
                  <div className="row-span-1 group">
                    <Image
                      src={galleryImg3}
                      width={372}
                      height={261}
                      alt="gallery 3"
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                    />
                  </div>
                </div>
              </div>
              <div className="row-span-1 group">
                <Image
                  src={galleryImg4}
                  width={760}
                  height={332}
                  alt="gallery 4"
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
                />
              </div>
            </div>
          </div>
          
          <div className=" row-span-1 grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="col-span-1 mt-[-25.5rem] md:mt-1 group">
              <Image
                src={galleryImg8}
                width={501}
                height={332}
                alt="gallery 8"
                className="w-full h-full object-contain md:object-cover 
                transition-transform duration-300 transform-gpu lg:group-hover:scale-95
                "
              />
            </div>
            <div className=" col-span-1 md:col-span-2 group">
              <Image
                src={galleryImg9}
                width={1019}
                height={332}
                alt="gallery 9"
                className="mt-[-42rem] md:mt-1 w-full h-full object-contain md:object-cover
                transition-transform duration-300 transform-gpu lg:group-hover:scale-95
                "
              />
            </div>
          </div>
        </div> */}
			</div>
		</div>
	);
};

export default Gallery;

// import Image from "next/image";
// import RedButtonComp from "../shared/RedButtonComp";

// const Gallery = () => {
//   const galleryImg1 = "/images/kitchen/galleryImg1.png";
//   const galleryImg2 = "/images/kitchen/galleryImg2.png";
//   const galleryImg3 = "/images/kitchen/galleryImg3.png";
//   const galleryImg4 = "/images/kitchen/galleryImg4.png";
//   const galleryImg5 = "/images/kitchen/galleryImg5.png";
//   const galleryImg6 = "/images/kitchen/galleryImg6.png";
//   const galleryImg7 = "/images/kitchen/galleryImg7.png";
//   const galleryImg8 = "/images/kitchen/galleryImg8.png";
//   const galleryImg9 = "/images/kitchen/galleryImg9.png";

//   return (
//     <div className="w-full ">
//       <div className="container mx-auto px-4 border-4 border-red-600">
//         <h1 className="flex justify-center md:justify-start items-center text-3xl md:text-5xl font-normal text-backgroundColor mb-10">
//           Inspiration&nbsp;<span className="text-brandColor">G</span>allery
//         </h1>

//         <div className="w-full grid grid-rows-2 md:grid-rows-4 gap-2 ">
//           {/* First Section */}
//           <div className="row-span-1 md:row-span-3 grid grid-cols-1 md:grid-cols-2 gap-2">
//             <div className="col-span-1 grid grid-rows-2 md:grid-rows-4 gap-2">
//               {/* Text Section */}
//               <div className="row-span-1 md:row-span-1">
//                 <p className="flex justify-center md:justify-start items-center  text-backgroundColor font-base font-normal leading-6 opacity-65 max-w-[630px]">
//                   Discover the future of kitchen design with our
//                   state-of-the-art VR feature. {"'My Kitchen Studio'"} lets you
//                   immerse yourself in a virtual environment where you can
//                   explore our customized modular kitchen solutions in stunning
//                   detail.
//                 </p>
//                 <div className="flex justify-center md:justify-start items-center mt-8 md:mt-7">
//                   <RedButtonComp name="View Our Gallery" />
//                 </div>
//               </div>
//               {/* Image Section */}
//               <div className="row-span-1 md:row-span-3 grid grid-cols-2 gap-2 ">
//                 <div className="col-span-1 grid grid-rows-1 md:grid-rows-5 gap-2">
//                   <div className="hidden md:block row-span-2"></div>
//                   <div className="row-span-1 md:row-span-3 group">
//                     <Image
//                       src={galleryImg7}
//                       width={372}
//                       height={392}
//                       alt="gallery 7"
//                       className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-span-1 grid grid-rows-2 md:grid-rows-5 gap-2">
//                   <div className="row-span-1"></div>
//                   <div className="row-span-1 md:row-span-2 group">
//                     <Image
//                       src={galleryImg5}
//                       width={372}
//                       height={261}
//                       alt="gallery 5"
//                       className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                     />
//                   </div>
//                   <div className="row-span-1 md:row-span-2 group">
//                     <Image
//                       src={galleryImg6}
//                       width={372}
//                       height={261}
//                       alt="gallery 6"
//                       className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-1 grid grid-rows-2 md:grid-rows-3 gap-2">
//               <div className="row-span-1 md:row-span-2 grid grid-cols-2 gap-2">
//                 <div className="col-span-1 group">
//                   <Image
//                     src={galleryImg1}
//                     width={372}
//                     height={538}
//                     alt="gallery 1"
//                     className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                   />
//                 </div>
//                 <div className="col-span-1 grid grid-rows-2 gap-2">
//                   <div className="row-span-1 group">
//                     <Image
//                       src={galleryImg2}
//                       width={372}
//                       height={261}
//                       alt="gallery 2"
//                       className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                     />
//                   </div>
//                   <div className="row-span-1 group">
//                     <Image
//                       src={galleryImg3}
//                       width={372}
//                       height={261}
//                       alt="gallery 3"
//                       className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="row-span-1 group">
//                 <Image
//                   src={galleryImg4}
//                   width={760}
//                   height={332}
//                   alt="gallery 4"
//                   className="w-full h-full object-cover transition-transform duration-300 transform-gpu lg:group-hover:scale-95"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Second Section */}
//           <div className=" row-span-1 grid grid-cols-1 md:grid-cols-3 gap-2">
//             <div className="col-span-1 mt-[-25.5rem] md:mt-1 group">
//               <Image
//                 src={galleryImg8}
//                 width={501}
//                 height={332}
//                 alt="gallery 8"
//                 className="w-full h-full object-contain md:object-cover
//                 transition-transform duration-300 transform-gpu lg:group-hover:scale-95
//                 "
//               />
//             </div>
//             <div className=" col-span-1 md:col-span-2 group">
//               <Image
//                 src={galleryImg9}
//                 width={1019}
//                 height={332}
//                 alt="gallery 9"
//                 className="mt-[-42rem] md:mt-1 w-full h-full object-contain md:object-cover
//                 transition-transform duration-300 transform-gpu lg:group-hover:scale-95
//                 "
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

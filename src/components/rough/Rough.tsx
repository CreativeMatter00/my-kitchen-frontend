import Image from "next/image";
const mobile = "/images/homepage/videoPlayback/mobile.png";
const Rough = () => {
	return (
		<>
			<div className="bg-brandColorSecondary h-full pb-12">
				<div className="relative">
					<Image
						src={mobile}
						alt="Responsive"
						width={375}
						height={308}
						className="w-full h-auto"
					></Image>
					<div></div>
				</div>
			</div>
		</>
	);
};

export default Rough;

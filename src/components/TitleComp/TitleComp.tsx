// import React from "react";

import { FaRegFaceFrown } from "react-icons/fa6";

// const TitleComp = ({ title, subtitle, colorPosition }) => {
//   const highlightedTitle = title.split("").map((char, index) => {
//     if (index === colorPosition) {
//       return (
//         <span key={index} style={{ color: "#E84538" }}>
//           {char}
//         </span>
//       );
//     }
//     return <span key={index}>{char}</span>;
//   });

//   return (
//     <div className="my-20">
//       <div className="text-3xl font-light pb-2">{subtitle}</div>
//       <div className="text-5xl">{highlightedTitle}</div>
//     </div>
//   );
// };

// export default TitleComp;

import { FC } from "react";

interface TitleComponentProps {
	title: string;
	subtitle: string;
	colorPosition: number;
}

const TitleComp: FC<TitleComponentProps> = ({
	title,
	subtitle,
	colorPosition,
}) => {
	const highlightedTitle = title.split("").map((char, index) => {
		if (index === colorPosition) {
			return (
				<span key={index} style={{ color: "#E84538" }}>
					{char}
				</span>
			);
		}
		return <span key={index}>{char}</span>;
	});
	return (
		<div className=" text-left ">
			<div className="text-2xl lg:text-3xl font-normal text-text ">
				{subtitle}
			</div>
			<div className="text-4xl lg:text-5xl text-text font-normal mt-2">
				{highlightedTitle}
			</div>
		</div>
	);
};

export default TitleComp;

import ResponsiveKitchenArea from "@/components/expertise/kitchen-area/ResponsiveKitchenArea";
import KitchenArea from "@/components/expertise/kitchen-area/KitchenArea";

const page = () => {
	return (
		<div>
			<div className="block lg:hidden">
				<ResponsiveKitchenArea />
			</div>
			<div className="lg:block hidden">
				<KitchenArea />
			</div>
		</div>
	);
};

export default page;

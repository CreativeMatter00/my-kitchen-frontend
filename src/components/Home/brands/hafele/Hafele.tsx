import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import SeeWhatInside from "@/components/shared/button/SeeWhatInside";
import Image from "next/image";
import Link from "next/link";

const titleImage = "/images/hafele/titleImage.png";

const products = [
  {
    id: 1,
    src: "/images/kessebohmer/img1.jpg",
    alt: "image",
    title: "Tall Unit",
    link: "/hafele/tall-unit",
  },
  {
    id: 2,
    src: "/images/kessebohmer/img2.jpg",
    alt: "image",
    title: "Wall Unit",
    link: "/hafele/base-unit",
  },
  {
    id: 3,
    src: "/images/kessebohmer/img3.jpg",
    alt: "image",
    title: "Corner Cabinets",
    link: "/hafele/corner-cabinet",
  },
  {
    id: 4,
    src: "/images/kessebohmer/img4.jpg",
    alt: "image",
    title: "Base unit",
    link: "/hafele/wall-unit",
  },
];

const Hafele = () => {
  return (
    <div>
      <div>
        <div className="container mx-auto flex flex-col gap-4 md:gap-6 lg:gap-10 mt-10 pb-8">
          <BreadcrumbOfHome />
          <div className="flex justify-center items-center ">
            <Image
              src={titleImage}
              alt="Title Image"
              width={293}
              height={80}
              className="h-auto w-[120px] md:w-[200px] lg:w-[300px]"
            />
          </div>

          <div>
            <p className="font-normal text-base flex justify-center text-textSecondary">
            The name Kesseböhmer stands for innovative solutions and a powerful blend of design, function and quality. Kesseböhmer has a high level of vertical integration, with all production processes in-house. Kesseböhmer is a family-run business founded in 1954. Our core competence is in metal processing. We work with wire, flat band and tubing and our products are finished in our in-house electroplating and powder-coating facilities. The company operates nine production sites and distribute to whole world. The Group is a leading supplier of fittings systems and solutions for the kitchen manufacturing industry. Quality, made in Germany, from the first idea to the finished product. Kesseböhmer has established a new business area as a supplier of highly specialized components for the automotive industry and has grown the new business area successfully in recent years. Kesseböhmer has a high level of vertical integration, with all production processes in-house. We also engineer and build key elements of our production machinery and tooling. This strategy cuts development time from a new idea to a quality product: Functions that delight. Designs that impress. Quality that sets standards.
            </p>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id}>
                <Link href={product.link}>
                  <Image
                    className="w-[760px] h-auto"
                    src={product.src}
                    alt={product.alt}
                    height={760}
                    width={661}
                  />
                </Link>

                <div className="flex flex-col gap-1 md:gap-2 lg:gap-4">
                  <div className="mt-2 md:mt-6 lg:mt-10">
                    <p className="font-normal text-5xl ">{product.title}</p>
                  </div>
                  <div>
                    <p className="font-normal text-lg  cursor-pointer text-text lg:hover:underline lg:hover:text-brandColor">
                      <Link href={product.link}>See details</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center  py-4 md:py-6 lg:py-10">
            <Link href={"/products"}>
              <SeeWhatInside />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hafele;

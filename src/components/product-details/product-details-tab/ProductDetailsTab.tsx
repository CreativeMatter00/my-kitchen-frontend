import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTriggerProductDetails } from "@/components/ui/tabs";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsSpecification from "./ProductDetailsSpecification";
import ProductDetailsReview from "./ProductDetailsReview";
import ProductDetailsShippingAndReturn from "./ProductDetailsShippingAndReturn";

const ProductDetailsTab = () => {
  return (
    <div>
      <Tabs defaultValue="description" className="">
        <TabsList className="grid w-full grid-cols-2 bg-backgroundColor h-14 border-b border-grayLightPrimary ">
          <TabsTriggerProductDetails
            value="description"
            className="text-lg  text-textOptional hover:text-brandColor "
          >
            Description
          </TabsTriggerProductDetails>
          <TabsTriggerProductDetails
            value="specifications"
            className="text-lg  text-textOptional hover:text-brandColor"
          >
            Specifications
          </TabsTriggerProductDetails>
          {/* <TabsTriggerProductDetails
            value="reviews"
            className="text-lg font-bold text-textOptional hover:text-[redBrandColor1]"
          >
            Reviews
          </TabsTriggerProductDetails> */}
          
          {/* <TabsTriggerProductDetails
            value="shipping & returns"
            className="text-lg font-bold text-textOptional hover:text-[redBrandColor1]"
          >
            Shipping & Returns
          </TabsTriggerProductDetails> */}
        </TabsList>

        <TabsContent value="description">
          <ProductDetailsDescription />
        </TabsContent>

        <TabsContent value="specifications">
          <ProductDetailsSpecification />
        </TabsContent>

        {/* <TabsContent value="reviews">
          <ProductDetailsReview />
        </TabsContent> */}

        <TabsContent value="shipping & returns">
          <ProductDetailsShippingAndReturn></ProductDetailsShippingAndReturn>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetailsTab;

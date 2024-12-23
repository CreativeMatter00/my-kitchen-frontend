'use client'

import Image from "next/image";
import React, { useState } from "react";
import { FaDiamond } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import BreadcrumbOfHome from "@/components/breadcrumbs/BreadcrumbOfHome";
import BreadcrumbOfService from "@/components/breadcrumbs/BreadcrumbOfService";

const customerImage = "/images/customer-services/service.png";

const CustomerServices = () => {
  const [selectedText,setSelectedText]= useState('Customer Services')
  const coverPoints = [
    "The product must be purchased from MY KITCHEN sales centers/showrooms.",
    "The product must be purchased from the local dealers or showrooms authorized by MY KITCHEN.",
    "If the product is used in your own apartment, we offer the service service to you, and the service is not transferable to the subsequent owner.",
    "Under the normal condition, the material or profile defects occur during the installation by MY KITCHEN staffs.",
    "The product’s components those are defective in materials or workmanship under normal use, service and maintenance.",
  ];

  const notCoverPoints = [
    "Defects occur during the improper installation.",
    "Defects occur during the improper use.",
    "Slight color variations for repair or replacement parts and color variations that may Occur over time are not considered defects or deficiencies under this service.",
    "This service does not apply to damages or defects related to improper handling, Storage, misuse, alterations or product used for any purpose other than normal use.",
    "This Limited service does not include any labor, installation or transportation costs or any responsibility for damage MY KITCHEN considers unusual use.",
  ];

  const remarkPoints = [
    "No Dealer or Agent of MY KITCHEN has any authority to change or broaden the scope of this Limited service or MY KITCHEN obligations.",
    "The product’s component defect occurs during the shipment, please contact our staffs and the defected part will at our option either be repaired or replaced based on the actual circumstance.",
    "The Service statements contained in this Limited service set forth the only express warranties extended by MY KITCHEN for the kitchen cabinets.",
    " This Limited service shall be governed by and contrived in accordance with the laws set forth for the Bangladesh.",
  ];

  const tableData = [
    {
      series: "Cabinate Solution",
      items: "Carcase/ Body",
      servicePeriod: "5 years",
    },
    {
      series: "Cabinate Solution",
      items: "Door Panels",
      servicePeriod: "0.6 - 1 years (depends on color finishing)",
    },
    {
      series: "Countertops",
      items: "Solid Surface",
      servicePeriod: "3 years",
    },
    {
      series: "Hardware",
      items: "Available All",
      servicePeriod: "2 years",
    },
    {
      series: "Appliances",
      items: "Available All",
      servicePeriod: "1 year",
    },
  ];
  return (
    <div>
      <div className="container mx-auto flex flex-col gap-10 ">
        

        <div className="flex flex-col gap-4  lg:gap-10">
        <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start items-center line-clamp-2">
        {/* <Breadcrumbs parentItem="Services" currentItem={selectedText} /> */}
        {/* <BreadcrumbOfHome/> */}
        <BreadcrumbOfService/>
        </div>
        <div className="font-normal text-xl md:text-2xl lg:text-5xl lg:text-start text-center">
         Customer Service
        </div>
        <div>
          <Image
            src={customerImage}
            alt="Image"
            width={800}
            height={800}
            className="w-full h-auto"
          ></Image>
        </div>
        <div className="text-lg font-normal text-textSecondary ">
          We devote to offering you the most satisfying kitchen cabinets. We
          focus on not only the product itself, but also the after-sales
          service.
        </div>
        </div>

        <div className="text-4xl text-textSecondary">Service Method</div>
        <ol className="list-decimal list-inside  bold-list-marker ">
          <li className="text-textSecondary text-lg font-normal before:font-bold before:mr-2">
            After you filed the service claim, the defective parts will at our
            option either be repaired or replaced, and we reserve the right to
            replace defective parts with parts of equal or greater value.
          </li>
          <li className="text-textSecondary text-lg font-normal mt-2 before:font-bold before:mr-2">
            If a service claim is filed after the product becomes obsolete or
            discontinued, MY KITCHEN will replace the affected component with a
            replacement component of a similar style based on availability at
            the time of claim.
          </li>
        </ol>
      </div>

      <div className="w-full bg-grayLightSecondary flex flex-col gap-4 mt-6">
        <div className="container mx-auto ">
          <div className="flex flex-col gap-4 ">
          <div className="text-text text-4xl font-normal mt-6">
            What is covered
          </div>
          <div className="text-textSecondary text-lg font-bold ">
            The service period begins from that day that you received the
            product. The following list what our coverage are:
          </div>
          <div className="">
            {coverPoints.map((coverPoint, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-start items-center gap-2  text-textSecondary text-lg font-normal">
                    <FaDiamond className="w-2 h-2" />
                    {coverPoint}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-text text-4xl font-normal mt-2">
            What is not covered
          </div>

          <div className="">
            {notCoverPoints.map((notCoverPoint, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-start items-center gap-2 mt-2 text-textSecondary text-lg font-normal">
                    <FaDiamond className="w-2 h-2" />
                    {notCoverPoint}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
        <div className="w-full bg-black py-6">
          <div className="container ">
            <div className="text-grayLightSecondary text-4xl ">Remarks</div>

            <ol className="text-grayLightSecondary list-decimal list-inside mt-6">
              {remarkPoints.map((remarkPoint, index) => {
                return (
                  <>
                    <div key={index} className="mt-2">
                      <li>{remarkPoint}</li>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="text-text text-xl font-bold ">
            The Service Time
          </div>

          <Table className="mb-4">
            <TableHeader className="text-base font-bold hover:bg-gray-50 cursor-pointer ">
              <TableRow>
                <TableHead>Series</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Service Period</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  className="hover:bg-gray-50 cursor-pointer "
                  key={index}
                >
                  <TableCell>{row.series}</TableCell>
                  <TableCell>{row.items}</TableCell>
                  <TableCell>{row.servicePeriod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;

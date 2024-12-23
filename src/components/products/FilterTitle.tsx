'use client'
import React, { useState } from "react";
import { FaSliders } from "react-icons/fa6";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Category from "./Category";
import Filter from "./Filter";

const FilterTitle = () => {

    return (
        <>
            <div className="flex justify-start items-center gap-2 lg:mt-4 mt-0 lg:border-0 border border-black py-1 px-2 rounded-none lg:cursor-default cursor-pointer">
                <div>
                    <FaSliders className="w-4 h-4 text-textOptional hidden lg:block" />
                </div>
                <div className="text-base font-normal text-text hidden lg:block">Filter</div>
                <Sheet>
                    <div>
                        <SheetTrigger asChild>
                            <div>
                                <button className="text-base font-normal text-text lg:hidden block">Filter</button>
                            </div>
                        </SheetTrigger>
                    </div>
                   {/* To enable vertical scrolling for the content when it exceeds the modal's height. */}
                    <SheetContent className="h-[100vh] w-full bg-whitePrimary overflow-y-auto">
                        <div className="sm:mt-24 md:mt-0">
                            <Category />
                            <Filter />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
export default FilterTitle
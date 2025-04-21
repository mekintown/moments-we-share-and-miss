"use client";

import NextButton from "@/components/NextButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Location } from "@/constants/localStorageConstants";
import { LocationType } from "@/enums/enums";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page = () => {
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    if (location) {
      localStorage.setItem(Location, location);
    }
  }, [location]);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream space-y-3">
        <div className="">แล้วช่วงเวลานั้น เกิดขึ้น...</div>
        <div className="flex justify-center items-center gap-2">
          <span>ที่</span>
          <Select onValueChange={(value) => setLocation(value as LocationType)}>
            <SelectTrigger className="border-2 border-main-cream text-main-cream">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(LocationType).map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="row-start-4 ">
        {location && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <NextButton
              variant="ghost"
              label="แตะเพื่อไปต่อ"
              url="web-question-5"
              className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Page;

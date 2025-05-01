"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CustomLocation, Location } from "@/constants/localStorageConstants";
import { LocationType } from "@/enums/enums";
import PageWithTapToNext from "@/components/PageWithTapToNext";

const Page = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [customLocation, setCustomLocation] = useState("");

  useEffect(() => {
    if (location) {
      localStorage.setItem(Location, location);
      if (customLocation) {
        localStorage.setItem(CustomLocation, customLocation);
      } else {
        localStorage.removeItem(CustomLocation);
      }
    }
  }, [location, customLocation]);

  const isReady =
    location &&
    (location !== LocationType.Others || customLocation.trim().length > 0);

  return (
    <PageWithTapToNext nextUrl={"web-question-5"} enabled={!!isReady}>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream space-y-3">
        <div>แล้วช่วงเวลานั้น&nbsp;เกิดขึ้น…</div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>ที่</span>

          <div className="relative">
            <Select
              onValueChange={(val) => {
                setLocation(val as LocationType);
                setCustomLocation("");
              }}
              value={location ?? undefined}
            >
              <SelectTrigger className="border-2 border-main-cream text-main-cream w-40">
                <SelectValue placeholder="" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {Object.values(LocationType).map((v) => (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <AnimatePresence>
              {location === LocationType.Others && (
                <motion.input
                  key="custom-location"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  type="text"
                  autoFocus
                  maxLength={20}
                  value={customLocation}
                  onChange={(e) => setCustomLocation(e.target.value)}
                  placeholder="พิมพ์สถานที่…"
                  className="absolute inset-0 w-[80%] h-full rounded-md rounded-r-none` border-2 border-r-0 border-main-cream bg-main-cream/10 px-2 text-main-cream placeholder:text-main-cream/60 backdrop-blur-sm focus:outline-none"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageWithTapToNext>
  );
};

export default Page;

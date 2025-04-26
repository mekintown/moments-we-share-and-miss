import { Location, Name } from "@/constants/localStorageConstants";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageGenerationProps {
  imgSrc: string;
}

const ImageGeneration = ({ imgSrc }: ImageGenerationProps) => {
  const [location, setLocation] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    setLocation(localStorage.getItem(Location));
    setName(localStorage.getItem(Name));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="memory-card-template"
            width={1080}
            height={1920}
            className="object-contain"
            priority
          />
        )}
      </div>
      <div className="absolute top-0 left-0">{name}</div>
    </div>
  );
};

export default ImageGeneration;

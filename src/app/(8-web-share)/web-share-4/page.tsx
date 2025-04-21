import NextButton from "@/components/NextButton";
import { Button } from "@/components/ui/button";
import { InstagramURL } from "@/constants/localStorageConstants";
import { Instagram } from "lucide-react";

const Page = () => {
  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-main-cream space-y-10">
        <div className="text-subheader">
          <div className="">หากคุณอยากรู้จักโปรเจกต์นี้</div>
          <div className="">มากกว่านี้ หรืออยากติดตามสิ่งที่</div>
          <div className="">เรากำลังทำต่อไป</div>
          <div className="">สามารถเข้าไปดูได้ที่</div>
          <div className="">Instagram ของเรา</div>
        </div>
        <a href={InstagramURL}>
          <Button size="icon" className="bg-main-yellow">
            <Instagram style={{ scale: 1.4 }} />
          </Button>
        </a>
      </div>
      <div className="row-start-4">
        <NextButton label="เสร็จสิ้น" url="web-share-5" />
      </div>
    </>
  );
};

export default Page;

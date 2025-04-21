import NextButton from "@/components/NextButton";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Page = () => {
  return (
    <>
      <div className=""></div>
      <div className="row-start-4 flex space-x-3">
        <Button size="icon" className="bg-main-yellow">
          <Download style={{ scale: 1.25 }} />
        </Button>
        <NextButton url="web-ending-3" />
      </div>
    </>
  );
};

export default Page;

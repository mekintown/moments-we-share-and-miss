"use client";

import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="row-span-2 text-center text-body space-y-5">
      <div className="text-subheader text-main-cream">
        ก่อนย้อนความทรงจำไปด้วยกัน ขอทำความรู้จักกันสักนิด
        <br />
        อยากให้เราเรียกคุณว่าอะไร?
      </div>
      <div className="">
        <Input className="text-body text-main-cream" />
      </div>
    </div>
  );
}

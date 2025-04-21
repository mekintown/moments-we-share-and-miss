"use client";

import PageWithTapToNext from "@/components/PageWithTapToNext";

export default function Page() {
  return (
    <PageWithTapToNext nextUrl="/web-sound-3">
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="text-main-cream text-nowrap">
          แต่ยังมี ‘เสียง’ ที่ดังก้องชัดเจนเสมอ
        </div>
        <div className="text-main-cream">ในเหตุการณ์สำคัญของเรา</div>
      </div>
    </PageWithTapToNext>
  );
}

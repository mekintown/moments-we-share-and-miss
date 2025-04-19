"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PairID } from "@/constants/localStorageConstants";

export default function JoinPage({
  params,
}: {
  params: Promise<{ pairID: string }>;
}) {
  const { pairID } = use(params);

  const router = useRouter();
  useEffect(() => {
    localStorage.setItem(PairID, pairID);
    router.replace("/");
  }, [pairID, router]);

  return null;
}

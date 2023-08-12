"use client";

import { useParams } from "next/navigation";

export default function StudentPage() {
  const params = useParams();
  return <>Student id: {params?.student}</>;
}

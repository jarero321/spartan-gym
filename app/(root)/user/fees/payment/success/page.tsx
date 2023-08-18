"use client";

import Empty from "@/app/components/Empty";
import Loading from "@/app/loading";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof axios>) => {
  const res = await axios(...args);
  return res.data;
};

const SuccessPage: React.FC = () => {
  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const URL = sessionId ? `/api/payment/${sessionId}` : null;

  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (error) {
    return (
      <Empty
        title="Failed"
        subtitle={"Something went wrong"}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return <div>Success Page</div>;
};

export default SuccessPage;

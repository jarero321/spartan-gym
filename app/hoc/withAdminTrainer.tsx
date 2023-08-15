import { useSession } from "next-auth/react";
import Empty from "@/app/components/Empty";
import Loader from "@/app/components/Loader/Loader";
import { SessionUser } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

interface WithAdminTrainerProps<P> {
  Component: React.ComponentType<P>;
}

const WithAdminTrainer = <P extends {}>({
  Component,
}: WithAdminTrainerProps<P>) => {
  const AdminTrainerComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { data, status } = useSession();
    const sessionUser = data?.user as SessionUser;

    if (status === "loading") {
      return <Loader />;
    }

    if (!data?.user) {
      router.push("/signin");
      return null;
    }

    const isAdminOrTrainer =
      sessionUser.role === "admin" || sessionUser.role === "trainer";

    if (!isAdminOrTrainer) {
      return (
        <Empty
          title="Unauthorized"
          subtitle="You ain't authorized for this page."
        />
      );
    }

    return <Component {...props} />;
  };
  return AdminTrainerComponent;
};

export default WithAdminTrainer;

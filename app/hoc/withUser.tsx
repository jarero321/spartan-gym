import { useSession } from "next-auth/react";
import Empty from "@/app/components/Empty";
import Loader from "@/app/components/Loader/Loader";
import { SessionUser } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

interface WithUserProps<P> {
  Component: React.ComponentType<P>;
}

const WithUser = <P extends {}>({
  Component,
}: WithUserProps<P>) => {
  const UserComponent: React.FC<P> = (props) => {
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

  

    if (sessionUser.role !== "user") {
      return (
        <Empty
          title="Unauthorized"
          subtitle="You ain't authorized for this page."
        />
      );
    }

    return <Component {...props} />;
  };
  return UserComponent;
};

export default WithUser

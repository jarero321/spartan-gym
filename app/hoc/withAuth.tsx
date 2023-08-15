"use client";
import { useSession } from "next-auth/react";
import Empty from "@/app/components/Empty";
import Loader from "@/app/components/Loader/Loader";
import { SessionUser } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface WithAuthProps<P> {
  Component: React.ComponentType<P>;
}

const withAuth = <P extends {}>({ Component }: WithAuthProps<P>) => {
  const AdminTrainerComponent: React.FC<P> = (props) => {
    const [hasMounted, setHasMounted] = useState<boolean>(false);
    const router = useRouter();
    const { data, status } = useSession();
    const sessionUser = data?.user as SessionUser;

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) {
      return null;
    }

    if (status === "loading") {
      return <Loader />;
    }

    if (!data?.user) {
      router.push("/signin");
      return null; // You might want to return a loading indicator here
    }

    const isAdminOrTrainer =
      sessionUser.role === "admin" || sessionUser.role === "trainer";

    if (!isAdminOrTrainer) {
      router.push("/unauthorized");
      return (
        <Empty
          title="Unauthorized"
          subtitle="You ain't authorized for this page."
        />
      );
    }

    // Render the Component with the provided props
    return <Component {...props} />;
  };
  return AdminTrainerComponent;
};

export default withAuth;

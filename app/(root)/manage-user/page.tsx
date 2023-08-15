"use client";

import withAdminTrainer from "@/app/components/withAdminTrainer";

const ManageUser: React.FC = () => {
  return <h1>Manage User</h1>;
};

export default withAdminTrainer({ Component: ManageUser });

"use client"

import withAuth from "@/app/hooks/withAuth"

const ManageUser: React.FC = () => {
    return <h1>Manage User</h1>
}

export default withAuth({Component: ManageUser})

import UserDashboard from "@/app/components/UserDashboard";
import AdminTrainerDashboard from "@/app/components/AdminTrainerDashboard";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly/page";
import Empty from "@/app/components/Empty";

export default async function DashboardPage() {

  const user= await getCurrentUser()

    if(!user) {
        return <ClientOnly>
            <Empty title={'Wait'} subtitle={'Wait for sometime'} />
        </ClientOnly>
    }


  return (
    <ClientOnly>
        {user?.role === 'user' ? <UserDashboard user={user}/> : <AdminTrainerDashboard user={user} />}
    </ClientOnly>
  );
}

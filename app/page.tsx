import DashboardCard from "@/components/dashboard/dashboard-card";
import { BASE_API_URL } from "@/constants/constants";
import { DASHBOARD_HOME_ENDPOINT } from "@/constants/routes";

export default async function Home() {
  const dashboardHomeApiResponse = await fetch(
    `${BASE_API_URL}${DASHBOARD_HOME_ENDPOINT}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const dashboardHomeResponse: DashboardResponse = await dashboardHomeApiResponse.json();

  return (
    <div className="flex flex-col my-6 mx-12">
      <div className="font-bold text-4xl">Dashboard</div>
      <blockquote className="space-y-2 my-4">
        <p className="text-lg">
          Welcome to Terrum&apos;s Open Dashboard, your go-to resource for
          sustainability and climate action. Here, we are diligently building a
          comprehensive database, encompassing companies, brands, videos,
          audios, and more, all dedicated to furthering sustainability efforts.
        </p>
      </blockquote>
      <div className="grid sm:grid-cols-4 gap-4">
        <DashboardCard data={dashboardHomeResponse}/>
      </div>
    </div>
  );
}
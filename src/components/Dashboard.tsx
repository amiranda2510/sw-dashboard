import { useEffect, useState } from "react";
import DashboardOverview from "./Charts/DashboardOverview";
import GymDetailsTable from "./Charts/GymDetailsTable";
import StudentsMetric from "./Charts/StudentsMetric";
import type { DashboardStatsResponse } from "@/types/dashboard";
import { DashboardAPI } from "@/lib/api/apiFacade";

export default function Dashboard() {

  const [data, setData] = useState<DashboardStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      const res = await DashboardAPI.getStats();
      setData(res);
      setLoading(false);
    }

    fetchStats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available.</p>;

  return (
    <div className="mt-10 flex flex-col gap-8">
      <DashboardOverview dashboardData={data} />
      <StudentsMetric metricsData={data?.students_by_gym ?? []} />
      <GymDetailsTable gymDetailsData={data?.students_by_gym ?? []} />
    </div>
  )
}

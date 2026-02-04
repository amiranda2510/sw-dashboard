import type { DashboardStatsResponse, StudentsByOwner } from "@/types/dashboard";
import StatCard from "./StatCard";
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useMemo } from "react";
import { normalize } from "@/lib/utils";

const OWNER_COLORS: Record<string, string> = {
  "sarah wellness": "#F765A3",
  "john fitness": "#7987FF",
};

const DEFAULT_COLOR = "#CBD5E1";

const EllipsePie = ({ data }: { data: StudentsByOwner[] }) => {
  const chartData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      name: item.owner_name,
      value: item.student_count,
      fill: OWNER_COLORS[normalize(item.owner_name)] ?? DEFAULT_COLOR,
    }));
  }, [data]);

  return (
    <div className="w-60 h-60 flex flex-col items-center m-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart aria-label="Students per owner chart">
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            isAnimationActive={true}
          />

        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 flex justify-center gap-4">
        {chartData.map((item) => (
          <div key={item.owner_id} className="flex items-center gap-2 text-sm">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span>{item.name}</span>
            <span className="sr-only">
              {item.name}: {item.value} students
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardOverview({ dashboardData: data }: { dashboardData: DashboardStatsResponse | null }) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-stretch">
      <div className="flex flex-col gap-6.5 md:flex-2 justify-between">
        <StatCard title="Total Students" value={data?.total_students ?? 0} />
        <StatCard title="Total Gyms" value={data?.total_gyms ?? 0} />
        <StatCard title="Total Owners" value={data?.total_owners ?? 0} />
      </div>
      <div className="border rounded-md py-6 px-8 flex flex-col items-center justify-center md:flex-1">
        <h2 className="md:self-start">Students per Owner</h2>
        <EllipsePie data={data?.students_by_owner ?? []} />
      </div>
    </div>
  )
}

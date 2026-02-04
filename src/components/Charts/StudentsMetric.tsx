import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import type { StudentsByGym } from "@/types/dashboard";
import { getInitials } from "@/lib/utils";

const StudentsGymFilterOptions = () => {
  return (
    <Select defaultValue="week">
      <SelectTrigger className="w-28 h-7 text-xs border-none shadow-none focus:ring-0 text-muted-foreground hover:text-foreground">
        <SelectValue placeholder="This week" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="week">This week</SelectItem>
        <SelectItem value="month">This month</SelectItem>
        <SelectItem value="year">This year</SelectItem>
      </SelectContent>
    </Select >
  )
}

export default function StudentsMetric({ metricsData: data }: { metricsData: StudentsByGym[] }) {

  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between">
        <h1 className="self-center">Students per Gym</h1>
        <StudentsGymFilterOptions />
      </div>
      <ResponsiveContainer width="100%" height={300} className="mt-4">
        <BarChart data={data.map(gym => ({
          gym: getInitials(gym.gym_name),
          students: gym.student_count
        }))}>
          <XAxis dataKey="gym" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#7987FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

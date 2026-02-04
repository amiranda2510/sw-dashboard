import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "../ui/separator"
import type { StudentsByGym } from "@/types/dashboard"
import { getInitials } from "@/lib/utils"

export default function GymDetailsTable({ gymDetailsData }: { gymDetailsData: StudentsByGym[] }) {
  return (
    <div className="border rounded-md">
      <div>
        <h1 className="p-4">Gym Details Table</h1>
      </div>
      <Separator />
      <Table className="[&_td]:p-5.5 [&_th]:p-4 [&_td:not(:last-child)]:border-r">
        <TableHeader>
          <TableRow className="bg-muted">
            <TableHead>Gym Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Students</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gymDetailsData.map((gym) => (
            <TableRow key={gym.gym_name}>
              <TableCell>{gym.gym_name}</TableCell>
              <TableCell>
                <span className="hidden sm:inline">
                  {gym.owner_name}
                </span>
                <span className="inline sm:hidden">
                  {getInitials(gym.owner_name)}
                </span>
              </TableCell>
              <TableCell>{gym.student_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

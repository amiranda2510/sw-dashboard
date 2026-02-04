export interface StudentsByOwner {
  owner_id: number;
  owner_name: string;
  student_count: number;
}

export interface StudentsByGym {
  gym_id: number;
  gym_name: string;
  owner_name: string;
  student_count: number;
}

export interface DashboardStatsResponse {
  total_students: number;
  total_gyms: number;
  total_owners: number;
  students_by_owner: StudentsByOwner[];
  students_by_gym: StudentsByGym[];
}

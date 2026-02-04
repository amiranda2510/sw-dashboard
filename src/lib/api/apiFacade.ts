import { api } from "@/lib/api/api";
import type { DashboardStatsResponse } from "@/types/dashboard";

interface GetStatsParams {
  owner_id?: number;
  gym_id?: number;
}

export const DashboardAPI = {
  async getStats(params?: GetStatsParams) {
    const { data } = await api.get<DashboardStatsResponse>(
      "/api/dashboard/stats",
      { params }
    );

    return data;
  },
};

import { api } from "./api";

import {
  ReportsResponse,
} from "@/types/report";

export async function getReports(
  page = 1,
  limit = 10
) {

  const response =
    await api.get<ReportsResponse>(
      `/reports?page=${page}&limit=${limit}`
    );

  return response.data;
}
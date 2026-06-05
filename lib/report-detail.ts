import { api } from "./api";

import {
  ReportDetail,
} from "@/types/report-detail";

export async function getReportDetail(
  reportId: string
) {

  const response =
    await api.get<ReportDetail>(
      `/reports/${reportId}`
    );

  return response.data;
}
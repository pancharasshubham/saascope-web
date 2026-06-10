import { api } from "./api";

import {
  ReportEventsResponse,
} from "@/types/report-events";

export async function getReportEvents(
  reportId: string
) {

  const response =
    await api.get<ReportEventsResponse>(
      `/reports/${reportId}/events`
    );

  return response.data;
}
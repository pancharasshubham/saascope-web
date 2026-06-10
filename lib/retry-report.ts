import { api } from "./api";

export async function retryReport(
  reportId: string
) {

  const response =
    await api.post(
      `/reports/${reportId}/retry`
    );

  return response.data;
}
import { api } from "./api";

export async function deleteReport(
  reportId: string
) {

  await api.delete(
    `/reports/${reportId}`
  );
}
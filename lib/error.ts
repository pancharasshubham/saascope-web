import axios from "axios";

export function getApiError(
  error: unknown
) {

  if (
    axios.isAxiosError(error)
  ) {

    return (
      error.response?.data?.error ??
      error.response?.data?.message ??
      "Something went wrong"
    );
  }

  return "Something went wrong";
}
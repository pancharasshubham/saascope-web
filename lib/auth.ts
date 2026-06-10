import { api } from "./api";

import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  RegisterResponse,
} from "@/types/auth";

export async function login(
  data: LoginRequest
) {

  const response =
    await api.post<AuthResponse>(
      "/auth/login",
      data
    );

  return response.data;
}

export async function register(
  data: RegisterRequest
) {

  const response =
    await api.post<RegisterResponse>(
      "/auth/register",
      data
    );

  return response.data;
}
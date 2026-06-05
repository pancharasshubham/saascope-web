export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;

   user: {
    id: string;
    email: string;
  };
};
export type SignUpBody = {
  email: string;
  password: string;
  userName: string;
};

export type LoginBody = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignUpReponse = {
  token: string;
  userName: string;
  userId: number;
  message: string;
};

export type LoginResponse = {
  token: string;
  userName: string;
  userId: number;
  rememberMe: boolean;
};

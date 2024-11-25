export interface AuthResponse {
  token: string;
}

export interface LoginCredentials {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}
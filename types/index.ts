type UserType = "admin" | "trainer" | "user";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserType;
};

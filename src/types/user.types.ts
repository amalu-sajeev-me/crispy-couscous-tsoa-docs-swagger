export interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
}

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;
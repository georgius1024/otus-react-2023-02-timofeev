export type User = {
  uid: string | null,
  email: string | null,
  providerData: unknown
}

export type Todo = {
  id?: string;
  uid: string;
  name: string;
  completed: boolean;
}

export type Login = (user: User) => void
export type Logout = () => void


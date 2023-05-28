export enum Page {
  home, login, forgot, register
}

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

export type Navigate = (page: Page) => void
export type Login = (user: User | null) => void
export type Logout = Login


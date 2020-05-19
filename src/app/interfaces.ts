export interface Course {
  id: number;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  topRated: boolean;
  authors: Author[];
}

export interface Author {
  id: string;
  name: string;
}

export interface User {
  id: string;
  fakeToken: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}

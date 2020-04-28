export interface Course {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  duration: number;
  topRated: boolean;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
}

export type CourseData = {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  duration: number;
};

export type UserData = {
  id: string;
  first_name: string;
  last_name: string;
};

export interface Courses {
  items: CourseData[];
  ngOnInit(): void;
}

export interface Course {
  item: CourseData;
}

export interface User {
  user: UserData;
  ngOnInit(): void;
}

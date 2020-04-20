import { OnInit } from '@angular/core';

export type Course = {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  duration: number;
};

export type User = {
  id: string;
  first_name: string;
  last_name: string;
};

export interface Courses extends OnInit {
  items: Course[];
}

export interface CourseItem extends OnInit {
  item: Course;
}

export interface Login extends OnInit {
  user: User;
}

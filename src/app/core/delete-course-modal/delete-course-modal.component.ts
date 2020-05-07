import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss'],
})
export class DeleteCourseModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Course) {}

  ngOnInit(): void {}
}

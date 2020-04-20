import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './login/login.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { SectionComponent } from './section/section.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursesComponent,
    CourseItemComponent,
    LoginComponent,
    CourseSearchComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursesComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class CoreModule {}

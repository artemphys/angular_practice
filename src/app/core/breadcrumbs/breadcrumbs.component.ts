import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbsItems: string[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breadcrumbsItems = [''];

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((routeData) => {
        // TODO: implement Breadcrumbs later
        // console.log(routeData);
      });
  }
}

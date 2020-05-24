import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  public breadcrumbsItems: string[] = ['courses'];

  constructor(
    private router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.breadcrumbsService.breadcrumbs.subscribe(
        (items) => (this.breadcrumbsItems = items)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }
}

/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { who_am_i, WHO_AM_I } from './auth/store/auth.actions';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(who_am_i());
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}

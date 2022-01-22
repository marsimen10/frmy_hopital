import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { AdministrationManagementService } from './administration-management/administration-management.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]='menu' class='zen-sidebar'></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;

  constructor(
    private administrationService: AdministrationManagementService,
    private utilService: UtilsService) {}

  ngOnInit(): void {
  }
}

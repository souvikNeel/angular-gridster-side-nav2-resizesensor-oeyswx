import { NgZone, Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface, GridsterComponent } from 'angular-gridster2';

import { MatSidenav } from '@angular/material';

const NO_OF_COLS = 4;

export interface Item {
  gridsterItem: GridsterItem;
  firstResize: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public options: GridsterConfig;
  public dashboard: Item[];
  public firstResizeFlag: boolean;
  sideNavOpen = true;

  @ViewChild('sideNav', {
    static: true
  })
  sideNav!: MatSidenav;

  @ViewChild('gridster', {
    static: true
  })
  gridster!: GridsterComponent;

  sideNavToggle() {
    console.log('toggling side-nav');
    this.sideNav.toggle().then(() => {
      console.log('toggling side-nav done');
      this.gridster.resize();
    });
  }
  constructor(private readonly cdr: ChangeDetectorRef,
    private readonly ngZone: NgZone) {
    this.dashboard = [];
    this.options = {
      minCols: NO_OF_COLS,
      minRows: 4,
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
    for (let i = 0; i < 1; i++) {
      const item = { firstResize: true, gridsterItem: { x: i % NO_OF_COLS, y: Math.floor(i / NO_OF_COLS), rows: 1, cols: 1 } };
      this.dashboard.push(item);
    }
  }
}

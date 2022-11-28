import { Input, Component, OnInit } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()
  gridsterItem!: GridsterItem;

  reszieEventWidth: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onResized(event: ResizedEvent) {
    this.reszieEventWidth = event.newWidth;
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Result | null = null;

  constructor() {}

  ngOnInit() {
    console.log(this.itemData);
  }
}

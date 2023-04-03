import { Component, Input } from '@angular/core';
import { Result } from '../../models/movie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banners.component.html',
  styleUrls: ['./items-banners.component.scss'],
})
export class ItemsBannersComponent {
  @Input() items: Result[] = [];
  @Input() title: string = '';
}

import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';

import { WindowMoreComponent } from './window-more/window-more.component';

import { Contact } from '../../contact';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Contact;

  constructor() {
  }

  ngOnInit() {
  }

  editItem(): void {}

  showMore(): void {
    //his.dialog.open(WindowMoreComponent, { data: this.item });
  }
}

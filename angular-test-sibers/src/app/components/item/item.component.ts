import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() @Output() item: Object;

  constructor() { }

  ngOnInit() {
  }

  editItem(): void {
    console.log(123);
  }
}

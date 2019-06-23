import { Component, OnInit, Inject } from '@angular/core';

import { Contact } from '../../../contact';

@Component({
  selector: 'app-window-more',
  templateUrl: './window-more.component.html',
  styleUrls: ['./window-more.component.css']
})
export class WindowMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  close(): void {
  }

}

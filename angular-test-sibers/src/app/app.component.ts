import { Component, OnInit } from '@angular/core';
import { HttpService } from './http-service';

import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'beaux contacts';
  data:Object[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData().subscribe(d => {
      this.data = d;
    })
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './http-service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}

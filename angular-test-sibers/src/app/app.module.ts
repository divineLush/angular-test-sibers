import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './http-service';
import { WindowMoreComponent } from './components/item/window-more/window-more.component';
import { HttpClient } from 'selenium-webdriver/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    WindowMoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
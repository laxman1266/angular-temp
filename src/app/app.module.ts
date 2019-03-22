import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';\
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';
import { RentalModule } from './rental/rental.module';
const routes: Routes =
[{
  path: '', pathMatch: 'full', redirectTo: '/rentals'
}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

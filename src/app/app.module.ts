import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogginComponent } from './loggin/loggin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCartComponent,
    LogginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

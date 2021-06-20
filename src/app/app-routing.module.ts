import { LogginComponent } from './loggin/loggin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'admin/admin-products', component: ProductsComponent },
  { path: 'shopping/cart', component: ShoppingCartComponent },
  { path: 'logging', component: LogginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

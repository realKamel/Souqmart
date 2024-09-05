import { Routes } from '@angular/router';
import { BlankComponent } from './Layouts/blank/blank.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { AuthComponent } from './Layouts/auth/auth.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'blank',
    component: BlankComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'checkout/:cart_id', component: CheckOutComponent },
      { path: 'allorders', component: AllOrdersComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LogInComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forget', component: ForgetPasswordComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

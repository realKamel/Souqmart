import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
	{
		path: '',
		component: BlankComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'Home', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'cart', component: CartComponent },
			{ path: 'product', component: ProductsComponent },
			{
				path: 'ProductDetails/:id',
				loadComponent: () =>
					import(
						'./components/product-details/product-details.component'
					).then((c) => c.ProductDetailsComponent),
			},
			{
				path: 'checkOut/:cart_id',
				loadComponent: () =>
					import('./components/check-out/check-out.component').then(
						(c) => c.CheckOutComponent
					),
			},
			{
				path: 'AllOrders',
				loadComponent: () =>
					import('./components/all-orders/all-orders.component').then(
						(c) => c.AllOrdersComponent
					),
			},
		],
	},
	{
		path: '',
		component: AuthComponent,
		children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: LogInComponent },
			{ path: 'register', component: RegisterComponent },
			{
				path: 'forget',
				loadComponent: () =>
					import(
						'./components/forget-password/forget-password.component'
					).then((c) => c.ForgetPasswordComponent),
			},
		],
	},
	{ path: '**', component: NotFoundComponent },
];

import {
	Component,
	inject,
	OnDestroy,
	OnInit,
	signal,
	WritableSignal,
} from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductsService } from '../../Services/products.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { finalize, forkJoin, Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [CurrencyPipe, RouterLink],
	templateUrl: './products.component.html',
	styleUrl: './products.component.css',
})
export class ProductsComponent implements  OnDestroy {
	//TODO: add wishlist services
	readonly _ProductsService = inject(ProductsService);
	readonly _WishlistService = inject(WishlistService);
	readonly _ToastrService = inject(ToastrService);
	private destroy$ = new Subject<void>();
	isLoading = false;
	readonly Products: WritableSignal<IProduct[]> = signal([]);
	readonly wishListIds = new Set<string>();

	/* ngOnInit(): void {
		this.isLoading = true;

		forkJoin({
			products: this._ProductsService.getAllProducts(),
			wishlist: this._WishlistService.getLoggedUserWishlist(),
		})
			.pipe(
				finalize(() => {
					this.isLoading = false;
					console.log(this.Products());
				}), // Stop the loading spinner when both observables complete
				takeUntil(this.destroy$) // Unsubscribe when the component is destroyed
			)
			.subscribe({
				next: ({ products, wishlist }) => {
					wishlist.data.forEach((el: IProduct) => {
						this.wishListIds.add(el.id);
					});
					this.Products.set(
						products.data.map((i: IProduct) => {
							i.inWishList = this.wishListIds.has(i._id);
							return i;
						})
					);
				},
			});
	} */
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductsService } from '../../Services/products.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  //TODO add wishlist services
  readonly _ProductsService = inject(ProductsService);
  isLoading = signal(false);
  readonly Products: WritableSignal<IProduct[]> = signal([]);
  ngOnInit(): void {
    this.isLoading.set(true);
    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.Products.set(res.data);
        this.isLoading.set(false);
      },
    });
  }
}

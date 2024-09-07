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
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  //TODO add wishlist services
  readonly _ProductsService = inject(ProductsService);
  private destory$ = new Subject<void>();
  isLoading = false;
  readonly Products: WritableSignal<IProduct[]> = signal([]);
  ngOnInit(): void {
    this.isLoading = true;
    /*this._ProductsService.getAllProducts().pipe(finalize(()=>{
    this.isLoading = false;}),takeuntil(this.destory$) ).subscribe({
      next: (res) => {
        this.Products.set(res.data);
      },
    }); */
  }
  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { IProduct } from '../../Interfaces/iproduct';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  readonly _ActivatedRoute = inject(ActivatedRoute);

  readonly _ProductsService = inject(ProductsService);
  private prod_id: string = '';
  singleProd: IProduct = {} as IProduct;
  private destory$ = new Subject<void>();

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.prod_id = p.get('id')!;
      },
    });
    this._ProductsService
      .getSpcificProduct(this.prod_id)
      .pipe(takeUntil(this.destory$))
      .subscribe({ next: (res) => (this.singleProd = res.data) });
  }
  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { isPlatformBrowser } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../Interfaces/icategory';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly _CategoriesService = inject(CategoriesService);
  products!: ICategory[];
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider!: KeenSliderInstance;
  readonly _platform = inject(PLATFORM_ID);
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe((res) => {
      this.products = res.data;
    });
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this._platform)) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'free',
        slides: { origin: 'center', perView: 2.5, spacing: 10 },
        range: {
          min: -5,
          max: 5,
        },
        rtl: true,
        breakpoints: {
          '(min-width: 640px)': {
            slides: { perView: 3, spacing: 5 },
          },
          '(min-width: 768px)': {
            slides: { perView: 3, spacing: 5 },
          },
          '(min-width: 1024px)': {
            slides: { perView: 5, spacing: 5 },
          },
          '(min-width: 1280px)': {
            slides: { perView: 6, spacing: 5 },
          },
        },
        renderMode: 'precision',
      });
    }
  }

  ngOnDestroy() {}
}

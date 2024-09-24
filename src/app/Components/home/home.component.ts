import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	inject,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	Renderer2,
} from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../Interfaces/icategory';
import { ToastrService } from 'ngx-toastr';
import { finalize, Subject, takeUntil } from 'rxjs';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProductsComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
	private readonly _CategoriesService = inject(CategoriesService);
	readonly _ToastrService = inject(ToastrService);
	readonly _PLATFORM_ID = inject(PLATFORM_ID);
	private _Renderer2 = inject(Renderer2);
	private _ElementRef = inject(ElementRef);
	products!: ICategory[];
	private destory$ = new Subject<void>();
	isLoading = false;
	swipeOpt!: Swiper;
	ngOnInit(): void {
		this.isLoading = true;
		this._CategoriesService
			.getAllCategories()
			.pipe(
				finalize(() => (this.isLoading = false)),
				takeUntil(this.destory$)
			)
			.subscribe((res) => {
				this.products = res.data;
			});
	}
	swiperParams!: SwiperOptions;
	swiperEl!: SwiperContainer | null;
	ngAfterViewInit() {
		if (isPlatformBrowser(this._PLATFORM_ID)) {
			this.swiperEl = document?.querySelector('swiper-container');
			this.swiperParams = {
				slidesPerView: 3,
				breakpoints: {
					540: {
						slidesPerView: 3,
						grid: {
							rows: 2,
						},
					},
					1024: {
						slidesPerView: 4,
					},
					1536: {
						slidesPerView: 5,
					},
				},
				grid: {
					rows: 2,
				},
				freeMode: true,
				grabCursor: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			};
			this.swiperEl?.initialize();
			Object.assign(this.swiperEl!, this.swiperParams);
			console.log(this.swiperParams);
			console.log(this.swipeOpt);
		}
	}

	ngOnDestroy() {
		this.destory$?.next();
		this.destory$?.complete();
	}
}

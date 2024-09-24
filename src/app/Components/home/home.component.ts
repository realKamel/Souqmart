import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	inject,
	OnDestroy,
	OnInit,
	PLATFORM_ID,
	Renderer2,
	signal,
	WritableSignal,
} from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { ProductsComponent } from '../products/products.component';
import { ICategory } from '../../Interfaces/icategory';
import { ToastrService } from 'ngx-toastr';
import { finalize, Subject, takeUntil } from 'rxjs';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { isPlatformBrowser } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProductsComponent, SkeletonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
	//	FIXME slider re-initlalization when hopping between routes
	private readonly _CategoriesService = inject(CategoriesService);
	readonly _ToastrService = inject(ToastrService);
	readonly _PLATFORM_ID = inject(PLATFORM_ID);
	private _ElementRef = inject(ElementRef);
	categorySlider: WritableSignal<ICategory[]> = signal([]);
	private destory$ = new Subject<void>();
	isLoading = signal(false);
	swiperParams = signal({} as SwiperOptions);
	swiperEl!: SwiperContainer | null;
	ngOnInit(): void {
		this.isLoading.set(true);
		this._CategoriesService
			.getAllCategories()
			.pipe(
				finalize(() => this.isLoading.set(false)),
				takeUntil(this.destory$)
			)
			.subscribe((res) => {
				this.categorySlider.set(res.data);
			});
		this.swiperParams.set({
			slidesPerView: 3,
			breakpoints: {
				240: {
					slidesPerView: 3,
					grid: {
						rows: 2,
					},
					freeMode: {
						enabled: true,
						momentum: true,
						momentumBounce: true,
					},
					navigation: { enabled: true },
					pagination: { enabled: true },
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
		});
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this._PLATFORM_ID)) {
			this.swiperEl =
				this._ElementRef.nativeElement.querySelector(
					'swiper-container'
				);
			Object.assign(this.swiperEl!, this.swiperParams());
			this.swiperEl?.initialize();
			console.log('afterviweworked');
		}
	}

	ngOnDestroy() {
		this.destory$?.next();
		this.destory$?.complete();
	}
}

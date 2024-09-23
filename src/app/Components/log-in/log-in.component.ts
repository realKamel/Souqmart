import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-log-in',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule, NgClass],
	templateUrl: './log-in.component.html',
	styleUrl: './log-in.component.css',
})
export class LogInComponent implements OnDestroy {
	readonly _AuthService = inject(AuthService);
	readonly _ToastrService = inject(ToastrService);
	readonly _Router = inject(Router);
	isLoading = signal(false);
	private destroy$ = new Subject<void>();

	loginForm: FormGroup = new FormGroup({
		email: new FormControl(null, [Validators.required, Validators.email]),
		password: new FormControl(null, [
			Validators.required,
			Validators.pattern(/^\w{6}$/),
		]),
	});
	loginUser(): void {
		if (this.loginForm.valid) {
			this.isLoading.set(true);
			this._AuthService
				.signIn(this.loginForm.value)
				.pipe(
					finalize(() => {
						this.isLoading.set(false);
					}),
					takeUntil(this.destroy$)
				)
				.subscribe({
					next: (res) => {
						this._ToastrService.success(res.message, 'Souq');
						this._AuthService.setUserToken(res.token);
						this._Router.navigate(['/home']);
					},
				});
		} else {
			this.loginForm.markAllAsTouched();
		}
	}
	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

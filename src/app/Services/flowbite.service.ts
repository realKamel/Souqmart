import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      import('flowbite').then((flowbite) => {
        callback(flowbite);
      });
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isOpen: boolean = false;

  get isLoadingOpen(): boolean {
    return this.isOpen;
  }

  openLoading(): void {
    this.isOpen = true;
  }

  closeLoading(): void {
    this.isOpen = false;
  }
}

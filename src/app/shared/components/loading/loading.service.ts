import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public eventLoading: EventEmitter<boolean> = new EventEmitter();

  openLoading(): void {
    this.eventLoading.emit(true);
  }

  closeLoading(): void {
    this.eventLoading.emit(false);
  }
}

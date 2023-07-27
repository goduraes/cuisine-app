import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/components/loading/loading.service';
import { Observable} from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {
  // https://learnsmartcoding-restaurant.azurewebsites.net/swagger/index.html
  AxiosInstance = axios.create({
    baseURL: 'https://learnsmartcoding-restaurant.azurewebsites.net/api',
  })

  constructor(private loadingService: LoadingService){}

  get(url: string, loading?: boolean): Observable<any> {
    if(loading) this.loadingService.openLoading();

    return new Observable((observer) => {
      this.AxiosInstance.get(url)
        .then((res: any) => {
          observer.next(res.data);
          observer.complete();
        })
        .catch((err: any) => observer.error(err.response.data))
        .finally(() => {
          if(loading) this.loadingService.closeLoading();
        })
    })
  }
}

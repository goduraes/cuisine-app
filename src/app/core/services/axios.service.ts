import { Injectable } from '@angular/core';
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

  get(url: string, loading?: boolean): Observable<any> {
    return new Observable((observer) => {
      this.AxiosInstance.get(url)
        .then((res: any) => {
          observer.next(res.data);
          observer.complete();
        })
        .catch((err: any) => observer.error(err))
        .finally(() => console.log('Finalizou!'))
    })
  }
}

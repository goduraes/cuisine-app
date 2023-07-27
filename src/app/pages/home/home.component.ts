import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cuisines: any = [];

  constructor(private axiosService: AxiosService){}

  ngOnInit(): void {
    this.getCuisines();
  }

  getCuisines(): void {
    this.axiosService.get('/Cuisine/All', true)
      .subscribe((res: any) => {
        this.cuisines = res;
      })
  }
}

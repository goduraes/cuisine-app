import { Component, OnInit } from '@angular/core';
import { AxiosService } from './core/services/axios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.get('/Category/All').subscribe((res: any) => console.log(res));
  }

}

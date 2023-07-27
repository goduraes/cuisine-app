import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
  idCuisine: string;
  nameCuisine: string;

  constructor(
    private axiosService: AxiosService,
    private activatedRoute : ActivatedRoute
  ){
    this.idCuisine = this.activatedRoute.snapshot.params['id'];
    this.nameCuisine = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.getFoodMenu();
  }

  getFoodMenu(): void {
    this.axiosService.get(`/FoodMenu/cuisine/${this.idCuisine}/allFoodMenus/`, true)
      .subscribe((res: any) => {
        console.log(res)
      })
  }
}

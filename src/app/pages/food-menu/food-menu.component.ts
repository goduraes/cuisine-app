import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AxiosService } from '../../core/services/axios.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  idCuisine: string;
  nameCuisine: string;

  foodmenu: any[] = [];
  categories: any[] = [];

  constructor(
    private axiosService: AxiosService,
    private activatedRoute : ActivatedRoute
  ){
    this.idCuisine = this.activatedRoute.snapshot.params['id'];
    this.nameCuisine = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.getFoodMenu();
    this.geCategories();
  }

  getFoodMenu(): void {
    this.axiosService.get(`/FoodMenu/cuisine/${this.idCuisine}/allFoodMenus/`, true)
      .subscribe((res: any) => {
        console.log(res)
        this.foodmenu = res;
      })
  }

  geCategories(): void {
    this.axiosService.get(`/Category/All`, false)
      .subscribe((res: any) => {
        console.log(res)
        this.categories = res;
      })
  }

  categoria(i: number): string {
    const cat = this.categories.find(el => el.id === i);
    return cat ? cat.name : '';
  }
}

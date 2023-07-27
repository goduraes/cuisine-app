import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food-menu/:name/:id', component: FoodMenuComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppModuleRouting { }

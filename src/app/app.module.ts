import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModuleRouting } from './app.module.routing';

// pages
import { HomeComponent } from './pages/home/home.component';
import { FoodMenuComponent } from './pages/food-menu/food-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { LoadingComponent } from './shared/components/loading/loading.component';

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodMenuComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppModuleRouting,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

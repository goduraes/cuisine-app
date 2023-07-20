import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModuleRouting } from './app.module.routing';

// pages
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

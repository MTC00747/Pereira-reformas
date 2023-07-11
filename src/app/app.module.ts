import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './pages/banner/banner.component';
import { MenuTopoComponent } from './pages/menu-topo/menu-topo.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuTopoComponent,
    SobreNosComponent,
    ServicosComponent
  ],
  imports: [
    [NgbModule],
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

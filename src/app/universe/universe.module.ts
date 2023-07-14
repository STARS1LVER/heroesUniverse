import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { SearchComicComponent } from './pages/search-comic/search-comic.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UniverseRouterModule } from './universe-routing.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { SharedModule } from '../shared/shared.module';
import { HeroDescriptionPipe } from './pipes/hero-description.pipe';




@NgModule({
  declarations: [
    LayoutPageComponent,
    SearchHeroComponent,
    SearchComicComponent,
    CardInfoComponent,
    HeroImagePipe,
    HeroDescriptionPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    UniverseRouterModule,
    SharedModule

  ]
})
export class UniverseModule { }

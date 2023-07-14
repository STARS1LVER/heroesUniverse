import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { SearchComicComponent } from './pages/search-comic/search-comic.component';



const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'hero',  component:  SearchHeroComponent },
      {path: 'comic', component:  SearchComicComponent },
      {path: '**',    redirectTo: 'hero' }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
})
export class UniverseRouterModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'universe',
    loadChildren: () => import('./universe/universe.module').then( modulo => modulo.UniverseModule)
  },

  {
    path:       '',
    redirectTo: 'universe',
    pathMatch:  'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

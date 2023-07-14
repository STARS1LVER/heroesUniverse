import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';



@NgModule({
  imports: [PrimeNgModule],
  exports: [LoadingSpinnerComponent],
  declarations: [
    LoadingSpinnerComponent
  ],
  providers: [],
})
export class SharedModule { }

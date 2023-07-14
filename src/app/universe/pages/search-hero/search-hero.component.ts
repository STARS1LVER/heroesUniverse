import { Component, OnInit } from '@angular/core';
import { UniverseService } from '../../service/universe.service';
import { Data, Hero, Info } from '../../interfaces/hero.interface';
import { Observable, catchError, delay, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit  {

  public isError:   boolean = false

  public isLoading: boolean = false;

  public myForm: FormGroup = this.formB.group({

    name: ['', [Validators.required, Validators.minLength( 4 )] ]
  })

  // Creamos una propiedad que sera
  public heroInfo = {} as Hero;

  // Inyectamos el servicio para obtener las funciones
  constructor(
    private universeService: UniverseService,
    private formB:           FormBuilder

  ){}

  
  ngOnInit(): void {

  }


  public onSave(): void {
    this.isError = false

    if(this.myForm.invalid){
      console.log(this.myForm.controls['name'].errors)
      this.myForm.controls['name'].markAllAsTouched()
      return
    }


    this.isLoading = true;


    this.universeService.getHeroByName(this.myForm.controls['name'].value).pipe(

      delay(2000),

    ).subscribe(
      heroes => {
        if(heroes.data.results.length === 0){

          this.isError = true
          console.log('hay un error', heroes)
          this.isLoading = false
          this.myForm.reset()
          return
        }

        this.isError = false
        this.heroInfo = heroes.data.results[0]
        this.isLoading = false
      }
    )

  }


  public isValidField(): boolean | null{
    return this.myForm.controls['name'].errors && this.myForm.controls['name'].touched
  }





}

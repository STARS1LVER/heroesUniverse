import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UniverseService } from '../../service/universe.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {


  constructor(
    private router: Router,
    private universeService: UniverseService
  ){}

  ngOnInit(): void {

  }






}

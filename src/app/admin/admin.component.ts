import { Component, ViewChild, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { SliderComponent } from '../slider/slider.component';
import { ImdbComponent } from '../imdb/imdb.component';
import  {MovieNameInputComponent} from '../movie-name-input/movie-name-input.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild(MovieNameInputComponent) movieNameInput : MovieNameInputComponent
  @ViewChild(ImdbComponent) imdb : ImdbComponent
  @ViewChild(SliderComponent) slider : SliderComponent

  constructor(private adminService : AdminService) {
    this.movieNameInput = new MovieNameInputComponent();
    this.imdb = new ImdbComponent();
    this.slider = new SliderComponent();
  }
  
  
  ngOnInit(): void {
  }

  submit(){
    this.adminService.submit(this.movieNameInput.movieName, this.imdb.imdb, this.slider.value);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-name-input',
  templateUrl: './movie-name-input.component.html',
  styleUrls: ['./movie-name-input.component.css']
})
export class MovieNameInputComponent implements OnInit {

  @Input() movieName : string = "Movie Name";

  constructor() { }

  ngOnInit(): void {
  }

}

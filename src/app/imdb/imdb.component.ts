import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent implements OnInit {

  @Input() imdb : string = "IMDB Page URL";

  constructor() { }

  ngOnInit(): void {
  }

}

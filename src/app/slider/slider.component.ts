import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() value = 10;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 1;
  step = 1;
  thumbLabel = true;
  vertical = false;

  ngOnInit(): void {
  }


}

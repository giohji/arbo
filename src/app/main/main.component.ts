import { Component, OnInit } from '@angular/core';
import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    parallaxConfig1: ParallaxConfig = {
        initialValue: 0,        
        ratio: 1
    };
    parallaxConfig2: ParallaxConfig = {
        initialValue: -200,        
        ratio: 1
    };
    parallaxConfig3: ParallaxConfig = {
        initialValue: -300,        
        ratio: 1
    };
  constructor() { }

  ngOnInit() {
  }

}

import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  allFruits;
  constructor(fruitservice: FruitsService) {
    this.allFruits = fruitservice.allFruits;
  }

  ngOnInit() {}
}

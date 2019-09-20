import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  allFruits;
  name = 'krantesh';
  email;
  onKeyUp(email) {
    console.log(email);
  }

  // Two way Binding
  onKeyClick() {
    console.log(this.name);
  }

  course = {
    title: 'The complete Fundamentals of Angualr',
    rating: 4.9754,
    students: 301457,
    price: 198.84,
    releaseDate: new Date(2019, 5, 6)
  };

  constructor(fruitservice: FruitsService) {
    this.allFruits = fruitservice.allFruits;
  }

  ngOnInit() {}
}

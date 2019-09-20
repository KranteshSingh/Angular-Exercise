import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  allFruits = [
    'mango',
    'apple',
    'banana',
    'orange',
    'guava',
    'pumpkin',
    'grapes'
  ];

  getAllFruits() {
    return this.allFruits;
  }
  constructor() {}
}

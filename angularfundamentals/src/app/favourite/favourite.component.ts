import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isLike: boolean;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isLike = !this.isLike;
  }
}

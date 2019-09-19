import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  imageUrl =
    'https://i2.wp.com/krantesh.com/wp-content/uploads/2019/06/cropped-Krantesh.png';
  colSpan = 4;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {}
}

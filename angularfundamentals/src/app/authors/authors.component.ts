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

  isActive = true;

  onSave($event) {
    console.log('Button was clicked');
  }

  onKeyUp($event) {
    if ($event.keyCode === 13) console.log('Enter was pressed');
  }

  text =
    'dxfcvgh asdsfg afdsgdf dadfsgd afdsgd afdsgd adfsdg dafsgdh dafsgdadfsgd afdsgd afdsgd adfsdg dafsgdh dafsgddadfsgd afdsgd afdsgd adfsdg dafsgdh dafsgddadfsgd afdsgd afdsgd adfsdg dafsgdh dafsgdd sdfsgd sdf SDAFSD ER  ASFD SADFSGD';
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {}
}

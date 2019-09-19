import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors() {
    return ['Author First', 'Author Second', 'Author Third'];
  }
  constructor() {}
}

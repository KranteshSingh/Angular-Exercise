import { FruitsService } from './fruits.service';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [AppComponent, AuthorsComponent, FruitsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService, FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

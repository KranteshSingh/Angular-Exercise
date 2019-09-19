import { FruitsService } from './fruits.service';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [AppComponent, AuthorsComponent, FruitsComponent],
  imports: [BrowserModule],
  providers: [AuthorsService, FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

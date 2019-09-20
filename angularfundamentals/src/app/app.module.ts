import { SummaryPipe } from './summary.pipe';
import { FruitsService } from './fruits.service';
import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [AppComponent, AuthorsComponent, FruitsComponent, SummaryPipe, FavouriteComponent, TitleCasePipe],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService, FruitsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

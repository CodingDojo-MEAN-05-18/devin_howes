import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScoreFormComponent } from './score-form/score-form.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

import { GithubScoreService } from './github-score.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreFormComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

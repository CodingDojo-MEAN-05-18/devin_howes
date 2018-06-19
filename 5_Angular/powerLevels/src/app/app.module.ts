import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PowerLevelsComponent } from './power-levels/power-levels.component';
import { HumanComponentComponent } from './power-levels/human-component/human-component.component';
import { SaiyanComponentComponent } from './power-levels/saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './power-levels/super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanTwoComponentComponent } from './power-levels/super-saiyan-two-component/super-saiyan-two-component.component';
import { SuperSaiyanThreeComponentComponent } from './power-levels/super-saiyan-three-component/super-saiyan-three-component.component';
import { SuperSaiyanFourComponentComponent } from './power-levels/super-saiyan-four-component/super-saiyan-four-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerLevelsComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SuperSaiyanTwoComponentComponent,
    SuperSaiyanThreeComponentComponent,
    SuperSaiyanFourComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

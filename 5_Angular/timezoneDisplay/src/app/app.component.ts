import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';
  // time sets the default time upon load
  time = new Date();
  // default timezone on load is eastern
  timeZone = 'eastern';

  displayTimeZone(locale) {
    // displayTimeZone gets its local from the click event
    this.time = new Date();
    // reset the time to the new time plus whatever locale
    if (locale === 'pacific') {
      this.time.setHours(this.time.getHours() - 3);
      // we subtract in this example because the default is EST
    } else if (locale === 'mountain') {
      this.time.setHours(this.time.getHours() - 2);
    } else if (locale === 'central') {
      this.time.setHours(this.time.getHours() - 1);
    }
    this.timeZone = locale;
    // set the timezone to the selected locale so the css can be applied
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app dont works!';
  noOfClick = 0;

  keepTrack(isClick: boolean) {
      if(isClick) {
        this.noOfClick++;
      }
      console.log('total click : ' + this.noOfClick)
  }
}

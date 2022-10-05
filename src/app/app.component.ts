import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-Demo';

  constructor(public service:TestServiceService){}

  clickImg(){
    this.service.defaultStarred =!this.service.defaultStarred;
  }
}

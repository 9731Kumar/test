import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  public defaultStarred:boolean=false;

  constructor() { }
}

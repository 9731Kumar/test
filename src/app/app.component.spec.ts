import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestServiceService } from './test-service.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide : TestServiceService, useValue:{ defaultStarred :false}}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Test-Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Test-Demo');
  });


  it(`should star the image`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    //fixture.whenStable().then(() =>{
      
      fixture.detectChanges();
      const ele = fixture.debugElement.query(By.css('.csStariing img.cNoStarr')).nativeElement;
      console.log(ele);
      ele.click();
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.csStariing img.cStarr'))).toBeTruthy();
      
   // })
    
  })
});

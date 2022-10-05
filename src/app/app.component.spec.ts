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

  // it(`should star the image`,() => {
  //   const fixture = TestBed.createComponent(AppComponent);
   
  //   // fixture.componentInstance.defaultStarred=false;
    

  //   // const ele=fixture.debugElement.query(By.css('.cNoStarr'));
  //   //const ele =fixture.debugElement.query(By.css('.csStariing img'))
  //  //const ele = fixture.debugElement.nativeElement.querySelector('img.cNoStar');
  //   //console.log(ele);
  //   //fixture.componentInstance.clickImg();
  //   const ele =fixture.debugElement.queryAll(By.css('.csStariing img'));
  //  //fixture.debugElement.query(By.css('.cNoStarr')).triggerEventHandler('click',{});
  //  fixture.debugElement.nativeElement.querySelector('img.cNoStar').triggerEventHandler('click',{});
  //   // fixture.componentInstance.clickImg();
  //   fixture.detectChanges();
  //   // const ele =fixture.debugElement.query(By.css('.csStariing img')).nativeElement;
  // // fixture.debugElement.query(By.css('img .cNoStar')).triggerEventHandler('click',{});

  //   expect(ele).toContain(fixture.debugElement.query(By.css('.cStar')).nativeElement)
  // })

  // it(`should star the image`,() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //  const ele=fixture.debugElement.queryAll(By.css('.csStariing img'))
  //  console.log(ele);
  // //  ele.forEach((e)=>{
             
  // //  })
  //  fixture.debugElement.query(By.css('.csStariing img.cStarr')).triggerEventHandler('click',{})
  //  fixture.detectChanges();
  //  console.log(ele)
  //  expect(ele).toContain(fixture.debugElement.query(By.css('.csStariing img.cNoStarr')))
  // })

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

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Test-Demo app is running!');
  // });
});

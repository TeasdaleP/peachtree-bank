import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display a title when its inputted', () => {
    component.title = 'title';
    component.ngOnInit();
    fixture.detectChanges();

    let title = fixture.debugElement.query(By.css('.panel-heading'));
    expect(title.nativeElement.textContent.trim()).toEqual('Title')
  });

  it('Should display an icon when its inputted', () => {
    component.icon = 'icon';
    component.ngOnInit();
    fixture.detectChanges();

    let icon = fixture.debugElement.query(By.css('i'));
    expect(icon.nativeElement).toBeDefined();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarLinkComponent } from './title-bar-link.component';

describe('TitleBarLinkComponent', () => {
  let component: TitleBarLinkComponent;
  let fixture: ComponentFixture<TitleBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBarLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

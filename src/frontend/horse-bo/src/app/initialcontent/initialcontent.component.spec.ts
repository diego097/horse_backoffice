import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialcontentComponent } from './initialcontent.component';

describe('InitialcontentComponent', () => {
  let component: InitialcontentComponent;
  let fixture: ComponentFixture<InitialcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

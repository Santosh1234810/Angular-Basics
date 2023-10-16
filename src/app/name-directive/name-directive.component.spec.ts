import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDirectiveComponent } from './name-directive.component';

describe('NameDirectiveComponent', () => {
  let component: NameDirectiveComponent;
  let fixture: ComponentFixture<NameDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

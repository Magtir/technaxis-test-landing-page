import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyShouldComponent } from './why-should.component';

describe('WhyShouldComponent', () => {
  let component: WhyShouldComponent;
  let fixture: ComponentFixture<WhyShouldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyShouldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyShouldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

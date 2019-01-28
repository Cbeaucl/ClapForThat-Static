import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChoicesComponent } from './group-choices.component';

describe('GroupChoicesComponent', () => {
  let component: GroupChoicesComponent;
  let fixture: ComponentFixture<GroupChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

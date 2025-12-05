import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserList } from './user-list';

describe('UserList', () => {
  let component: UserList;
  let fixture: ComponentFixture<UserList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('add new car function', () => {
    expect(component.cars).toBeDefined();
    expect(component.cars.length).toBe(4);
    component.addCar('Toyota');
    expect(component.cars.length).toBe(5);
    expect(component.cars).toContain('Toyota');
    expect(component.cars).not.toContain('Honda');
    expect(component.cars[0]).toBe('BMW');
    expect(component.cars).toEqual(['BMW','Audi','Mercedes','Volvo','Toyota']);
  });
});

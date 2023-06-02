import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandepardateComponent } from './commandepardate.component';

describe('CommandepardateComponent', () => {
  let component: CommandepardateComponent;
  let fixture: ComponentFixture<CommandepardateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandepardateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandepardateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

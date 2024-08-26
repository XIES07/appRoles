import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSuperUserComponent } from './panel-super-user.component';

describe('PanelSuperUserComponent', () => {
  let component: PanelSuperUserComponent;
  let fixture: ComponentFixture<PanelSuperUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSuperUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSuperUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

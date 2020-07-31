import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArmPage } from './arm.page';

describe('ArmPage', () => {
  let component: ArmPage;
  let fixture: ComponentFixture<ArmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

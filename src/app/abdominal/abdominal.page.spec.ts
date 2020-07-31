import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbdominalPage } from './abdominal.page';

describe('AbdominalPage', () => {
  let component: AbdominalPage;
  let fixture: ComponentFixture<AbdominalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdominalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbdominalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbdominalDetailPage } from './abdominal-detail.page';

describe('AbdominalDetailPage', () => {
  let component: AbdominalDetailPage;
  let fixture: ComponentFixture<AbdominalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdominalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbdominalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

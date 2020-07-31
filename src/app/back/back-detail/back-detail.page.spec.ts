import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackDetailPage } from './back-detail.page';

describe('BackDetailPage', () => {
  let component: BackDetailPage;
  let fixture: ComponentFixture<BackDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegDetailPage } from './leg-detail.page';

describe('LegDetailPage', () => {
  let component: LegDetailPage;
  let fixture: ComponentFixture<LegDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

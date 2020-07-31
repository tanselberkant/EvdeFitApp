import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChestPage } from './chest.page';

describe('ChestPage', () => {
  let component: ChestPage;
  let fixture: ComponentFixture<ChestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

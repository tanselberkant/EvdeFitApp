import { Component, OnInit } from '@angular/core';
import { legExercises } from './leg_model';
import { LegService } from './leg.service';

@Component({
  selector: 'app-leg',
  templateUrl: './leg.page.html',
  styleUrls: ['./leg.page.scss'],
})
export class LegPage implements OnInit {

  legExercise : legExercises [];


  constructor(private legService : LegService) { }

  ngOnInit() {
    this.legExercise = this.legService.getAllLegExercises();
  }

}



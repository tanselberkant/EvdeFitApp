import { Component, OnInit } from '@angular/core';
import { Shoulders } from './shoulder_model';
import { ShoulderService } from './shoulder.service';

@Component({
  selector: 'app-shoulder',
  templateUrl: './shoulder.page.html',
  styleUrls: ['./shoulder.page.scss'],
})
export class ShoulderPage implements OnInit {

  shoulder: Shoulders[];

  constructor(private shoulderExercise : ShoulderService) { }

  ngOnInit() {
    this.shoulder = this.shoulderExercise.getAllShoulderExercise();
  }

}

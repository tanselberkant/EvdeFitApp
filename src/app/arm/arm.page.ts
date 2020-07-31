import { Component, OnInit } from '@angular/core';
import {ArmExercise} from './arm_model';
import { ArmExerciseService } from './arm-exercise.service';

@Component({
  selector: 'app-arm',
  templateUrl: './arm.page.html',
  styleUrls: ['./arm.page.scss'],
})
export class ArmPage implements OnInit {

  armExercises:ArmExercise[];
  
  constructor(private armExerciseService:ArmExerciseService) { }

  ngOnInit() {
    this.armExercises = this.armExerciseService.getAllArmExercise();
  }

}

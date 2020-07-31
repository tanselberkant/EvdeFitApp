import { Component, OnInit } from '@angular/core';
import { ArmExercise } from '../arm_model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmExerciseService } from '../arm-exercise.service';

@Component({
  selector: 'app-arm-detail',
  templateUrl: './arm-detail.page.html',
  styleUrls: ['./arm-detail.page.scss'],
})
export class ArmDetailPage implements OnInit {

  loadedArmExercise : ArmExercise;


  constructor(
    private activatedRoute : ActivatedRoute,
    private armExerciseService: ArmExerciseService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('armId')) {


        //redirect 
        return;
      }
      const exerciseId = paramMap.get('armId');
      this.loadedArmExercise = this.armExerciseService.getArmExercise(exerciseId);
    });
  }

}

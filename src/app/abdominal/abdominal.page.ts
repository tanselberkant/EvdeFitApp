import { Component, OnInit } from '@angular/core';
import { AbdominalService } from './abdominal.service';
import { Abdominals } from './abdominal_model';

@Component({
  selector: 'app-abdominal',
  templateUrl: './abdominal.page.html',
  styleUrls: ['./abdominal.page.scss'],
})
export class AbdominalPage implements OnInit {

  absExercise : Abdominals [];

  constructor(private absService : AbdominalService) { }

  ngOnInit() {
    this.absExercise = this.absService.getAllAbsExercises();
  }

}



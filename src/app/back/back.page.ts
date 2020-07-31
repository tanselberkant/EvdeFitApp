import { Component, OnInit } from '@angular/core';
import { backExercises } from './back_model';
import { BackService } from './back.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {

  backExercise : backExercises[];

  constructor(private backService : BackService) { }

  ngOnInit() {
    this.backExercise = this.backService.getAllBackExercise();
  }
}

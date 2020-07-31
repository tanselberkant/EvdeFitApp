import { Component, OnInit } from '@angular/core';
import { chestExercises } from './chest_model';
import { ChestServiceService } from './chest-service.service';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.page.html',
  styleUrls: ['./chest.page.scss'],
})
export class ChestPage implements OnInit {

  chestExercise : chestExercises[];

  constructor(private chestService:ChestServiceService) { }

  ngOnInit() {
    this.chestExercise = this.chestService.getAllChestExercises();
  }

}

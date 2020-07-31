import { Component, OnInit } from '@angular/core';
import { chestExercises } from '../chest_model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChestServiceService } from '../chest-service.service';

@Component({
  selector: 'app-chest-detail',
  templateUrl: './chest-detail.page.html',
  styleUrls: ['./chest-detail.page.scss'],
})
export class ChestDetailPage implements OnInit {

  loadedChest : chestExercises;
  
  constructor(
    private activadedRoute:ActivatedRoute,
    private router:Router,
    private chestService:ChestServiceService
  ) { }

  ngOnInit() {
    this.activadedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('chestId')){

        //redirect
        return;
      }
      const chestId = paramMap.get('chestId');
      this.loadedChest = this.chestService.getChestId(chestId);
    });
  }
}

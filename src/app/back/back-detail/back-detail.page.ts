import { Component, OnInit } from '@angular/core';
import { backExercises } from '../back_model';
import { ActivatedRoute, Router } from '@angular/router';
import { BackService } from '../back.service';

@Component({
  selector: 'app-back-detail',
  templateUrl: './back-detail.page.html',
  styleUrls: ['./back-detail.page.scss'],
})
export class BackDetailPage implements OnInit {

  loadedBack : backExercises;

  constructor(
    private activadedRoute : ActivatedRoute,
    private router:Router,
    private backService:BackService
  ) { }

  ngOnInit() {

    this.activadedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('backId')) {

        //redirect
        return;
      }

      const backId = paramMap.get('backId');
      this.loadedBack = this.backService.getBackId(backId);
    })

  }
}



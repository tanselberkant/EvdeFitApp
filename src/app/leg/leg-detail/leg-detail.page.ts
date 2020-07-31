import { Component, OnInit } from '@angular/core';
import { legExercises } from '../leg_model';
import { ActivatedRoute, Router } from '@angular/router';
import { LegService } from '../leg.service';

@Component({
  selector: 'app-leg-detail',
  templateUrl: './leg-detail.page.html',
  styleUrls: ['./leg-detail.page.scss'],
})
export class LegDetailPage implements OnInit {

  loadedLeg : legExercises ;

  constructor(
    private activadedRoute : ActivatedRoute,
    private router : Router,
    private legService : LegService
  ) { }

  ngOnInit() {

    this.activadedRoute.paramMap.subscribe(paramMap => {

      if(!paramMap.has('legId')) {

        //redirect
        return;
      }
      const legId = paramMap.get('legId');
      this.loadedLeg = this.legService.getLegId(legId);
    
    })
  }

}

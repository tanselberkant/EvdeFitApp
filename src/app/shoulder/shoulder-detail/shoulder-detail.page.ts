import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoulderService } from '../shoulder.service';
import { Shoulders } from '../shoulder_model';

@Component({
  selector: 'app-shoulder-detail',
  templateUrl: './shoulder-detail.page.html',
  styleUrls: ['./shoulder-detail.page.scss'],
})
export class ShoulderDetailPage implements OnInit {

  loadedShoulder : Shoulders;


  constructor(
    private activadedRoute:ActivatedRoute,
    private router:Router,
    private shoulderService:ShoulderService
  ) { }

  ngOnInit() {
    this.activadedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('shoulderId')) {

        //redirect
        
        return;
      }
      
      const shoulderId = paramMap.get('shoulderId');            
      this.loadedShoulder = this.shoulderService.getShoulderId(shoulderId);      
    });
  }

}

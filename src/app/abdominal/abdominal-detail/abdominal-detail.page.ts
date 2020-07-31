import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbdominalService } from '../abdominal.service';
import { Abdominals } from '../abdominal_model';

@Component({
  selector: 'app-abdominal-detail',
  templateUrl: './abdominal-detail.page.html',
  styleUrls: ['./abdominal-detail.page.scss'],
})
export class AbdominalDetailPage implements OnInit {

  loadedAbs : Abdominals;


  constructor(
    private activadedRoute : ActivatedRoute,
    private router : Router,
    private absService : AbdominalService
  ) { }

  ngOnInit() {

    this.activadedRoute.paramMap.subscribe(paramMap => {

      if(!paramMap.has('absId')) {

        //redirect
        return;
      }

      const absId = paramMap.get('absId');
      this.loadedAbs = this.absService.getAbsId(absId);
    })
  }

}

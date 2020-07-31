import { Injectable } from '@angular/core';
import { legExercises } from './leg_model';

@Injectable({
  providedIn: 'root'
})
export class LegService {

  private legExercise : legExercises [] = [
    {
      id:'l1',
      baslik : 'Squad',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'asdadas',
      imgurl : 'assets/images/squat.jpg'
    },
    {
      id : 'l2',
      baslik : 'Alternating Lunges',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'asdsadas',
      imgurl : 'assets/images/lunges.jpg'
    },
    {
      id : 'l3',
      baslik : 'Calf Raise',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'aksadas',
      imgurl : 'assets/images/calfRaise.jpg'
    },
    {
      id : 'l4',
      baslik : 'Goblet Squat',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'sadsadasde',
      imgurl : 'assets/images/gobletSquat.jpg'

    },
    {
      id : 'l5',
      baslik : 'One Leg Deadlift',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'asdasdasda',
      imgurl : 'assets/images/oneLegDeadLift.jpg'

    }
  ]

  getAllLegExercises() {
    return[...this.legExercise];
  }

  getLegId(legId : string) {    
    return {...this.legExercise.find(legExercise => {
      return legExercise.id == legId;
    })};
  }

  constructor() { }
}


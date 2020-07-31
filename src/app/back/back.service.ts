import { Injectable } from '@angular/core';
import { backExercises } from './back_model';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private backExercise :backExercises [] = [
    {
      id : 'b1',
      baslik : 'Bent Over Row',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'sada',
      imgUrl : 'assets/images/bentOverRow.jpg'
    },
    {
      id : 'b2',
      baslik : 'Dead Lift',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'sada',
      imgUrl : 'assets/images/deadLift.jpg'
    },
    {
      id : 'b3',
      baslik : 'One Arm Row',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'sada',
      imgUrl : 'assets/images/oneArmRow.jpg'
    },
    {
      id : 'b4',
      baslik : 'Superman',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'sada',
      imgUrl : 'assets/images/superman.jpg'
    }
  ]
  constructor() { }

  getAllBackExercise() {
    return [...this.backExercise];
  }

  getBackId( backId : string) {
    return {...this.backExercise.find(backExercise => {
      return backExercise.id == backId;
    })};
  }

}

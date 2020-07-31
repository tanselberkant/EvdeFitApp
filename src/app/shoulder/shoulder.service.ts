import { Injectable } from '@angular/core';
import { Shoulders } from './shoulder_model';



@Injectable({
  providedIn: 'root'
})
export class ShoulderService {

  private shoulder : Shoulders[] = [
    {
      id : 's1',
      baslik: 'Shoulder Dumbell Press',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      imgUrl : 'assets/images/dumbellPress.jpg',
      mainfocus : 'Ön Omuz'
    },
    {
      id: 's2',
      baslik : 'Dumbell Lateral Raise',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      imgUrl : 'assets/images/lateralRaise.jpg',
      mainfocus : 'Yan Omuz'
    },
    {
      id : 's3',
      baslik : 'Dumbell Front Raise',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      imgUrl : 'assets/images/frontRaise.jpg',
      mainfocus : 'Ön Omuz'
    },
    {
      id : 's4',
      baslik : 'Arnold Press',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      imgUrl : 'assets/images/arnoldPress.jpg',
      mainfocus : 'Ön Omuz'
    }
  ]

  constructor() { }

  getAllShoulderExercise() {
    return [...this.shoulder];
  }
  
  getShoulderId(shoulderId : string) {
    return {...this.shoulder.find(shoulder => {
      return shoulder.id == shoulderId;
    })}
  }
}


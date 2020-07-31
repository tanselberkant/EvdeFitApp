import { Injectable } from '@angular/core';
import { chestExercises } from './chest_model';


@Injectable({
  providedIn: 'root'
})
export class ChestServiceService {

  private chestExercise : chestExercises[] = [
    {
      id:'c1',
      baslik : 'Push Up',
      explaniton : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'Alt Göğüs',
      imgUrl : "assets/images/pushUp.jpg"
    },
    {
      id:'c2',
      baslik : 'Decline Push Up',
      explaniton : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'Üs Göğüs',
      imgUrl : 'assets/images/declinePushUp.jpg'
    },
    {
      id:'c3',
      baslik : 'Diamond Push Up',
      explaniton : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'Orta Göğüs',
      imgUrl : 'assets/images/diamondPushUp.jpg'
    },
    {
      id:'c4',
      baslik : 'Chair Dips',
      explaniton : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      mainfocus : 'Orta Göğüs',
      imgUrl : 'assets/images/chairDips.jpg'
    }
  ]
  constructor() { }

  getAllChestExercises() {
    return [...this.chestExercise];
  }

  getChestId( chestId : string ) {
    return {...this.chestExercise.find(chestExercise =>{
      return chestExercise.id == chestId;
    })};
  }

}

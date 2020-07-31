import { Injectable } from '@angular/core';
import { ArmExercise } from './arm_model';


@Injectable({
  providedIn: 'root'
})
export class ArmExerciseService {

  private armExercise : ArmExercise[] = [
    {
      id:"a1",
      baslik:"Biceps Curl",
      explanation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
      mainfocus: "Ön Kol",
      imgUrl : 'assets/images/bicepsCurl.jpg',
    },
    {
      id:"a2",
      baslik:"Hammer Curl",
      explanation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
      mainfocus : "Ön kol",
      imgUrl : 'assets/images/hammerCurl.jpg',
    },
    {
      id : "a3",
      baslik : "Concentration Curl",
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
      mainfocus : "Ön Kol",
      imgUrl : 'assets/images/concentrationCurl.jpg',
    },
    {
      id : "a4",
      baslik : "Single Arm Triceps Extension",
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
      mainfocus : "Arka Kol",
      imgUrl: 'assets/images/overheadTricepsExtension.jpg'
    },
    {
      id : "a5",
      baslik : "Dumbel Skull Crusher",
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea",
      mainfocus : "Arka Kol",
      imgUrl: 'assets/images/skullCrusher.jpg'
    }
  ]



  constructor() { }

  getAllArmExercise () {
    return [...this.armExercise];
  }

  getArmExercise( armId:string ) {
    return {...this.armExercise.find(armExercise =>{
      return armExercise.id == armId;
    })};
  }






}

import { Injectable } from '@angular/core';
import { Abdominals } from './abdominal_model';

@Injectable({
  providedIn: 'root'
})
export class AbdominalService {

  private abdominal : Abdominals [] = [
    {
      id : 'ab1',
      baslik : 'Crunches',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'asdasda',
      imgUrl : 'assets/images/crunches.jpg'
    }, 
    {
      id : 'ab2',
      baslik : 'Bicycle Crunch',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'asdadsadsad',
      imgUrl : 'assets/images/bicycleCrunch.jpg'
    },
    {
      id : 'ab3',
      baslik : 'Leg Lifts',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'sdsadasd',
      imgUrl : 'assets/images/legLifts.jpg'
    }, 
    {
      id : 'ab4',
      baslik : 'Mountain Climber',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'kasdsak',
      imgUrl : 'assets/images/mountainClimber.jpg'
    },
    {
      id : 'ab5',
      baslik : 'Russian Twist',
      explanation : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      mainfocus : 'ksksdadsa',
      imgUrl :'assets/images/russianTwist.jpg'
    }
  ]


  getAllAbsExercises() {
    return [...this.abdominal];
  }


  getAbsId( absId : string ) {
    return {...this.abdominal.find(abdominal => {
      return abdominal.id == absId;
    })}
  }

  constructor() { }
}



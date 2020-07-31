import { Injectable } from '@angular/core';
import { backExercises } from './back_model';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private backExercise :backExercises [] = [
    {
      id : 'b1',
      baslik : 'Dumbbell Bent Over Row',
      explanation : "Her iki elinizde kısa  bar  tutma yeri olan bir dambıl alarak ayakta durun.Vücudun belden yukarısı zemine kabaca paralel (veya hafifçe yukarı eğik ) olana kadar gövdeyi  öne doğru eğilin.Daha sonra omuz başlarını geri çekerken dirsekleri vücudun arkasına sürerek harekete başlayın.Dambılleri vücudunuza doğru çekin, dirsekler orta vücut yanına gelene kadar (veya vücudu geçene  kadar).Daha sonra yavaşça dambıllerı kontrollü olarak ve sırt kaslarını gevşeterek başlangıç ​​konumuna getirin, kolları düzeltin.",
      mainfocus : 'Kanat Kaslarınız',
      imgUrl : 'assets/images/bentOverRow.jpg'
    },
    {
      id : 'b2',
      baslik : 'Dead Lift',
      explanation : "Bir çift dambıl alarak, önünüzde avuç içleri vücudunuza bakacak şekilde üstten tutun.Kalçadan destek alarak ileriye doğru eğilin, dizleri hafifçe kırın ve sırtınızı kamburlaştırmadan dambılları yere indirin. Merkez bölgesini sıkın ve başlangıç pozisyonuna geri kalkın.",
      mainfocus : 'Bel - Ön Bacak - Kalça Kaslarınız',
      imgUrl : 'assets/images/deadLift.jpg'
    },
    {
      id : 'b3',
      baslik : 'One Arm Row',
      explanation : "Vücut öne eğilmiş ve yere paralel pozisyonda , bench’in kenarından bir elle tutunulur.Yerde bulunan dumbbell , diğer el ile sıkıca kavranarak , nefes vermek suretiyle göğüse doğru çekilir.Sonra nefes alarak tekrar başlangıç pozisyonuna dönülür. Bu arada dizler de hafifçe kırık durumdadır.Hareket bütün sırt kaslarını kasarak, kontrollü ve yavaş uygulanmalıdır.",
      mainfocus : 'Kanat ve Sırt Kaslarınız',
      imgUrl : 'assets/images/oneArmRow.jpg'
    },
    {
      id : 'b4',
      baslik : 'Superman',
      explanation : "Harekete başlarken yere yüz üstü uzanın. Ayaklar geride, kollar önde ve vücudun ilerisinde olacak şekilde vücudunuzu, kollarınızı ve bacaklarınızı gergin bir halde pozisyonunuzu alın. Karın bölgeniz yerden ayrılmayacak bir şekilde derin bir nefes alın ve kollarınızı ve bacaklarınızı aynı anda yukarı doğru kaldırın. Bu pozisyonda 2-3 saniye bekledikten sonra başlangıç pozisyonuna geri dönün. Hareketi tekrarlayın.",
      mainfocus : 'Bel Kaslarınız',
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

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
      explanation : "Vücudunuz dik ve ayaklarınız omuz genişliği kadar açık olsun.Bu konumda nefes alın ve vücut öne eğilmeden, bacaklarınız ile yer arasında 90 derecelik bir açı oluşturuna kadar çömelin.Nefes verin ve dik dik konumuza dönün.Egzersiz sırasında omurganın zarar görmemesi için vücut dikliğini korumaya dikkat edilmesi, bacak ve kalça kaslarının da egzersiz devam ederken gevşetilmeden çalışılması gerek.",
      mainfocus : 'Ön-Arka Bacak ve Kalça Kaslarınız',
      imgurl : 'assets/images/squat.jpg'
    },
    {
      id : 'l2',
      baslik : 'Alternating Lunges',
      explanation : "Bir bacakla arkanıza doğru büyük bir lunge adımı atın; giryalar göğüs yüksekliğinde kalsın. Arkadaki dizle yere değin, ardından öndeki ayağın topuğuna yüklenerek hareketi tersine uygulayın ve doğrulun. Diğer bacakla tekrar edin. Her tekrarda bacak değiştirin",
      mainfocus : 'Ön Bacak ve Kalça Kaslarınız',
      imgurl : 'assets/images/lunges.jpg'
    },
    {
      id : 'l3',
      baslik : 'Calf Raise',
      explanation : "Yukarı doğru parmak ucunda yükselirken nefes verilir topuklar en alt noktaya kadar indirilirken nefes alınır.",
      mainfocus : 'Calf Kaslarınız',
      imgurl : 'assets/images/calfRaise.jpg'
    },
    {
      id : 'l4',
      baslik : 'Goblet Squat',
      explanation : "Ayaklarınızı standart gelişim için omuz mesafeniz kadar açın.Uygun ağırlıktaki dumbbellı tepe kısmından sağlam bir şekilde kavrayın ve çene hizanıza kadar kaldırın.Nefes alın ve ardından çömelmeye başlayın. Üst bacaklarınız yani dirsek ve kalça arası yere paralel olana kadar çömelin. Bu mesafeden aşağı inmenize gerek yok.  Çömelme anını yavaş yapın ki arka bacak kaslarınızda çalışsın. Hızlı yaparsanız emin olun goblet squat hareketinin yarısı boşa gitmiş olacak. Çömelme anı için ideal süre 2 saniyedir.",
      mainfocus : 'Ön Bacak ve Kalça Kaslarınız',
      imgurl : 'assets/images/gobletSquat.jpg'

    },
    {
      id : 'l5',
      baslik : 'One Leg Deadlift',
      explanation : "Bir bacağınızı ekrandaki kadar geri alın. Sırtınızı oklava yutmaz gibi düz ve bütün vücudunuzu (kalça, arka bacak, karın, sırt, omuz, kol vs.) gergin ve sıkı tutun. Kollar halat görevi görsün ne öne ne geriye salınmasın. sadece düz formda vücuda yakın bir şekilde insin ve çıksın. Başınızda sırtınıza eşlik etsin ve ekstra yukarı veya aşağı inmesin omurilikle birlikte düz hareket etsin.",
      mainfocus : 'Ön ve Arka Bacak Kaslarınız',
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


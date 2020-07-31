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
      explanation : "Ağırlıkları kafa ile boyun arasında bir hizada tutun. Bu başlangıç pozisyonunuz olacak.Nefes alın ve ardında nefes vererek dumbbellar’ı kuvvetlice yukarı doğru itin. Dumbbellar’ın birbirine değmesine bir kaç cm kadar mesafe kalmalı.Tepe noktaya ulaştıktan sonra nefes alarak, kaldırış hızınıza oranlar daha yavaş bir hızla başlangıç pozisyonunuza doğru indirin. Bir saniye kadar bekleyip tekrar kaldırın.",      
      imgUrl : 'assets/images/dumbellPress.jpg',
      mainfocus : 'Ön Omuz'
    },
    {
      id: 's2',
      baslik : 'Dumbell Lateral Raise',
      explanation : "Ayaklarınızı omuz genişliğiniz kadar açın.Şimdi nefes alın ve ardından nefes vererek  1,5 saniye aralığında kollarınızı omuz seviyenize kadar kaldırmaya başlayın. Dumbbell’lar yere paralel olarak hareket etmeli. Öne ya da arkaya herhangi bir eğim vermeyin.Omuz hizasına yani tepe noktaya geldiğinizde 0,5 – 1 saniye kadar bekleyin ve ardından nefes alarak 2 saniye aralığında kolları aşağı indirmeye başlayın. İndirme ne kadar yavaş olursa ağırlığa karşı direnç o kadar fazla olur ve indirme anında da kas gelişimi devam eder.Dip noktaya geldiğinizde bekleme yapmadan nefes vererek tekrar kaldırmaya başlayın.",
      imgUrl : 'assets/images/lateralRaise.jpg',
      mainfocus : 'Yan Omuz'
    },
    {
      id : 's3',
      baslik : 'Dumbell Front Raise',
      explanation : "Avuç içleriniz vücuda bakar şekilde kavrama yapın. Ayaklarınız rahat bir kaldırış için omuz genişliğiniz kadar açık olsun.Nefes alın ve ardından nefes vererek, sadece omuz ekleminizi kullanarak, başlangıç için omuz hizanıza kadar 1 – 1,5 saniye aralığında kaldırmaya başlayın.Tepe noktaya yani omuz hizanıza kadar ulaştıktan sonra  0,5 – 1 saniye kadar bekleyin ve ardından nefes alarak  1,5 – 2 saniye aralığında dumbbell’ı kolunuz yere dik olmasına yaklaşık 20 santim kalana kadar indirmeye başlayın.",
      imgUrl : 'assets/images/frontRaise.jpg',
      mainfocus : 'Ön Omuz'
    },
    {
      id : 's4',
      baslik : 'Arnold Press',
      explanation : "Sehpaya oturun ve dirseklerinizi bükerek avuç içi yüzünüze bakıcak şekilde ağırlıkları kavrayın.Kalkış pozisyonunda avuçlarınızı yüzünüzün baktığı yöne doğru tam anlamıyla ters çevirin.Tekrar omuz pozisyonunda yavaşça indirin.Nefes vererek kaldırış pozisyonuna geçin Nefes alarak indirin.İndirirken avuç içleriniz yüzünüze bakıcak şekilde olmalı !!",
      imgUrl : 'assets/images/arnoldPress.jpg',
      mainfocus : 'Ön - Yan - Arka Omuz Kasları'
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


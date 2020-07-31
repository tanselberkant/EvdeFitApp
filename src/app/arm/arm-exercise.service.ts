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
      explanation: "Avuç içleriniz birbirine bakıcak şekilde dumbbelleri tutarak ayakta durun.Üst kolunuz hareket etmeyecek şekilde dumbbelleri curlleyin. Curllerken, hareketin tepe noktasında eliniz yukarıyı gösterecek şekilde bileğinizi dışarı doğru döndürün. Dumbbelleri geri indirmeden önce hareketin tepe noktasında 1 saniye durun ve bicepslerinizi kasın.",
      mainfocus: "Ön Kol",
      imgUrl : 'assets/images/bicepsCurl.jpg',
    },
    {
      id:"a2",
      baslik:"Hammer Curl",
      explanation: "Bir çift dumbbell’i avuç içleriniz birbirine bakıcak şekilde tutun. Ayaklarınızı omuz genişliğinde tutun ve dik durun.Bicepsinizi sıkarak dumbelleri omuz hizasına gelene kadar kaldırın. En tepede 1 saniye durun ve bicepslerinizi sıkın. Sonra dumbbelleri yavaşça geri başlangıç pozisyonuna indirin.",
      mainfocus : "Ön kol",
      imgUrl : 'assets/images/hammerCurl.jpg',
    },
    {
      id : "a3",
      baslik : "Concentration Curl",
      explanation : "Bir bench’in kenarına oturun ve bacaklarınızı açın. Öne doğru biraz eğilin. Çalıştıracağınız kolunuzun dirseğini, aynı tarafa olan bacağınızın iç kısmına dayayın.Kolunuzu yere dik olacak şekilde sarkıtın. Bu başlangıç pozisyonunuz olacak. (Bknz resim A) Nefes alın ve ardından nefes vererek dumbbell’i sadece biceps kasınızı kullanarak 1 – 1,5 saniye aralığında yukarı kaldırın.Son noktaya (kol artık kapanamayacak kadar) ulaştığınız da  1 saniye kadar bekleyin ve nefes alarak, 1,5 – 2 saniye aralığında dumbbell’ı indirin. Bunu yapmanın amacı ise hareketin negatifi ile daha çok yırtılma sağlamaktır.Dip noktaya vardığınızda bekleme yapmadan nefes vererek tekrar kaldırmaya başlayın.",
      mainfocus : "Ön Kol",
      imgUrl : 'assets/images/concentrationCurl.jpg',
    },
    {
      id : "a4",
      baslik : "Single Arm Triceps Extension",
      explanation : "Bir elinize kaldırabileceğiniz uygun ağırlıkta bir dumbbell alarak bench’e sırtınız dik olarak oturun. Dengeyi sağlamak için ayaklarınızı açabilirsiniz.Çalıştıracağınız kolunuzu yere dik ve dumbbell’i en yukarıda olabilecek şekilde gergin olarak yukarı uzatın. Bu başlangıç pozisyonunuz olacak.Nefes alarak, kolunuzu dirsekten kırarak dumbbell’i ensenize doğru orta – yavaş hızda indirin.Dip noktaya geldiğinizde bekleme yapmadan nefes vererek dumbbell’ı yukarı doğru orta hızda kaldırmaya başlayın.İniş ve kalkışlarda mümkün olduğu kadar üst kolunuzu sabit tutmaya çalışın. Sadece ön kolunuz hareket etsin.",
      mainfocus : "Arka Kol",
      imgUrl: 'assets/images/overheadTricepsExtension.jpg'
    },
    {
      id : "a5",
      baslik : "Dumbel Skull Crusher",
      explanation : "Her elinizde dumbbell tutarak sırt üstü bir bench’e yatın. Dumbbelleri göğüsünüzün üzerinde avuç içleriniz birbirine bakıcak şekilde tutun.Dumbbelleri üst kolunuz sabit durucak şekilde kafanızın yanına doğru indirin. En altta 1 saniye durduktan sonra dumbbelleri başlangıç pozisyonuna doğru pressleyin.",
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

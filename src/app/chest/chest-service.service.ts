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
      explaniton : "Yüzüstü yere yatın. Ayaklarınızı uzatarak parmak uçlarınızı yere sabitleyin ve ellerinizi de göğüsün hemen yanında yere sabitleyin. Tüm vücudunuzu yerden kaldırın. Vücudunuz topuktan başa kadar gergin ve tek bir çizgi üzerinde olmalı. Beliniz de kesinlikle hiper lordoz(içe doğru çukur gibi düşünebilirsiniz) olmamalı. Dirsekler 90 derecelik bir açıya ulaşıncaya kadar gövdeyi yere indirin. Daha fazla direnç için dirseklerinizi vücudunuza yakın tutun. Başını aşağıya doğru bırakma ve yere bakmaya özen göster. Vücudunuzu düz çizgi üzerin de tutun, kalçanızı düşürmeyin ve poponuzun havada asılı kalmasına izin vermeyin. Vücudunuzu mümkün olduğunca düz tutmak önemlidir. Kendini indirirken nefes almayı unutma.",
      mainfocus : 'Göğüs ve Arka Kol Kaslarınız',
      imgUrl : "assets/images/pushUp.jpg"
    },
    {
      id:'c2',
      baslik : 'Decline Push Up',
      explaniton : "Harekete ayak ucunu yüksekçe bir sehpa üzerine koyarak başlıyoruz.Eller omuz genişliğinde avuç içleri yere bakacak şekilde koyulur.Nefes alarak ve dirsekleri kırarak yere doğru göğüs hizasında inilir ve nefes vererek hızlı bir şekilde yukarı doğru kalkılır.",
      mainfocus : 'Üst Göğüs ve Arka Kol Kaslarınız',
      imgUrl : 'assets/images/declinePushUp.jpg'
    },
    {
      id:'c3',
      baslik : 'Diamond Push Up',
      explaniton : "Şınav pozisyonunda eller baş ve işaret parmaklarından bitişik olmak üzere yere temas ettirilir.Elleriniz birleşik iken göğüsünüz ile yer arasında 5 santimetre kalana kadar vücut duruşunuzu bozmadan yere yaklaşın.Yere yeteri kadar yakınlaştıktan sonra göğüs ve arka kol kaslarınızı kullanarak başlangıç pozisyonuna dönün.",
      mainfocus : 'Orta Göğüs ve Arka Kol Kaslarınız',
      imgUrl : 'assets/images/diamondPushUp.jpg'
    },
    {
      id:'c4',
      baslik : 'Chair Dips',
      explaniton : "Elleriniz arkada olacak şekilde sehpaya sırtınızı verin.Ayaklarınızı önde tutun ve vücudunuzun ağırlığı kollarınız tarafından desteklenecek şekilde, Ellerinizle sehpadan destek alarak vücudunuzu aşağı doğru indirin.Dirseklerinizi bükerken nefes verin ve omuzlarınızda hafif bir gerginlik hissedene veya dirsekleriniz 90 derecelik bir açı elde edene kadar vücudunuzu indirin.Hareketi biraz daha zorlaştırmak için ayaklarınızı karşınızda bulunan aynı boyda sehpaya uzatarak ve üzerinize ağırlık koyarak uygulayabilirsiniz.",
      mainfocus : "Arka Kol ve Alt Göğüs Kaslarınız",
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

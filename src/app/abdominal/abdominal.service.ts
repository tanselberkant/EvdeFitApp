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
      explanation : "Sırt üstü yatıp ayakları yüksek bir yere dayıyoruz veya dizleri kırıyoruz.Eller enseden tutuşla yukarı doğru kalkmadan karın kaslarını sıkarak yani sadece karın kaslarını kasarak hafifçe kalkın.Sonra karın kaslarını kasarak kontrollü olarak  ve yavaşça nefes alarak başlangıç noktasına dönüyoruz.",
      mainfocus : 'Üst Karın Kaslarınız',
      imgUrl : 'assets/images/crunches.jpg'
    }, 
    {
      id : 'ab2',
      baslik : 'Bicycle Crunch',
      explanation : "Sırt üstü yere yatar pozisyonda harekete başlanır.Eller başın arkasında tutulur. Ancak başa herhangi bir itme kuvveti uygulanmaz.Diz ve kalça eklemi 90 derecelik açıda, karın kaslarını kasarak gövdenin hafifçe yukarıda durması sağlanır.Tek bacak 45 derece ileriye uzatılırken, gövde sabit duran dize doğru döndürülür.Bacaklar konum değiştirirken gövde diğer tarafa döndürülür.Gövdenin dönüş hareketi sırasında dirseğinizi değil, omzunuzu çapraz taraftaki dizinize doğru yaklaştırmaya çalışın.",
      mainfocus : 'Orta ve Alt Karın Kaslarınız',
      imgUrl : 'assets/images/bicycleCrunch.jpg'
    },
    {
      id : 'ab3',
      baslik : 'Leg Lifts',
      explanation : "Eller gövdenin yanında yerle temas ediyor baş yerle temas ediyor.Kalça hareket boyunca yerle temas ediyor.Bacaklar düz bir şekilde gövdeyle 90 derece açı yapacak kadar yükseltilir.Kontrollü bir şekilde bacak dümdüz tekrar başlangıç pozisyonuna dönülür.Sırtın yerden kalkmasına engel olunmalıdır bunun için ellerinizle bir yere tutunabilirsiniz.",
      mainfocus : 'Alt Karın Kasları',
      imgUrl : 'assets/images/legLifts.jpg'
    }, 
    {
      id : 'ab4',
      baslik : 'Mountain Climber',
      explanation : "Şınav ya da klasik plank pozisyonunda harekete başlanır. Eğer karın kısmını izole çalıştırmak istiyorsanız plank, gelişime omuz, arka kol ve ön kol da dahil olsun istiyorsanız şınav pozisyonunu tercih edin.Pozisyonunuzu belirledikten sonra bir ayağınızı yukarı yani yan karına doğru çekmeye başlayın. Bunu yaparken yan karın kaslarınıza iyice konsantre olun. Onları sıkıştırın.Ayağınız maksimum ölçüde yukarıya kadar geldikten ve yan karnınızı sıkıştırdıktan sonra geriye doğru itin ve diğer ayağınızı çekmeye başlayın. Aynı işlemleri ona da uygulayın.Nefes kontrolü ise; çekiş anında nefes vermek, itiş anında nefes almak tekrar sayınızı arttıracaktır.",
      mainfocus : 'Oblik - Alt Karın Kasları',
      imgUrl : 'assets/images/mountainClimber.jpg'
    },
    {
      id : 'ab5',
      baslik : 'Russian Twist',
      explanation : "Yere oturun, dizlerinizi kırarak ayaklarınızı yukarı doğru kaldırın. Sırt düz olacak şeklide ayaklarınız ile de V şeklinde olacak şekilde pozisyonunuzu alın. Eller ileriye doğru uzatılıp birleştirilir. Belinizi kıvırıp önce sağa doğru sonra ise sola doğru dönün. Ayaklarınız yere değmediği için hareketi yaparken alt karın kaslarınızın yandığını hissedeceksiniz.İlk defa hareketi yapacaksanız ayaklarınızı kaldırıp dengede durmakta zorlanırsanız harekete alışana kadar başlarda ayaklarını kırık bir şekilde yere koyarak uygulayabilirsiniz.",
      mainfocus : 'Oblik - Alt Karın Kasları',
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



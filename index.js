const { DateTime } = require("luxon");

//Luxon'daki en önemli sınıf DateTime. DateTime, bir saat dilimi ve bir yerel ayar ile birlikte belirli bir milisaniyeyi temsil eder. İşte 15 Mayıs 2017 sabah 8:30'u temsil eden bir tane:
// console.log("TimeStamp (in milliseconds) : " ,DateTime.now().ts);
//
//Bugün ki tarihi her detayıyla obje olarak döner.
// console.log("parts: " ,DateTime.now().c);
//
//Bu bir luxon DateTime'mı mı değil mi bunu true false döner boolean bir değerdir.
// console.log("is it luxon? : " ,DateTime.now().isLuxonDateTime);
//
//Belirli bir nesne de bulunan tüm özellliklerin dizisini döndürür.
// console.log("variables : " , Object.getOwnPropertyNames(DateTime.now()));


// function getAllFuncs(toCheck) {
//     const props = [];
//     let obj = toCheck;
//     do{
//         props.push(...Object.getOwnPropertyNames(obj));
//     }
//     while (obj = Object.getPrototypeOf(obj));
//
//     return props.sort().filter((e ,i ,arr) =>{
//         if(e != arr[i+1] && typeof toCheck[e] == 'function')
//             return true;
//     })
// }
//
// console.log(getAllFuncs(DateTime.now()));

// //DateTime.now()
// const now = DateTime.now();
// const now2 =DateTime.now();
// //iki date arasında ki süreyi/farkı hesaplar.
// console.log("now: ", now2.diff(now));
//
// setTimeout(()=>{
//     const now2 =DateTime.now();
//     console.log("now: ", now2.diff(now));
// },1000);
//
//
// //şimdi ki zaman
// console.log(DateTime.now());
//
// //Bir Iso DateTime dizesinden tarih oluşturulur. ???
// console.log("Ha bU nEDur Da!: ",DateTime.fromISO("2022-12-28"));
//
// //şimdi ki zamanla oluşturğumuz geçmiş zaman arasında ki fark
// console.log(DateTime.now().diff(DateTime.fromISO("1999-06-23")));
//
// //diffNow metodu direk şuanki zamanla karşılaştırma yapmak için kullanılır.
// //console.log(DateTime.fromISO("1999-06-23").diffNow());
//
// //şimdi ki zaman ve gelecek zaman farkı (Duration özelliği var)
// console.log(DateTime.now().diff(DateTime.fromISO("2023-09-17")));
// console.log(DateTime.fromISO("2023-09-07").diffNow());

//luxon DateTime.local() metodu (yerel ayarlar)
console.log(DateTime.local());

//seçilen tarihe göre yerel ayarları gösterir
console.log(DateTime.local(1999,6,23,11,15,23,7))

//istenilen ülkeye göre yerel ayarlar
console.log(DateTime.local(1999,6,23,{locale:"tr"}))

console.log(DateTime.local(2022,12,27,{zone:"America/New_York"}));








'use strict';

 //定数 const
 //変数 let

// ----------------------変数を使った計算----------------------
//   let price = 500;

//   price += 100;
//   price *= 2;
//   price++;
//   price--;
//   console.log(price);

// ----------------------データ型について----------------------
// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// ----------------------数値からなる文字列----------------------
// console.log('5' * 3);
// console.log(parseInt('5', 10) + 3);

// console.log(parseInt('hello') + 3);


// ----------------------比較演算子について----------------------
// const price = 1200;

// console.log(price > 1000);
// console.log(price < 1000);
// console.log(price >= 1000);
// console.log(price <= 1000);
// console.log(price === 1000);
// console.log(price !== 1000);

// //false <- 0, null, undefined, '', false
// // true <- それ以外
// console.log(Boolean(0));
// console.log(Boolean('hello'));

// ----------------------条件分岐----------------------

// // if(条件式A) {
// //   trueだったときの処理
// // } else if (条件式B) {
// // AがfalseでBがtrueだったときの条件式
// // } else {
// //   それ以外の場合の処理
// // }

// const score = 55;

// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good!');
// } else {
//   console.log('Too bad...');
// }

// ----------------------条件演算子----------------------

// // 条件式 ? trueの処理 : falseの処理

// const score = 85;
// score >= 80 ? console.log('Great!') : console.log('Good!');

// ----------------------論理演算子----------------------

// const score =60;
// const name ='taguchi';

// // if (score >= 50) {
// //   if (name === 'taguchi') {
// //     console.log('Good job!');
// //   }
// // }

// // && なおかつ(and)
// // || もしくは(or)
// // ！ ではない(not)

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good!');
// }

// ----------------------条件分岐 swich----------------------

// const signal ='pink';

// // if (signal === 'red') {
// //   console.log('Stop!');
// // } else if (signal === 'yellow') {
// //   console.log('Caution!');
// // } else if (signal === 'blue') {
// //   console.log('Go!');
// // }

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Caution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go');
//     break;
//   default:
//     console.log('Wrong signal');
// }

// ----------------------ループ処理 for----------------------

// for (let i =1; i <= 10; i++) {
//   // console.log('hello');
//   // console.log('hello' + i);
//   console.log(`hello ${i}`); //テンプレートリテラル
// }

// ----------------------ループ処理 while----------------------

// // let  hp = 100;

// // while(hp > 0) {
// //   console.log(`${hp} HP left!`);
// //   hp -= 15;
// // }
// let  hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while(hp > 0) 

// ----------------------continue,break----------------------

// for (let i = 1 ; i <= 10; i++) {
//   // if (i == 4 ) {
// // if (i % 3 === 0) {
// //     continue;   
// //   }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// ----------------------関数で処理をまとめる----------------------

// showAd();
// console.log('Tom is great');
// console.log('Bob is great');
// showAd();
// console.log('Steve is great');
// console.log('Richard is great');
// showAd();

// function showAd () {
//   console.log('------------');
//   console.log('----- Ad ----');
//   console.log('------------');
// }

// ----------------------引数----------------------

// showAd('Header Ad');//実引数
// console.log('Tom is great');
// console.log('Bob is great');
// showAd();
// console.log('Steve is great');
// console.log('Richard is great');
// showAd('Footer Ad');

// function showAd (message = 'Ad') { //仮引数
//   console.log('------------');
//   console.log(`----- ${message} ----`);
//   console.log('------------');
// }

// ----------------------Return----------------------

// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }
// // sum(1, 2, 3);
// // sum(3, 4, 5);

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// ----------------------関数式----------------------

// const sum = function (a, b, c) {
//   return a + b + c;
// };

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// 以下関数宣言と関数式の違い
// const array = [2, 5, 8,10];

// const double = function(a) {
//   return a * 2;
// }

// const result = array.map(double);
// console.log(result);

// const array = [4, 5, 8];

// const result = array.map((a) => {
//   return a * 2;
// });
// console.log(result);

// ----------------------アロー関数----------------------

// // const sum = (a, b, c) => a + b + c;

// // const total = sum(1, 2, 3) + sum(3, 4, 5);
// // console.log(total);

// // const double = function(a) {
// //   ruturn a * 2;
// // }
// const double = a => a * 2;
// console.log(double(12));

// ----------------------スコープ---------------------
// const x = 2;

// function f() {
//   // const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);

// ----------------------コードをブロックで囲う---------------------

// {
//   const x = 100;
//   console.log(x);
  
// }

// ----------------------配列---------------------

// {
//   const scores = [80, 90, 40];
//   console.log(scores);
// }

// ----------------------配列の要素にアクセス---------------------

// {
//   const scores = [80, 90, 40];
//   console.log(scores[1]);

//   scores[2] = 44;
//   console.log(scores);

//   console.log(scores.length);
// }

// ----------------------配列とループ処理を組み合わせる---------------------

// {
//   const scores = [80, 90, 40, 70, 90, 40];

//   // console.log(`Score: ${scores[0]}`);
//   // console.log(`Score: ${scores[1]}`);
//   // console.log(`Score: ${scores[2]}`);

//   for (let i = 0; i < scores.length; i++) { 
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// ----------------------配列の要素の変更---------------------

// {
//   const scores = [80, 90, 40, 70];
//   scores.push(60,50); //末尾に要素を追加
//   scores.shift(); //先頭の要素を削除
//   //90, 40, 70, 60, 50

//   for (let i = 0; i < scores.length; i++) { 
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// ---------------------splice()で配列を変更--------------------
// {
//   const scores = [80, 90, 40, 70];
//   scores.splice(1, 1, 40, 50);

//   for (let i = 0; i < scores.length; i++) { 
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// ---------------------スプレッド構文-------------------
// {
//   const otherScores = [10, 20]
//   const scores = [80, 90, 40, 70, ...otherScores];
//   console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }

//   sum(...otherScores);
// }
// ---------------------分割代入-------------------
// {
//   const scores = [80, 90, 40, 70];

//   // const [a, b, c, d] = scores; //全て代入
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);

//   // const [a, b, ...others] = scores; //一部代入
//   // console.log(a);
//   // console.log(b);
//   // console.log(others);

//   let x = 30;
//   let y = 70;
//   [x, y] = [y, x]; //値の交換

//   console.log(x);
//   console.log(y);

// }

// ---------------------forEach()-------------------
// {
//   const scores = [80, 90, 40, 70];

//   scores.forEach((score, index) => {
//     console.log(`Score ${index}: ${score}`)
//   });
// }

// ---------------------map()-------------------                 !!!!!!!!!!よく分からん!!!!!!!!!!
// {
//   const prices = [180, 190, 200];

//   // const updatedPrices = prices.map((price) => {
//   //   return prices + 20;
//   // });
//   const updatedPrices = prices.map(price => price + 20);
//   console.log (updatedPrices);
  
// }

// ---------------------filter()-------------------
// {
//   const numbers = [1, 4, 7, 8, 10];

//   // const eveNumbers = numbers.filter(number => {
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // });
  
//   const eveNumbers = numbers.filter(number => number % 2 === 0);

//   console.log(eveNumbers);
// }
// ---------------------オブジェクトを使ってみよう-------------------

// {
//   // const point = [100, 180];

//   const point = {
//     x:100,//プロパティ、メンバー x...(名前、キー)  100...値
//     y:180,
//   };

//   console.log(point);
// }

// ---------------------プロパティを操作してみよう-------------------

// {
//   // const point = [100, 180];

//   const point = {
//     x:100,//プロパティ、メンバー x...(名前、キー)  100...値
//     y:180,
//   };

//   point.x = 120;
//   // point['x'] = 120;

//   // console.log(point.x);
//   // console.log(point['y']);

//   point.z = 90;
//   delete point.y;

//  console.log(point);
// }

// ---------------------オブジェクトを操作してみよう-------------------
// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   };

//     const point = {
//     x:100,
//     y:180,
//     ...otherProps,
//   };
//   // console.log(point);
//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);

// }

// ---------------------Object.keys()を使ってみよう-------------------
// {
//   const point = {
//     x:100,
//     y:180,
//   };

//   // const keys = Object.keys(point);
//   // keys.forEach(key => {
//   //   console.log(`Key: ${key} Value: ${point[key]}`)
//   // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ];
//   console.log(points[1].y);
// }

// ---------------------変数を代入してみよう-------------------

{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);////5
  // console.log(y);////1

  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x);//[5, 2]
  // console.log(y);//[1, 2]になると思いきや、、、
}
// ---------------------変数の挙動を理解しよう-------------------

// {
//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x);//[5, 2]
//   console.log(y);//[1, 2]

// }

// ---------------------文字列を操作してみよう-------------------
// {
//   const str ='hello';

//   // console.log(str.length);

//   //str.substring(開始位置, 終了位置)
//   console.log(str.substring(2, 4));
//   console.log(str[1]);
// }

// ---------------------join(), split()を使ってみよう-------------------

// {
//   const d = [2019, 11, 14];
//   console.log(d.join('/'));

//   const t ='17:08:24';
//   console.log(t.split(':'));

//   const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }

// ---------------------数値を操作してみよう-------------------

// {
//   const scores = [10, 3, 9];

//   let sum = 0;
//   scores.forEach(score => {
//     sum += score;
//   });

//   const avg = sum / scores.length;

//   // console.log(sum);
//   // console.log(avg);

//   console.log(Math.floor(avg)); //7 小数点切り捨て
//   console.log(Math.ceil(avg));  //8 小数点切り上げ
//   console.log(Math.round(avg)); //7　四捨五入 
//   console.log(avg.toFixed(3)); //7.333

//   console.log(Math.random()); //乱数の生成
// }

// ---------------------ランダムな整数値を作ってみよう-------------------
// {
//   // //0, 1, 2
//   // Math.floor(Math.random() * 3)

//   // //0, ..., n
//   // Math.floor(Math.random() * (n + 1))

//   // //min, ..., max
//   // Math.floor(Math.random() * (max + 1 - min)) + min

//   //サイコロ
//   console.log(Math.floor(Math.random() * (6 + 1 - 1)) + 1);
// }

// ---------------------現在日時を扱ってみよう-------------------

// {
//   const d = new Date();

//   // d.getFullYear(); //2019
//   // d.getMonth(); //0-11 (jan:0, feb:1, ...)
//   // d.getDate(); //1-31
//   // d.getDay(); //0-6 (Sun:0, Mon:1, ...)

//   // d.getHours(); //0-23
//   // d,getMinutes(); // 0-59
//   // d.getSeconds(); // 0-59
//   // d.getMilliseconds(); //0-999  1ms = 1/1000 sec
  
//   console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);

// }

// ---------------------特定の日時を扱ってみよう-------------------

// {
//   const d = new Date(2019, 10); // 2019/11/01 00:00:00
//   d.setHours(10, 20, 30); //2019/11/01 10:20:30
//   d.setDate(31); //2019/12/01 10:20:30
//   d.setDate(d.getDate() +3); //2019/12/04 10:20:30
//   console.log(d);
// }

// ---------------------alert(),confirm()を使ってみよう-------------------

// {
//   alert('hello');
//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// ---------------------setInterval()を使ってみよう-------------------
// {
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);
// }
// ---------------------setTimeout()を使ってみよう-------------------
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i ++;
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }
//   showTime();
// }
// ---------------------タイマー処理の違いを理解-------------------

// ---------------------例外処理をつかってみよう-------------------
// {
//   const name ='taguchi';

//   console.log(name.toUpperCase());

//   console.log('Finish');
// }

// ---------------------オブジェクトが複数ある場合を考えよう-------------------
// {
//   const posts = [
//     {
//     text: 'JavaScriptの勉強中',
//     likeCount: 0,
//     },
//     {
//     text: 'プログラミングが楽しい！',
//     likeCount: 0,
//     },

//   ];

//   function show(post) {
//     console.log(`${post.text} - ${post.likeCount}いいね`);
//   }

//   show(posts[0]);
// }
// ---------------------メソッドを使ってみよう-------------------
// {
//   const posts = [
//     {
//     text: 'JavaScriptの勉強中',
//     likeCount: 0,
//     // show: function () {
//     //   console.log(`${this.text} - ${this.likeCount}いいね`);
//     // },
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },
    
//     {
//     text: 'プログラミングが楽しい！',
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },

//   ];
//   // show(posts[0]);
//   posts[0].show();
//   posts[1].show();
// }
// ---------------------クラス-------------------
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中'),
//     new Post('プログラミングが楽しい！'),
//   ];
//   // show(posts[0]);
//   posts[0].show();
//   posts[1].show();
// }
// ---------------------カプセル化-------------------
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}like`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中'),
//     new Post('プログラミングが楽しい！'),
//   ];

//   posts[0].like();

//   // posts[0].show();
//   // posts[1].show();
// }
// ---------------------静的メソッド-------------------
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}like`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//     //静的メソッド
//     //thisは使えない
//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中'),
//     new Post('プログラミングが楽しい！'),
//   ];

//   // posts[0].like();

//   Post.showInfo();

// }
// ---------------------クラスを拡張したい場合を考えよう-------------------
// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}like`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
  
//   class SponsoredPost {
//     constructor(text, sponsor) {
//       this.text = text;
//       this.likeCount = 0;
//       this.sponsor = sponsor;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount}like`);
//       console.log(`...sponsored by ${this.sponsor}`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中'),
//     new Post('プログラミングが楽しい！'),
//     new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//   ];

//   posts[2].show();
//   posts[2].like();
// }
// ---------------------クラスを継承してみよう-------------------
{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}like`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }
  
  class SponsoredPost extends Post { //子クラス
    constructor(text, sponsor){
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }
  const posts = [
    new Post('JavaScriptの勉強中'),
    new Post('プログラミングが楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}

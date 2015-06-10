##bucks.jsってなに  
  
https://github.com/CyberAgent/bucks.js/  
  
非同期ライブラリ。  　
  
非同期であろうが同期であろうが、  
処理の流れを制御したい時に使うよ。    
  
例えば、  
・mypageのデータを取得する(いつ取得が完了するかわかんない)  
・取得したデータを元に、必要とする情報を抜き出したい  
・抜き出したデータを使って、userデータとloginbonusデータを取得する  
・結果を表示したい  
　　
  
// 1. mypageのデータを取得する  
var data = $.ajax({  
  url: ‘/_/mypage’  
});  
  
// 2. 取得したデータを元に、必要な情報を抜き出す  
var userId = data.userId;  
var loginbonusId = data.loginbonusId;  
  
// 3. userデータとloginbonusデータを取得する  
var userData = $.ajax({ url: ‘/_/user’, data: { id: userId } });  
var loginbonusData = $.ajax({ url: ‘/_/loginbonus’, data: { id: loginbonusId } });  
  
// 4. 結果を表示する  
alert(userData.name + ‘さんが’ + loginbonusData.date + ‘日目のログインボーナスを取得しました。’);  

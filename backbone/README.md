# backbone.jsとは - 

JavaScript フレームワーク  
クライアントサイドの実装を、MVC（model,view,controller)を利用して行うための下地　　


## 必要なもの - 

http://backbonejs.org/#  
https://github.com/jashkenas/backbone  

http://underscorejs.org/  
https://github.com/jashkenas/underscore  


## 見ておくところ -

Backbone.js入門 (全22回)  
http://dotinstall.com/lessons/basic_backbonejs　　 

Underscore.js入門 (全10回)  
http://dotinstall.com/lessons/basic_underscorejs  



## 関係ありそうな便利なものたち -

・zepto.js => DOM操作とか。 jQueryみたいなやつ。  
・underscore.js => 便利関数群。生jsで書くのめんどいなーって処理を簡潔に記述できる。  
・require.js => jsファイルをモジュール管理できる。要は、細かくjsファイルを作れるようになる。  
・handlebars.js => テンプレートエンジン。動的にHTMLを生成できる。jadeみたいなもん。  
・bucks.js => 非同期ライブラリ。コールバック地獄から抜け出すために必要。  


## MVCとは  

### modelとは  
アプリの論理的部分を制御する。  
modelの状態に変化が起こったときにイベントを発火する。
  
### viewとは  
modelのインスタンスを持つ。    
modelのインスタンスのイベントを監視する。  
UIを描画する。  
ユーザのアクションを受け取り、イベントを発火する。  

### Controllerとは  
modelとviewのインスタンスを持つ。  
viewのイベントを監視する。








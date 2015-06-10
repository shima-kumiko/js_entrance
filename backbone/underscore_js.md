##underscore.jsってなに  
  
http://underscorejs.org/  
  
便利関数群。  
生jsで記述するのめんどいなーって処理を簡潔に書けるよ。  
  
単体で使える。  

        for (var i = 0; i < 10; i++) {
          console.log(i);
        }
        
        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
        
        for文書くのめんどい。
        
        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
        
        _.times(10, function (i) {
          console.log(i);
        });
  
***  

        var arr = [1, 2, 1, 4, 1, 3];
        
        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
        
        重複する値を削除して、[1, 2, 3, 4]みたいにしたい。
        生js書くのめんどい。。
        
        ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
        
        var arr = [1, 2, 1, 4, 1, 3];
        arr = _.uniq(arr);

  

##require.jsってなに
  
http://requirejs.org/  
  
各jsファイルの依存関係を管理してくれる。  
  
各jsファイルを一つのファイルにまとめてくれる。  


        index.js
        
        define([
          ‘ core/component/aaa’,// 別jsファイル
          ‘ core/component/bbb’,
          ‘ core/component/ccc’
        ], function (
          aaa,
          bbb,
          ccc
        ) {
          var AaaView = aaa.View;
          var BbbView = bbb.View;
          var CccView = ccc.View;
        });

  
---
  
        core/component/aaa.js  
            
        define([], function () {
          var View = beez.View.extend(
            ‘’,
            {
              vidx: ‘aaa’
            }
          );
        
          return {
            View: View
          };
        });



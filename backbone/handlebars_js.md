##handlebarsの使い方例

[リストを使いたい何か member.hbs]  
  
`<ul>`     
`  {{#each list}}`    
`    <li>{{name}}</li>`    
`  {{/each}}`  
`</ul>`  
  
↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓    
  
var templateMemberList = require(‘member.hbsc’); // テンプレートを読み込む  
var memberList = templateMemberList({ // テンプレートにデータを渡す  
  list: [ { name: ‘aaa’ }, { name: ‘bbb’ }, { name: ‘ccc’ }, { name: ‘ddd’ } ]  
});  
$(‘#listWrapper’).html(memberList); // DOMにぶち込む    
  
↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓  

こーなる  

`<div id=”listWrapper”>`   
`  <ul>`  
`    <li>aaa</li>`   
`    <li>bbb</li>`  
`    <li>ccc</li>`  
`    <li>ddd</li>`  
`  </ul>`  
`</div>`


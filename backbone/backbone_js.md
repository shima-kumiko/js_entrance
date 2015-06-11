##backbone.jsってなに  

http://backbonejs.org/  
  
  
Model, View, Collection, Events, Routerの根幹。  
  
underscore.jsとzepto.js(jQuery.js)に依存している。  
言い換えると、backbone.jsを使用するためにunderscore.jsとzepto.jsが必要になる。  
(※最近、underscore.jsだけ依存するように変更されたけど、その辺りは無視します)  
  
つまり、  
backbone.js = underscore.js + zepto.js + MVCR  
  
  
        var DocumentRow = Backbone.View.extend({
            tagName: "li",
            className: "document-row",
            events: {
                "click .icon":          "open",
                "click .button.edit":   "openEditDialog",
                "click .button.delete": "destroy"
            },
            initialize: function() {
                this.listenTo(this.model, "change", this.render);
            },
            render: function() {
                ...
            }
        });
        var documentRow = new DocumentRow();
  
  
        <html>
          <body>
            <script src=”zepto.js”></script><!-- 依存している -->
            <script src=”underscore.js”></script><!-- 依存している -->
            <script src=”backbone.js”></script>
            <script>
                // backbone使えるよ。
            </script>
          </body>
        </html>


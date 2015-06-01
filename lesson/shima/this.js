(function() {

  'use strict';

  var mgc = window.jp.ameba.mgc_s;

  mgc.controllers.CharacterRaidBossResultController = function() {
    this.initialize.apply(this, arguments);
  };

  mgc.controllers.CharacterRaidBossResultController.prototype = mgc.extend(mgc.controllers.AbstController,{
    def: function(){
      this.$greetingCommentBtn = $('.js-greetingCommentBtn');
      this.$greetingCommentCommitBtn = $('#js-greetingCommentCommitBtn');
      this.$greetDlg = $('#greetCommentDlg');
      this.$greetResultDlg = $('#greetResultDlg');
      this.greet = new mgc.models.AbstModel('greet','/$P/ajax/$P-$T-$A');
      //token
      this.$token = $('#__token');
      this.currentUserId = 0;
      this.condVar = 'support';
      this.$greetCommentBox = $('#greetCommentTxt');
      this.initComment = this.$greetCommentBox.val();
      this.greetComment = this.initComment;
      this.$firstTime = $('.firstTime');
      this.$greetFirstTime = $('.greetFirstTime');

    },
    /**
     * @constructor
     */
    init : function() {
      // URLに表示したいので、強制的にURLに付与する。
      var replaceUrl = window.location.href.replace(/#.*$/,"");
      window.location.href = replaceUrl + '#1';
      
      //タブモジュールの読み込み
      this.tabModule = new mgc.components.TabModule({
        classNames: {
          js_tabListItem: 'js-tab',
          js_tabContent: 'js-tabContent',
          js_selectTab: 'c-tab__btn_type_1_selected',
          js_contentHidden: 'c-state_hidden'
        }
      });
      $('#js-dlgArea>section').ambModalDlg();
    },

    //************************************
    //       イベント登録
    //************************************
    initEvents: function() {
      var that = this;
      that.$greetingCommentBtn.on('click', function(){   
        that.currentUserId = that.$greetingCommentBtn.data("userId");
        that.condVar = 'support';
        //あいさつコメントを初期化する
        that.greetComment = that.initComment;
        that.$greetCommentBox.val(that.initComment);
        //あいさつを送信後Ajax通信でデータ取得
        that.getGreet("SEND");
      });
      that.$greetingCommentCommitBtn.on('click', function(){
        that.condVar = 'greet';
        that.greetComment = that.$greetCommentBox.val();
        //コメントを送信Ajax通信でデータ取得
        that.getGreet("COMMENT");
      });
    },

    //************************************
    //       あいさつ送信
    //************************************
    getGreet: function(useType){
      var that = this;

      that.greet.put({
        complete: function() {
          // コメント送信ボタン完了であいさつpopupを閉じる
          if (useType == "COMMENT"){
            that.$greetDlg.ambCloseModalDlg(false);
          }
        },
        success: function(data){
          // あいさつ送信ボタン完了であいさつ完了popupを開く
          if (useType == "SEND"){

            that.$greetDlg.ambOpenModalDlg(false);

            if(data.point === 0){
              //あいさつを一定期間内に2回以上した場合
              that.$firstTime.addClass('c-state_hidden');
              if(data.greetPoint === 0){
                //あいさつコメントを一定期間内に2回以上した場合
                that.$greetFirstTime.addClass('c-state_hidden');
              }
            }else{
              // ユーザー情報の更新
              that.$token.val(data.token);

              $('.friendshipPoints').text(data.friendshipPoints - data.point);
              $('.afterFriendshipPoints').text(data.friendshipPoints);
              $('.points').text(data.point);
            };

          // コメント送信ボタン完了でコメント完了popupを開く
          }else if (useType == "COMMENT"){
            that.$greetResultDlg.ambOpenModalDlg(false);

            if(data.point === 0){
              // あいさつコメントを一定期間内に2回以上した場合
              that.$greetFirstTime.addClass('c-state_hidden');
            }else{

              $('.friendshipPoints').text(data.friendshipPoints - data.point);
              $('.afterFriendshipPoints').text(data.friendshipPoints);
              $('.points').text(data.point);
            }; 

          }else{

          }
        },

        // フェーズ
        phase: 'profile',

        // 付与パラメータ
        data: {

          cond : that.condVar,
          token: that.$token.val(),
          userId: that.currentUserId,
          text : that.greetComment

        }

      });

    }
     
  });
})();

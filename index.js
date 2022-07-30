//ボタンを押すごとに画面が切り替わる関数
$(function () {

    $(".btn").on("click", function () {
      $(this).closest("div").css("display", "none");
      id = $(this).attr("href");
      $(id).addClass("fit").fadeIn("slow").show();
    });



//選択ボタンデータを配列に入れてカウントする関数です
      var countA;
      var countB;
      var countC;
      var countD;
      var count2a;
      var count2b;
      var count3a;
      var count3b;
      var count4a;
      var count4b;
      var count5a;
      var count5b;
      var count6a;
      var count6b;

      var box =[];
    $(".btn").each(function(){
      $(this).on('click',function(){
        var value = $(this).data("value");
         box.push(value);

        countA = box.filter(function(x){
                      return x === "a"
                    }).length;
        countB = box.filter(function(y){
                        return y === "b"
                    }).length;
        countC = box.filter(function(y){
                        return y === "c"
                    }).length;
        countD = box.filter(function(y){
                        return y === "d"
                    }).length;            
        count2a = box.filter(function(y){
                        return y === "2a"
                    }).length;
        count2b = box.filter(function(y){
                        return y === "2b"
                    }).length;
        count3a = box.filter(function(y){
                        return y === "3a"
                    }).length;
        count3b = box.filter(function(y){
                        return y === "3b"
                    }).length;
        count4a = box.filter(function(y){
                        return y === "4a"
                    }).length;
        count4b = box.filter(function(y){
                        return y === "4b"
                    }).length;
        count5a = box.filter(function(y){
                        return y === "5a"
                    }).length;
        count5b = box.filter(function(y){
                        return y === "5b"
                    }).length;
        count6a = box.filter(function(y){
                        return y === "6a"
                    }).length;
        count6b = box.filter(function(y){
                        return y === "6b"
                    }).length;
      });
    });


//結果を出力する関数
    $('.end').on('click',function(){
      if( countA || countB || countC) {
        $('#answer_01').css("display",""); //回答1
      } 
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==0 && count5a==0 && count6a==0) {
        $('#answer_02').css("display","");//回答2
      }
      else if(countD ==1 && count3a==1 && count2a==0 && count4a==0 && count5a==0 && count6a==0) {
        $('#answer_03').css("display","");//回答3
      }
      else if(countD ==1 && count4a==1 && count2a==0 && count3a==0 && count5a==0 && count6a==0) {
        $('#answer_04').css("display","");//回答4
      }
      else if(countD ==1 && count5a==1 && count2a==0 && count3a==0 && count4a==0 && count6a==0) {
        $('#answer_05').css("display","");//回答5
      }
      else if(countD ==1 && count6a==1 && count2a==0 && count3a==0 && count4a==0 && count5a==0) {
        $('#answer_06').css("display","");//回答6
      }
      //2個の組み合わせ
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==0 && count5a==0 && count6a==0) {
        $('#answer_45').css("display","");//回答7
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==1 && count5a==0 && count6a==0) {
        $('#answer_46').css("display","");//回答8
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==0 && count5a==1 && count6a==0) {
        $('#answer_47').css("display","");//回答9
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==0 && count5a==0 && count6a==1) {
        $('#answer_48').css("display","");//回答10
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==1 && count5a==0 && count6a==0) {
        $('#answer_56').css("display","");//回答11
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==0 && count5a==1 && count6a==0) {
        $('#answer_57').css("display","");//回答12
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==0 && count5a==0 && count6a==1) {
        $('#answer_58').css("display","");//回答13
      }
      else if(countD ==1 && count2a==0 && count3a==0 && count4a==1 && count5a==1 && count6a==0) {
        $('#answer_67').css("display","");//回答14
      }
      else if(countD ==1 && count2a==0 && count3a==0 && count4a==1 && count5a==0 && count6a==1) {
        $('#answer_68').css("display","");//回答15
      }
      else if(countD ==1 && count2a==0 && count3a==0 && count4a==0 && count5a==1 && count6a==1) {
        $('#answer_78').css("display","");//回答16
      }
      //3個の組み合わせ
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==1 && count5a==0 && count6a==0) {
        $('#answer_456').css("display","");//回答7
      }
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==0 && count5a==1 && count6a==0) {
        $('#answer_457').css("display","");//回答8
      }
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==0 && count5a==0 && count6a==1) {
        $('#answer_458').css("display","");//回答9
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==1 && count5a==1 && count6a==0) {
        $('#answer_467').css("display","");//回答10
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==1 && count5a==0 && count6a==1) {
        $('#answer_468').css("display","");//回答11
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==0 && count5a==1 && count6a==1) {
        $('#answer_478').css("display","");//回答12
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==1 && count5a==1 && count6a==0) {
        $('#answer_567').css("display","");//回答13
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==1 && count5a==0 && count6a==1) {
        $('#answer_568').css("display","");//回答14
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==0 && count5a==1 && count6a==1) {
        $('#answer_578').css("display","");//回答15
      }
      else if(countD ==1 && count2a==0 && count3a==0 && count4a==1 && count5a==1 && count6a==1) {
        $('#answer_678').css("display","");//回答16
      }
      //4個の組み合わせ
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==1 && count5a==1 && count6a==0) {
        $('#answer_4567').css("display","");//回答7
      }
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==1 && count5a==0 && count6a==1) {
        $('#answer_4568').css("display","");//回答8
      }
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==0 && count5a==1 && count6a==1) {
        $('#answer_4578').css("display","");//回答9
      }
      else if(countD ==1 && count2a==1 && count3a==0 && count4a==1 && count5a==1 && count6a==1) {
        $('#answer_4678').css("display","");//回答10
      }
      else if(countD ==1 && count2a==0 && count3a==1 && count4a==1 && count5a==1 && count6a==1) {
        $('#answer_5678').css("display","");//回答11
      }
      //1個の組み合わせ
      else if(countD ==1 && count2a==1 && count3a==1 && count4a==1 && count5a==1 && count6a==1) {
        $('#answer_45678').css("display","");//回答7
      }





    });

  });

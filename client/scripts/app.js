var modAdj =[];
var adj =[];
var javaScript=[];
var ajax1 = false;
var ajax2 = false;
var ajax3 = false;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function getPhrase(word1, word2, word3){
    $('.phrase').remove();
    var phrase = word1 + " " + word2 + " " + word3;
    $('.container').append("<div class='phrase'>"+phrase+"</div>");
}

function getWord(array){
    var i = randomNumber(0,array.length-1);
    //console.log(array[i]);
    return array[i];
}

$(document).ready(function(){

    function getWordArray() {
        $.ajax({
            url: "/data1",
            success: function (data) {
                //console.log(data);
                $.each(data, function(){
                    modAdj.push(this.name);
                });
                ajax1= true;

            }
        })
        $.ajax({
            url: "/data2",
            success:function (data) {
                //console.log(data);
                $.each(data, function(){
                    adj.push(this.name);
                });
                ajax2= true;

            }
        })
        $.ajax({
            url: "/data3",
            success:function(data){
                //console.log(data);
                $.each(data, function(){
                    javaScript.push(this.name);
                });
                ajax3= true;
            }
        })
    }
    getWordArray();
    $('body').on('click','#createPhrase',function(){
        if (ajax1 && ajax2 && ajax3){
            getPhrase(getWord(modAdj), getWord(adj),getWord(javaScript));

        }
        else {
            console.log("not ready");
        }

    });

});
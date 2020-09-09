var gradeSec=$(".grade-wrap")
var showButton=$("#showscores")
var mathematics=$("#Mathematics")
var english=$("#English")
var biology=$("#Biology")
var chemistry=$("#Chemistry")
var scoreText=$('.scores')


/* showButton.click(function(){
    alert("jk")
})

 */

 gradeSec.submit((e)=>{
    e.preventDefault();

    scoresSum();
     
 })


function scoresSum(){
    var mathValue=stringToNo(mathematics.val())
    var englishValue=stringToNo(english.val())
    var bioValue=stringToNo(biology.val())
    var chemValue=stringToNo(chemistry.val())
    var sum=mathValue+englishValue+bioValue+chemValue
   
    grades(sum)
}

function stringToNo(input){
    return parseInt(input,10)
}

function grades(sum){

    if(sum<200){
        scoreText.text("You scored "+sum+" Your Grade is F"+" ,You failed this semester")
        playSound("failed")
        failed()
    }

    else if(sum<300){
        scoreText.text("You scored "+sum+" Your Grade is C"+" ,You passed,there is need for improvement")
    }

    else if(sum<350){
        scoreText.text("You scored "+sum+" Your Grade is B"+" ,You passed,Well done")
    }

    else if(sum>350&&sum===400){
        scoreText.addClass=("distinction")
        scoreText.text("You scored "+sum+" Your Grade is A"+" ,You passed,Well Done on an amazing job!")
       
        playSound('applause')
        distinction()
    }
}

function playSound(input){
    var audio = new Audio('sounds/'+input+'.mp3');
    audio.play(); 
}

function distinction(){
    $("body").addClass("distinction")
    
    setTimeout(function()  {
        $("body").removeClass("distinction")  
    }, 1000);
}

function failed(){
    $("body").addClass("fail")
    
    setTimeout(function()  {
        $("body").removeClass("fail")  
    }, 1000);
}
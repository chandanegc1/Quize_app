function submit(){
    let submit =document.getElementById('submit');
    submit.style.background = 'green';
}

let questions =[
    {
        'que':"What does css stands for?",
        'a':"Java",
        'b':"C++ "    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    },
    {
        'que':"What youre name?",
        'a':"C++Java",
        'b':" fff"    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    },
    {
        'que':"What do you like most?",
        'a':"PythonJava",
        'b':"C++ "    ,
        'c':"Java"    ,
        'd':"ffff" ,
        'corrrect':"a",
    },
    {
        'que':"What youre name?",
        'a':"C++Java",
        'b':" fff"    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    },
    {
        'que':"What youre name?",
        'a':"C++Java",
        'b':" fff"    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    },
    {
        'que':"What youre name?",
        'a':"C++Java",
        'b':" fff"    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    },
    {
        'que':"What youre name?",
        'a':"C++Java",
        'b':" fff"    ,
        'c':"Java"    ,
        'd':"Python" ,
        'corrrect':"a",
    }
]
let index = 0;
let trues = 0;
let falses = 0;
let input = document.getElementsByClassName("input");
function quiz(){
    if(index==questions.length){
        return end();
    }

  let data = questions[index];
  let option = document.getElementsByClassName("option1");
  let question = document.getElementById('question');
  question.innerText=index+1+") "+data.que;
  option[0].innerHTML =data.a;
  option[1].innerHTML =data.b;
  option[2].innerHTML =data.c;
  option[3].innerHTML =data.d;

  for(element of input){
    if(element.checked){
        if(element.value==data.corrrect){
            trues++;
            console.log(trues);
        }
        else{
            falses++;
            console.log(falses);
        }
    }
  }


  index++;
  reset();

}
//initial call
quiz();




function end(){
    let result = document.getElementById('result');
    let total= questions.length-(trues+falses);
    result.style.marginTop='30vh';
    result.style.border='1px solid';
    result.style.padding= '30px';
    result.style.boxShadow='2px 2px gray';
    result.innerHTML = "<h1>Thankyou for submitting Quiz</h1>"+ 
                       "True Answer =" +" "+ trues+ 
                       "<br>False Answer =" + " "+ falses +
                       "<br> Total Questions =" + " "+ questions.length + 
                       "<br>Unattempt questions =" + " "+ total ;
}

 function reset(){
    for(element of input){
        element.checked=false;
    }
}

 //   let que_No = document.getElementById('que_No');
 //   let questionnew = document.getElementById('question');
 //   
 //   let optionnew = document.getElementsByClassName('optionnew');
 //   function addquiz(){
 //           que_No.value = questions.length++;
 //           data.que = questionnew.value;
 //           
 //           data.a=optionnew[0].value;
 //           data.b=optionnew[1].value;
 //           data.c=optionnew[2].value;
 //           data.d=optionnew[3].value;
 //       } 
const button = document.getElementById('button')
button.addEventListener('click',function(){

const fizz = document.getElementById('fizz');
const fizzNum = fizz.value;
const buzz = document.getElementById('buzz');
const buzzNum = buzz.value;
const errMsgFizz = document.querySelector('#message');
const errMsgBuzz = document.querySelector('#message2');

if (!fizz.value){
  errMsgFizz.textContent = 'FizzNumが入力されていません';

    return false;

}else if (!(fizz.value === fizz.value && fizz.value%1 === 0)){
  errMsgFizz.textContent = 'FizzNumを整数で入力してください';
  return false;
}

if(!buzz.value){

  errMsgBuzz.textContent = 'BuzzNumが入力されていません';

    return false;
}else if (!(buzz.value === buzz.value &&  buzz.value%1 === 0)){
  errMsgBuzz.textContent = 'BuzzNumを整数で入力してください';
  return false;
}

function fizzBuzz(){
  for(let i=1; i<=100; i++){
      if(i%fizzNum=== 0　&& i%buzzNum=== 0){
        const list = document.getElementById('list');
        const lis = document.createElement('li');
        lis.innerHTML = i + "FizzBuzz";
        
        list.appendChild(lis);
        }
        else if(i%fizzNum === 0) {
          const list = document.getElementById('list');
          const lis = document.createElement('li');
          lis.innerHTML = i + "Fizz";
          
          list.appendChild(lis);
      }else if(i%buzzNum === 0) {
        const list = document.getElementById('list');
        const lis = document.createElement('li');
        lis.innerHTML = i + "Buzz";
        
        list.appendChild(lis);
      }
  }
}
fizzBuzz();

});
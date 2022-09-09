// Write your solution below:
let arr = [];
let finalArr = [];
let answer = '';

const sortShirts = (string) => {
  let arr = string.split('');
 
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 's'){
        finalArr.push(arr[i])
    }
  }
  for(let j = 0; j < arr.length; j++){
    if(arr[j] === 'm'){
        finalArr.push(arr[j])
    }
  }
  for(let k = 0; k < arr.length; k++){
    if(arr[k] === 'l'){
        finalArr.push(arr[k])
    }
  }
  answer = finalArr.join() 
  console.log(answer);
}

sortShirts('slsllsmmmm');
const next = document.querySelector('.next')
console.dir(next)

const previous = document.querySelector('.previous')
console.dir(previous)



const food1 = document.querySelector('.food')
const food2 = document.querySelector('.food-buy')
console.log(food1)
console.log(food2)


next.addEventListener('click', function () {
  if (food1.classList.add('on')) {
     food1.classList.add('on')
  } 
  else {
    food2.classList.add('off')
  }
})


previous.addEventListener('click', function() {
  if(food2.classList.contains('off')){

  food1.classList.remove('on');
  food2.classList.remove('off')
  food2.classList.add('on');

  }
  
})



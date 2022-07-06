const root = document.getElementById('root')
console.log(root);
// body 스타일링
document.body.style.padding = 0;
document.body.style.margin = 0;
document.body.style.boxSizing ='border-box'

// root 스타일링
root.style.width = 100 + 'vw'
root.style.height = 100 + 'vh'
root.style.border = '1px solid #000'


root.style.display = 'flex'
root.style.justifyContent= 'center';
root.style.alignContent= 'center';

// root 세개 세로 박스
for(let i = 0; i<3; i++){
  const div = document.createElement('div')
  root.appendChild(div)
  console.log(div)
}

// 첫번째 세로 박스
root.children[0].classList = 'section'
const section = document.querySelector('.section')

section.style.width = '20%'
section.style.height = '100%'
section.style.border ='1px solid black';

//두번째 세로 박스
root.children[1].classList = 'section2'
const section2 = document.querySelector('.section2')

section2.style.width = '50%'
section2.style.height = '100%'
section2.style.border ='1px solid black';

// 첫번째 세로 박스에 8개 section
for(let i = 0; i<8; i++){
  const choice = document.createElement('div')
  section.appendChild(choice)
  choice.style.width = '100%';
  choice.style.height = '10%';
  choice.style.borderBottom = '1px solid #000';
}

//세번째 세로 박스
root.children[2].classList = 'section3'
const section3 = document.querySelector('.section3')

section3.style.width = '30%'
section3.style.height = '100%'
section3.style.border ='1px solid black';

// 두번째 세로박스 세개 블럭 
for(let i = 0; i<3; i++){
  const div = document.createElement('div')
  section2.appendChild(div)
  console.log(section.children)
}

// 두번째 세록 박스 첫번째 박스
section2.children[0].classList = 'search'
const search = document.querySelector('.search')
search.style.width = '100%';
search.style.height = '10%';
search.style.border = '1px solid black';
search.style.display = 'flex';
search.style.justifyContent= 'center';
search.style.alignItems = 'center';
const input = document.createElement('input')
search.appendChild(input)

input.style.width = '40%'
input.style.height = '30%'


const searimg = document.createElement('img')
search.appendChild(searimg)
searimg. src= ''

section2.children[1].classList = 'profile'
const profile = document.querySelector('.profile')
profile.style.width = '100%';
profile.style.height = '50%';
profile.style.borderBottom = '1px solid #000';


const img = document.createElement('img')
profile.appendChild(img)
img

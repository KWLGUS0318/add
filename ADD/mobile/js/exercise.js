const save = document.querySelector('.save')
console.log(save)
const box = document.querySelector('.box')

save.addEventListener('click', function () {
  window.confirm('저장할까요?')
})


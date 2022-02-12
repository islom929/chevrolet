const btnNavModel = document.querySelector('#nav-model')
const btnNavCustomer = document.querySelector('#nav-customer')
const btnNavOwner = document.querySelector('#nav-chevrolet-uz')
const navBtns = document.querySelectorAll('.nav__dropdown-btn')
const elForm = document.querySelector('form')

elForm.addEventListener('submit', evt => evt.preventDefault())

const modelSliderList = document.querySelector('.model-slider__list')

navBtns.forEach(btn => {
  btn.addEventListener('click', evt => {



  })
})

btnNavModel.addEventListener('click', evt => {
  document.querySelector('.header-modal').classList.toggle('d-none')

  modelSliderShowing()
})

function modelSliderShowing() {

 carsObj.forEach(car => {
  const li = document.createElement('li')
  li.className = 'model-slider__item d-none'
  li.innerHTML = `
      <div class="model-slider__box">
        <img class="model-slider__img" src="${car.img}" alt="img of ${car.nameCar.toLowerCase()}">
        <h3 class="model-slider__title" >Chevrolet ${car.nameCar}</h3>
        <p class="model-slider__price">От <span>${car.price}</span> сум</p>
    </div>
  `
  modelSliderList.append(li)

  })

  const sliderItems = document.querySelectorAll('.model-slider__item')

  let count = 3;

  for (let i = 0;i < count;i++) {
    sliderItems[i].classList.remove('d-none')
  }
}

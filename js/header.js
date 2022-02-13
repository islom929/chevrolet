const btnNavModel = document.querySelector('#nav-model')
const btnNavCustomer = document.querySelector('#nav-customer')
const btnNavOwner = document.querySelector('#nav-owner')
const btnNavChevrolet = document.querySelector('#nav-chevrolet-uz')
const navBtns = document.querySelectorAll('.nav__dropdown-btn')
const elForm = document.querySelector('form')

elForm.addEventListener('submit', evt => evt.preventDefault())

const modelSliderList = document.querySelector('.model-slider__list')

let modalModelCount = 0

btnNavModel.addEventListener('click', evt => {

  modalCustomerCount = 0
  modalOwnerCount = 0
  modalChevroletCount = 0

  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')

  document.querySelector('.model-modal').classList.toggle('d-none')

  modalModelCount += 1

  if (modalModelCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    modalModelCount = 0
  }

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

    let contFrom = 0
    let countTo = 3;

    for (let i = contFrom;i < countTo;i++) {
      sliderItems[i].classList.remove('d-none')
    }
})

let modalCustomerCount = 0

btnNavCustomer.addEventListener('click', evt => {
  modalModelCount = 0
  modalOwnerCount = 0
  modalChevroletCount = 0

  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')

  document.querySelector('.customer-modal').classList.toggle('d-none')

  modalCustomerCount += 1

  if (modalCustomerCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    modalCustomerCount = 0
  }
})

let modalOwnerCount = 0

btnNavOwner.addEventListener('click', evt => {

  modalModelCount = 0
  modalCustomerCount = 0
  modalChevroletCount = 0

  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.chevrolet-modal').classList.add('d-none')


  document.querySelector('.owner-modal').classList.toggle('d-none')

  modalOwnerCount += 1

  if (modalOwnerCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    modalOwnerCount = 0
  }
})

let modalChevroletCount = 0

btnNavChevrolet.addEventListener('click', evt => {
  modalOwnerCount = 0
  modalModelCount = 0
  modalCustomerCount = 0

  document.querySelector('.header-modal').classList.add('d-none')
  document.querySelector('.header-modal').classList.remove('d-none')
  document.querySelector('.model-modal').classList.add('d-none')
  document.querySelector('.customer-modal').classList.add('d-none')
  document.querySelector('.owner-modal').classList.add('d-none')


  document.querySelector('.chevrolet-modal').classList.toggle('d-none')

  modalChevroletCount += 1

  if (modalChevroletCount > 1) {
    document.querySelector('.header-modal').classList.add('d-none')
    modalChevroletCount = 0
  }
})

// LANGUAGE CHANGING

document.querySelector('.nav__language-box').addEventListener('click', evt => {
  document.querySelector('.nav__language-dropdown').classList.toggle('d-none')
})
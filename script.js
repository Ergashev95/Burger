const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum() {
            return this.price * this.amount;
        },
        get kcallSum() {
            return  this.kcall * this.amount;
        }

    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 600,
        get calcSum() {
            return this.price * this.amount;
        },
        get kcallSum() {
            return  this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 800,
        get calcSum() {
            return this.price * this.amount;
        },
        get kcallSum() {
            return  this.kcall * this.amount;
        }
    },
}

let elBtn = [...document.querySelectorAll('.main__product-btn')];

for (let i = 0; i < elBtn.length; i++) {
    elBtn[i].addEventListener('click', function (){
       // console.log(this.closest('.main__product').getAttribute('id'));
        prepare(this);
    })
}
function prepare(item){
    let parent = item.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    console.log(parentId)

    let count = foods[parentId].amount

    if(sym == "+"){
        count++
    }else if(sym == "-" && count > 0) {
        count--
    }


    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum
}


let time = document.querySelector('.header__timer-extra');

let stop;

function lvl(){
    time.innerHTML++

    if(time.innerHTML < 80){
        stop = setTimeout(() => {
            lvl()
        },10)
    }else if(time.innerHTML < 90){
        stop = setTimeout(() => {
            lvl()
        },100)
    }else if(time.innerHTML < 100){
        stop = setTimeout(() => {
            lvl()
        },500)
    }
}

lvl();


// yetkazib berish

let receipt = document.querySelector('.receipt')
let receiptWindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
let receiptWindowBtn = document.querySelector('.receipt__window-btn')
let addCart = document.querySelector('.addCart')


addCart.addEventListener('click', function (){
    receipt.style.display= 'block'
    setTimeout(() => {
        receipt.style.opacity = 1;
        receiptWindow.style.top = "20%";
    },100);


    let menu = "Sizning chekingiz: \n\n";
    let totalPrice = 0;
    let totalKcall = 0;


    for (const foodsKey in foods) {
        // console.log(foods[foodsKey])
        menu  = menu  + `${foods[foodsKey].name}  ${foods[foodsKey].amount}X
         ${foods[foodsKey].price} = ${foods[foodsKey].calcSum} \n\n`;
        totalPrice = totalPrice + foods[foodsKey].calcSum;
        totalKcall = totalKcall + foods[foodsKey].kcallSum;
    }

    receiptWindowOut.innerHTML = `${menu} \n\n Jami summa: ${totalPrice}sum 
    \n\n Jami kcall: ${totalKcall} kaloriya` ;

})

receiptWindowBtn.addEventListener('click', function (event){
    // location = "https://getbootstrap.com/docs/5.3/components/modal/";
    // location.reload();
    //
    // console.log(event.target)
    // console.log(event.currentTarget)

    if(event.target == event.currentTarget){
        receipt.style.opacity = 0;
        receiptWindow.style.top = "-100%";

        setTimeout(() => {
            receipt.style.display = "none";
            location.reload();
        },200)
    }

})

receipt.addEventListener('click', function (event){
    if(event.target == event.currentTarget){
        receipt.style.opacity = 0;
        receiptWindow.style.top = "-100%";

        setTimeout(() => {
            receipt.style.display = "none";
            location.reload();
        },200)
    }
})


// show image

let mainProductInfo = [...document.querySelectorAll('.main__product-info')]

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('click', function (){
        showImage(this)
    })
}
function showImage(viewImage){
    let parent = viewImage.closest('.main__product')
    let proImage  = parent.querySelector('.main__product img')
    let view = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let viewClose = document.querySelector('.view__close')

    view.classList.add('active')
    let x = proImage.getAttribute('src')

    if(proImage.hasAttribute('src')){
        image.setAttribute("src",x)
    }

    view.addEventListener('click', function (e){
        if(e.target == e.currentTarget){
            view.classList.remove('active')
        }
    })

    viewClose.addEventListener('click',() => {
        view.classList.remove('active')
    })
}







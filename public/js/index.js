// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");
const messageNotification = document.querySelector("#message-notification");
const messages =  document.querySelector(".messages")
const message = messages.querySelectorAll(".message")
const messageSearch = document.querySelector("#message-search")
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme")
const fontSizes = document.querySelectorAll(".choose-size span")
const root = document.querySelector(':root');
const colors = document.querySelectorAll(".chose-color span")
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')


//remove active class from all menu items
const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove("active");
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add("active");
        if(item.id !="notifications"){
            document.querySelector(".notifications-popup").style.display = "none"
        }
        else{
            document.querySelector(".notifications-popup").style.display = "block" 
            document.querySelector("#notifications .notification-count").style.display = "none"
        }
    })
})


//Messages
messageNotification.addEventListener("click",()=>{
    messages.style.boxShadow = "0 0 1rem  var(--color-primary)"
    messageNotification.querySelector('.notification-count').style.display ="none"
    setTimeout(()=>{
        messages.style.boxShadow = "none"
    },2000)
})

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            chat.style.display = "flex"
        }
        else{
            chat.style.display = "none"
        }
    })
}

messageSearch.addEventListener('keyup',searchMessage)

openThemeModal = ()=>{
    themeModal.style.display='grid'
}

closeThemeModal = (e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none'
    }
}

themeModal.addEventListener('click',closeThemeModal)

theme.addEventListener('click',openThemeModal)

removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active')
    })
}


/*  =====================================
Font Sizes
===================================*/
fontSizes.forEach(size=>{
   
    let fontSize;
   size.addEventListener('click',()=>{
    removeSizeSelector();
    size.classList.toggle('active')
    if(size.classList.contains("font-size-1")){
        fontSize = "8px"
        root.style.setProperty('--sticky-top-left','6.4rem');
        root.style.setProperty('--sticky-top-right','6.4rem');
    }else if(size.classList.contains("font-size-2")){
        fontSize = "10px"
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }else if(size.classList.contains("font-size-3")){
        fontSize = "12px"
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-7rem');
    }else if(size.classList.contains("font-size-4")){
        fontSize = "14px"
        root.style.setProperty('--sticky-top-left','-1rem');
        root.style.setProperty('--sticky-top-right','-12rem');
    }else if(size.classList.contains("font-size-5")){
        fontSize = "16px"
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
   })
    
}) 

/**********Colors************************* */
changeActiveColors=()=>{
    colors.forEach(color=>{
        color.classList.remove('active')
    })
}


colors.forEach(color=>{
    color.addEventListener('click',()=>{
        changeActiveColors()
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        }else if(color.classList.contains("color-2")){
            primaryHue = 152;
        }else if(color.classList.contains("color-3")){
            primaryHue = 352;
        }else if(color.classList.contains("color-4")){
            primaryHue = 52;
        }else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})


// Bg colors

let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

changeBg=()=>{
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
}

Bg2.addEventListener("click",()=>{
    darkColorLightness ='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';
    
    Bg2.classList.add('active')
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    changeBg()
})

Bg1.addEventListener("click",()=>{
    
    Bg1.classList.add('active')
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')
    window.location.reload()
})

Bg3.addEventListener("click",()=>{
    darkColorLightness ='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';
    
    Bg3.classList.add('active')
    Bg1.classList.remove('active')
    Bg2.classList.remove('active')
    changeBg()
})





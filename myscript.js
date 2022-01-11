
// ----------- HIỆU ỨNG SLIDE ------------
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;



prev.addEventListener("click", function(){
    prevSlide();
    updateCricleIndicator();
    resetTimer();
})

next.addEventListener("click", function(){
    nextSlide();
    updateCricleIndicator();
    resetTimer();
})


// create circle indicators (hiển thị đang biểu diễn ở slide thứ i)
function circleIndicators(){
    for(let i=0;i<slides.length;i++){
        const div=document.createElement("div");
        div.innerHTML=i+1;
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id=i;
        if(i==0){
            div.className="active";
        }
        indicator.appendChild(div);
    }
}
circleIndicators();


function indicateSlide(element){
    index = element.id;
    changeSlide();
    updateCricleIndicator();
    resetTimer();
}

// cập nhập số khi chuyển sang slide khác
function updateCricleIndicator(){
    for(let i=0; i<indicator.children.length;i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}



// Hàm prevSlide
function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }else{
        index--;
    }
    changeSlide();
}


//Hàm nextSlide
function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }else{
        index++;
    }
    changeSlide();
}


function changeSlide(){
    for(let i=0; i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}


function resetTimer(){
    // khi click vào nút controls hoặc indicator -> dừng thời gian chạy
    clearInterval(timer);
    // sau đó chạy timer lần nữa
    timer = setInterval(autoPlay, 8000);
}
// Hàm chạy slide tự động
function autoPlay(){
    nextSlide();
    updateCricleIndicator();
}
let timer = setInterval(autoPlay, 8000);




// ------------ BẬT/TẮT HỘP THOẠI CHAT ------------
const chat = document.querySelector('.js-mess')
const notificationMess = document.querySelector('.js-chatBox')
const chatClose = document.querySelector('.js-chat-close')
function showChat(){
    notificationMess.classList.add('open')
    clearInterval(auto)

}

function hideChatBox(){
    notificationMess.classList.remove('open')

}
    chat.addEventListener('click',showChat)
    chatClose.addEventListener('click',hideChatBox)

    // tự động bật hộp thoại sau 3s
var auto=setInterval(showChat,3000);

// ĐĂNG KÍ, ĐĂNG NHẬP

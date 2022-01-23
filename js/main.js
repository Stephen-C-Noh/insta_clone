const heart = document.querySelector( '.heart_btn'); // 하트 요소 부분을 선택해서 가져옴
const header = document.querySelector( '#header');
const sidebox = document.querySelector( '.side_box');

// use querySelectorAll to bring in all elements
const variableWidth = document.querySelectorAll(".contents_box .contents");

heart.addEventListener('click', function(){
  console.log('hit');
  heart.classList.toggle('on'); // when you click on heart, add .on class
});

function resizeFunc(){
  if(pageYOffset >= 10){
    let calcWidth = (window.innerWidth *0.5) + 167; // relocate according to webpage
    sidebox.style.left = calcWidth +'px';
  }

  if(matchMedia('screen and (max-width : 800px)').matches){
    // for numbers of contents, use array.
    for(let i = 0; i<variableWidth.length; i++){
      variableWidth[i].style.width = window.innerWidth -20 +'px';
    }
  }else{
    for(let i=0; i<variableWidth.length; i++){
      variableWidth[i].removeAttribute('style');
    }
  }
}

function scrollFunc(){
  console.log(pageYOffset);
  if(pageYOffset >= 10){ // if drags
    header.classList.add('on');
    sidebox.classList.add('on');
    resizeFunc();
  }else{
    header.classList.remove( 'on');
    sidebox.classList.remove( 'on');
    sidebox.removeAttribute( 'style');
  }
}

window.addEventListener( 'resize', resizeFunc);
window.addEventListener( 'scroll', scrollFunc); // when scroll event occurs, excute scrollFunc

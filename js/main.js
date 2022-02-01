const heart = document.querySelector( '.heart_btn'); // 하트 요소 부분을 선택해서 가져옴
const header = document.querySelector( '#header');
const sidebox = document.querySelector( '.side_box');

// use querySelectorAll to bring in all elements
const variableWidth = document.querySelectorAll(".contents_box .contents");
const deligation = document.querySelector(".contents_box");

/*
heart.addEventListener('click', function(){
  console.log('hit');
  heart.classList.toggle('on'); // when you click on heart, add .on class
});
*/

function deligationFunc(e){
  let elem = e.target; // clicked element.
  console.log(e.target);
  console.log(elem);

  // when misclicked:
  while(!elem.getAttribute('data-name')){
    // look for parent of elem
    elem = elem.parentNode;
    if(elem.nodeName === 'BODY'){ // if there's no event till body
      elem = null;
      return;
    } // keep accessing parent till finding data-name property.
  }

  if(elem.matches('[data-name="heartbeat"]')){
    // console.log("heart!!!!");
    $.ajax({
      Method:'POST', // if error occurs, change it into GET
      url:'data/like.json',
      data: 37,
      dataType:'json', // Type declartion.
      success: function(response){
        let likeCount =document.querySelector('#like-count-37');
        likeCount.innerHTML = response.like_count +'Likes';
      },
      error: function(request,status,error){
        alert('log-in required.');
        window.location.replace('https://www.google.ca'); // temporary error page
      }
    })
  }else if (elem.matches('[data-name="bookmark"]')) {
    console.log("bookmark!!");
  }else if (elem.matches('[data-name="share"]')) {
    console.log("share!!!!!!");
  }else if (elem.matches('[data-name="more"]')) {
    console.log("more!");
  }

  elem.classList.toggle('on'); // add 'on' class to elem
}

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
      if(window.innerWidth > 600)
        variableWidth[i].removeAttribute('style');
    }
  }
}

function scrollFunc(){
  console.log(pageYOffset);
  if(pageYOffset >= 10){ // if drags
    header.classList.add('on');
    if(sidebox){
      sidebox.classList.add('on');
    }resizeFunc();
  }else{
    header.classList.remove( 'on');
    if(sidebox){
      sidebox.classList.remove( 'on');
      sidebox.removeAttribute( 'style');
    }
  }
}

setTimeout(function (){
  scrollTo(0,0);
}, 100);

if(deligation){
  deligation.addEventListener('click', deligationFunc);
}

window.addEventListener( 'resize', resizeFunc);
window.addEventListener( 'scroll', scrollFunc); // when scroll event occurs, excute scrollFunc

/* 1. pc 버전 서브메뉴 관련 */
const menu = document.querySelector(`.menu__main`) /* 전체메뉴 : ul class="menu__main" */
const subMenus = document.querySelectorAll(`.list__drop`) /* 하위메뉴 ul class="list__drop" */
const panel = document.querySelector(`.header__panel`) /* 하위메뉴 나올때 나오는 판넬 */
const header = document.querySelector(`.header`) /* 전체 헤더 */

                // menu.addEventListener('', function(){}) <---- 기본구조
// 하위 메뉴를 보여 줌.
menu.addEventListener('mouseover', function(){
    panel.style.display = 'block';
    subMenus.forEach(function(subMenu){ // forEach 화살표 함수로 만들면편함.
    subMenu.style.display = 'block';
    })
})

// 마우스가 벗어나면 하위메뉴 숨김
header.addEventListener('mouseout',function(){
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){ // forEach 화살표 함수로 만들면편함.
    subMenu.style.display = 'none';
    })
})

panel.addEventListener('mouseout',function(){
    panel.style.display = 'none';
    subMenus.forEach(function(subMenu){ // forEach 화살표 함수로 만들면편함.
    subMenu.style.display = 'none';
    })
})


/* 2. 모바일 버전 메뉴 보이기, 숨기기 */
const Mhamburger = document.querySelector('.mobile.hamburger') //모바일버전 햄버거 버튼
const Mclose = document.querySelector('.mobile.close') // 모바일버전 닫기 버튼
const Mnav = document.querySelector('.header__Mnav') // 모바일버전 메뉴 전체 (하위 메뉴 포함)

Mhamburger.addEventListener(`click`, function(){
    Mnav.style.display = 'block';
})

Mclose.addEventListener(`click`, function(){
    Mnav.style.display = 'none';
})

/* 3. 모바일 하위 메뉴 보이기, 숨기기 */

function showHide(e){
    const MListDrop = e.children[2]; // 내가 선택한 메뉴의 하위메뉴
    // const displayAttr = MListDrop.style.display
    const displayAttr = window.getComputedStyle(MListDrop).display

    if (displayAttr === 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
}

/* 4. width가 767px 이상일 때 모바일 메뉴 보임을 방지 */

window.addEventListener('resize', function(){
    let winWidth = window.innerWidth; //윈도우 창 크기를 구함
    console.log(winWidth)
    if (winWidth >= 767) {
        Mnav.style.display = 'none'
    }
})
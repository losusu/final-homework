// 下拉菜单
var navigationBtn_1 = document.querySelector('#navigationBtn_1');
var navigationBtn_2 = document.querySelector('#navigationBtn_2');
var navigationBtn_3 = document.querySelector('#navigationBtn_3');
var navigationBtn_4 = document.querySelector('#navigationBtn_4');
var navigationBtn_5 = document.querySelector('#navigationBtn_5');
var navigationBtn_6 = document.querySelector('#navigationBtn_6');
var navigationBtn_7 = document.querySelector('#navigationBtn_7');
var navigationBtn_down_1 = document.querySelector('#navigationBtn_down_1');
var navigationBtn_down_2 = document.querySelector('#navigationBtn_down_2');
var navigationBtn_down_3 = document.querySelector('#navigationBtn_down_3');
var navigationBtn_down_4 = document.querySelector('#navigationBtn_down_4');
var navigationBtn_down_5 = document.querySelector('#navigationBtn_down_5');
var navigationBtn_down_6 = document.querySelector('#navigationBtn_down_6');
var navigationBtn_down_7 = document.querySelector('#navigationBtn_down_7');

function showDownWrap(navigationBtn,navigationBtn_down){
    navigationBtn.onmouseover = function(){
        navigationBtn_down.style.display = "block"    
    }
    navigationBtn.onmouseout = function(){
        navigationBtn_down.style.display = "none"    
    }
}

showDownWrap(navigationBtn_1,navigationBtn_down_1)
showDownWrap(navigationBtn_2,navigationBtn_down_2)
showDownWrap(navigationBtn_3,navigationBtn_down_3)
showDownWrap(navigationBtn_4,navigationBtn_down_4)
showDownWrap(navigationBtn_5,navigationBtn_down_5)
showDownWrap(navigationBtn_6,navigationBtn_down_6)
showDownWrap(navigationBtn_7,navigationBtn_down_7)
//模糊查询
let keyword = document.querySelector('.keyword');

let searchHelper = document.querySelector('.search-helper');

let searchArr = ['苹果手机','安卓手机','小灵通手机','二手手机'];

keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0;i < searchArr.length;i++){
        if(searchArr[i].indexOf(keyword.value)!=-1){
            searchHelper.innerHTML += '<p>'+ searchArr[i] +'</p>';
            searchHelper.style.display = 'block';
        }
    } 
}
keyword.onblur = function(){
    searchHelper.style.display = 'none';
}

// 轮播图切换

let img = document.querySelector('.img')

let imgArr = ['new/banner1.jpg','new/banner2.jpg','new/banner3.jpg','new/banner4.jpg']

let next = document.querySelector('.next')

let prev = document.querySelector('.prev')

let slide = document.querySelector('.slide')

let lis = document.querySelectorAll('.banner-btn li')
let count = 0

function cutImg(){
    img.src = './image/' + imgArr[count];
    for(i=0;i<lis.length;i++){
        lis[i].className = '';
    }
    lis[count].className = 'active';
}

let timer = setInterval(function(){
count++;
if(count>imgArr.length-1){
    count= 0;
}
cutImg();
},3000)

// 左右切图
next.onclick = function(){
    img.src = './image/' + imgArr[count++];
    if(count>imgArr.length-1){
    count= 0;
}
cutImg();
}

prev.onclick = function(){
    img.src = './image/' + imgArr[count--];
    if(count<0){
    count= 0;
}
cutImg();
}


slide.onmouseover = function(){
    clearInterval(timer);
}

slide.onmouseout = function(){
    timer = setInterval(function(){
count++;
if(count>imgArr.length-1){
    count= 0;
}
cutImg();
},3000)
}

// li摁扭点击
for(let i =0;i<lis.length;i++)
[
    lis[i].onclick = function(){
        count = i;
        cutImg();
    }
]

// 滚动条
let header = document.querySelector('.header')

let banner = document.querySelector('.banner')

let elevtor = document.querySelector('.elevtor')

let headerHeight = header.offsetHeight;

let bannerHeight = banner.offsetHeight;

let items = document.querySelectorAll('.content .items')
let elevtorA = document.querySelectorAll('.elevtor a')
let elevtorArr = [];


let base = header.offsetHeight + banner.offsetHeight;

let search = document.querySelector('.search')
let searchBox = document.querySelector('.search-box')
let form = document.querySelector('.form')
let searchLogo = document.querySelector('.search-logo')


for(let i = 0;i<items.length;i++){
    base = base + items[i].offsetHeight
    elevtorArr.push(base);
}

function clearColor(){
    for(let i = 0;i<elevtorA.length;i++){
        elevtorA[i].style.color = ''
    }
}

document.onscroll = function(){
    let top = document.documentElement.scrollTop;
    // 判断是否变成固定定位
if (top>= headerHeight + bannerHeight){
   elevtor.className = 'elevtor elevtor-fix';
   search.className = 'search search-fix'
   searchBox.style.height = '50px'
   form.style.top = '8px'
   searchLogo.style.display = 'block'
}else{
    elevtor.className = 'elevtor';
    search.className = 'search'
    searchBox.style.height = '60px'
    form.style.top = '25px'
    searchLogo.style.display = 'none'
}

//滚动到特定区域变色
if(top<headerHeight + bannerHeight){
   clearColor(); 
}
else if(top>= headerHeight + bannerHeight && top<elevtorArr[0]){
    clearColor();
    elevtorA[0].style.color = 'red';
}
else if(top>= elevtorArr[0] && top<elevtorArr[1]){
    clearColor();
    elevtorA[1].style.color = 'red';
}
else if(top>= elevtorArr[1] && top<elevtorArr[2]){
    clearColor();
    elevtorA[2].style.color = 'red';
}
else if(top>= elevtorArr[2] && top<elevtorArr[3]){
    clearColor();
    elevtorA[3].style.color = 'red';
}

}








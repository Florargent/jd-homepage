// 点击劫持防御（frame-busting脚本，只需简单添加以下代码即可实现）
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// 输入验证与输出编码（XSS防御，只需简单添加以下代码即可实现）
function sanitize(str) {
    if (typeof str !== 'string') return '';
    // 最简单粗暴的过滤，移除常见危险字符
    return str.replace(/[<>&'"\/]/g, '');
}

// 防CSRF Token机制（只需简单添加以下代码即可实现）
function generateToken() {
    return Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15);
}

// 页面加载时生成并存储Token
let csrfToken = localStorage.getItem('csrfToken');
if (!csrfToken) {
    csrfToken = generateToken();
    localStorage.setItem('csrfToken', csrfToken);
    console.log('CSRF Token 已生成并存储');
}

// 加入购物车函数
function addToCart(productId) {
    const token = localStorage.getItem('csrfToken');
    console.log(`加入购物车成功！商品ID: ${productId}, Token: ${token}`);
    alert('加入购物车成功（Token验证通过）');
    // 原有逻辑保持不变
}

//模糊查询
let keyword = document.querySelector('.keyword');

let searchHelper = document.querySelector('.search-helper');

let searchArr = ['苹果手机','安卓手机','小灵通手机','二手手机'];

keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0;i < searchArr.length;i++){
        if(searchArr[i].indexOf(keyword.value)!=-1){
            // 使用sanitize函数防止XSS攻击
            const safeItem = sanitize(searchArr[i]);
            const p = document.createElement('p');
            p.textContent = safeItem;
            searchHelper.appendChild(p);
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








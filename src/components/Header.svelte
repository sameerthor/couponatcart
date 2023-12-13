  <input type="checkbox" id="check">
    <nav>
        <div class="icon btn"><a href="/">couponATcart</a></div>
        <div class="search_box">
            <input type="search" placeholder="search here">
            <span class="fa fa-search"></span>
        </div>
        <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/store-categories">Categories</a></li>
            <li><a href="/stores">Coupons</a></li>
            <li><a href="/blog">Blog</a></li>
        </ol>
        <label for="check" class="bar">
            <span class="fa fa-bars" id="bars"></span>
            <span class="fa fa-times" id="times"></span>
        </label>
    </nav>
<style>
*{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
body{
    min-width: 350px;
    line-height: 1;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
html {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
/* ****************************************************** */
nav{
    display: flex;
    width: 100%;
    background-color: #f1f1fe;
    position: relative;
    justify-content: space-between;
    text-align: center;
    padding: 18px 30px;
    box-shadow: 5px 5px 10px #e7e5e5;
}
nav .icon a{ 
    font-size: 25px;
    font-weight: 800;
    color: #8983d5;
    cursor: pointer;
}
@media(max-width:400px){
    nav .icon a{
       margin-right: 3rem;
    }
}
nav ol{
    display: flex;
    list-style: none;
    margin: auto 0;
}
nav ol li{
    margin: 0 2px;
}
nav ol li a{
   color: #8983d5;
   font-size: 16px;
   text-decoration: none;
   text-transform: uppercase;
   letter-spacing: 1px;
   padding: 5px 10px; 
   font-weight: 500;
}
nav ol li:hover a{
    background-color: #fff;
    color: #0a5071;
}
nav .search_box{
    display: flex;
    margin: auto 0;
    height: 35px;
    line-height: 35px;
}
nav .search_box input{
 border: none;
 outline: none;
 background-color: #fff;
 height: 100%;
 padding: 0 10px;
 font-size: 20px;
 width: 350px;
}
nav .search_box span{
    color: #0a5071;
    font-size: 20px;
    background-color: #fff;
    height: 100%;
    padding: 8px;
    position: relative;
    cursor: pointer;
    z-index: 1;
}
nav .search_box span:hover{
    color: #fff;
}
nav .search_box span::after{
    height: 100%;
    width: 0%;
    content: "";
    background-color: #8983d5;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    transition: .3s;
}
nav .search_box span:hover::after{
    width: 100%;
}
nav .bar{
    position: relative;
    margin: auto;
    display: none;
}
nav .bar span{
    position: absolute;
    color: #fff;
    font-size: 35px;
}
input[type="checkbox"]{
    /* -webkit-appearance: none; */
    display: none;
}
@media screen and (max-width:1000px){
    nav{
        display: block;
        padding: 0;
    }
    nav .icon a{
        display: inline-block;
        padding: 15px 30px;
    }
    nav .search_box{
        width: 100%;
        display: inline-flex;
        justify-content: center;
        margin-bottom: 15px;
    }
    nav .search_box input{
        width: 90%;
    }
    nav ol{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        height: 0;
        visibility: hidden;
        transition: 0.3s;
    }
    nav ol li{
        text-align: center;
        transition: 0.3s 0.1s all;
        opacity: 0;
    }
    nav ol li a{
        color: #000;
        font-size: 20px;
        padding: 20px;  
        display: block;
    }
    nav ol li:nth-child(1){
       transform: translateX(-150px);
    }
    nav ol li:nth-child(2){
        transform: translateX(-200px);
     }
     nav ol li:nth-child(3){
        transform: translateX(-250px);
     }
     nav ol li:nth-child(4){
        transform: translateX(-300px);
     }
     nav ol li:nth-child(5){
        transform: translateX(-350px);
     }
    nav .bar{
        display: block;
        position: absolute;
        top: 20px;
        right: 80px;
        cursor: pointer;   
    }
    nav .bar #times{
        display: none;
    }
    #check:checked ~ nav .bar #times{
        display: block;
    }
    #check:checked ~ nav .bar #bars{
        display: none;
    }
    #check:checked ~ nav ol{
        visibility: visible;
        height: 465px;
    }
    #check:checked ~ nav ol li:nth-child(1),
    #check:checked ~ nav ol li:nth-child(2),
    #check:checked ~ nav ol li:nth-child(3),
    #check:checked ~ nav ol li:nth-child(4)
    {
        transform: translateX(0);
        opacity: 1;
    }  
}
@media(max-width:450px){
    nav .icon a{
        font-size: 1.8rem;
    }
    nav .search_box input{
        width: 85%;
    }
}
</style>    
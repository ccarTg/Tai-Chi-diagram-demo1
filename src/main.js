let html = document.querySelector('#html');
let style=document.querySelector('#style')

let string = `
/* 你好，我是一名新手玩家
 * 我要演示一个画板
 * 首先我要准备一个div
*/
#div1{
    border: 1px solid black;
    width: 200px;
    height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是由阴阳形成的
 * 阴中有阳，阳中有阴
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加点细节*/
#div1::before{
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 0;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}

`
let string2 = ''
let n = 0
let step = ()=>{
    setTimeout(()=>{
        if(string[n] === "\n"){
            //如果字符是回车，就转换
            string2 += "<br>"
        }else if(string[n] === " "){
            //如果字符是空格，就转换
            string2 += "&nbsp;"
        }
        else{//字符不是回车就照搬
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,9999999) //写完滚下去
        html.scrollTo(0,999999)
        if(n<string.length - 1){
            //如果n不是最后一个，就继续
            n += 1
            step()
        }      
    }, 10) 
}

step()

style.innerHTML=`
body{
    color:blue
}
`
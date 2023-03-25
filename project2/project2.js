const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const url = 'project2iced.json'

btn.oneclick = ()=>{
    getData();
}

function getData(){
    fetch(url)
}
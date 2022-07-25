let imgLocation="./image/page2/";

const categoryObject={
    title:"",
    img:"",
    type:""
}

const tap=[{name:"Web-site",active:true},{name:"Apps",active:true},{name:"Design",active:true},{name:"Marketing",active:true}];

let categoryArray=[
    {title:"Technoduck",img:imgLocation.concat("1.jpg"),lazy:imgLocation.concat("lazyLoading/1.jpg"),type:"Web-site"},
    {title:"Poster New Orlean vs Golden Star",img:imgLocation.concat("2.jpg"),lazy:imgLocation.concat("lazyLoading/2.jpg"),type:"Design"},
    {title:"Seafood Restaurant ",img:imgLocation.concat("3.jpg"),lazy:imgLocation.concat("lazyLoading/3.jpg"),type:"Apps"},
    {title:"Project Prime",img:imgLocation.concat("4.jpg"),lazy:imgLocation.concat("lazyLoading/4.jpg"),type:"Marketing"},
    {title:"Project Boxes",img:imgLocation.concat("5.jpg"),lazy:imgLocation.concat("lazyLoading/5.jpg"),type:"Apps"},
    {title:"Inspiration has no Borders",img:imgLocation.concat("6.jpg"),lazy:imgLocation.concat("lazyLoading/6.jpg"),type:"Web-site"},
    {title:"Limited Edition",img:imgLocation.concat("7.jpg"),lazy:imgLocation.concat("lazyLoading/7.jpg"),type:"Design"},
    {title:"Project LAB",img:imgLocation.concat("8.jpg"),lazy:imgLocation.concat("lazyLoading/8.jpg"),type:"Marketing"},
    {title:"Growing Business",img:imgLocation.concat("9.jpg"),lazy:imgLocation.concat("lazyLoading/9.jpg"),type:"Apps"}
];
const category=document.querySelector(".category");
let itemList=categoryArray.map((value,index)=>
        `<div class="item">
            <img loading="lazy" class="blur-up lazyloaded" data-src="${value.lazy}" src="${value.img}" alt="${value.title} LQIP"></img>
            <p class="type">${value.title}</p> <p class="category-title">${value.type}</p>
        </div>`
).join(" ");
category.innerHTML=itemList ;



const tapList=tap.map((val,index)=>
    `<li><input type="button" class="button" value=${val.name}></li>`
).join("")


const tapes=document.querySelector(".tapes");
tapes.innerHTML+=tapList;


document.querySelector('[value=All]').addEventListener("click",()=>{
    itemList=categoryArray.map((value,index)=>
            `<div class="item">
                <img loading="lazy" class="blur-up lazyloaded" src="${value.img}"  data-src="${value.lazy}" alt="${value.title} LQIP"></img>
                <p class="type">${value.title}</p> <p class="category-title">${value.type}</p>
            </div>`
    ).join(" ");
    category.innerHTML=itemList ;
})

tap.map((val,index)=>{
    const button = document.querySelector(`[value=${val.name}]`);
    button.addEventListener("click", () => {

        tap[index].active?tap[index].active=false:(tap.forEach((val)=>val.active=false),tap[index].active=true)

        const activeTapes=tap.filter((val)=>val.active).map((val)=>val.name);

        const categoryDisplay=categoryArray.filter((val)=>activeTapes.includes(val.type));

        if(categoryDisplay.length>0){
        itemList=categoryDisplay.map((value,index)=>
            `<div class="item">
                <img loading="lazy" class="blur-up lazyloaded" src="${value.img}"  data-src="${value.lazy}" alt="${value.title} LQIP"></img>
                <p class="type">${value.title}</p> <p class="category-title">${value.type}</p>
            </div>`
        ).join(" ");}
        else{ itemList=`<div class="empty"><h1 >Nothing To Show!</h1><pre><h3>Please Select form tapes above</h3></div>`};

        category.innerHTML=itemList ;
        
    });
});
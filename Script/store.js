let imgLocation="./image/page2/";

const categoryObject={
    title:"",
    img:"",
    type:""
}

const tap=[{name:"All",state:"active"},{name:"Web-site",state:"normal"},{name:"Apps",state:"normal"},{name:"Design",state:"normal"},{name:"Marketing",state:"normal"}];

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
const category=document.querySelector(".projects");


const tapList=tap.map((val,index)=>
    `<li class="filter-item"><button class="filter-button button-hover ${val.state}" value=${val.name}>${val.name}</button></li>`
).join("")

const tapes=document.querySelector(".filter-list");
tapes.innerHTML+=tapList;

let firstRender=categoryArray.map((value,index)=>
            `<li class="project" tabIndex="-1">
                <img loading="lazy" class="project-img"" data-src="${value.lazy}" src="${value.img}" alt="${value.title} width="370""></img>
                <div class="project-wrapper"><h3 class="project-title">${value.title}</h3> <p class="project-type">${value.type}</p></div>
            </li>`
        ).join(" ");

category.innerHTML=firstRender ;

tap.map((val,index)=>{
    const button = document.querySelector(`[value=${val.name}]`);

    button.addEventListener("click", () => {
        tap.map((but)=>document.querySelector(`[value=${but.name}]`).classList.remove("active"))
  
        document.querySelector(`[value=${val.name}]`).classList.add("active");


        let categoryDisplay=[]
        val.name==="All"?categoryDisplay=categoryArray:categoryDisplay=categoryArray.filter((value)=>value.type===val.name)
        

        let itemList=categoryDisplay.map((value,index)=>
            `<li class="project" tabIndex="-1">
                <img loading="lazy" class="project-img" data-src="${value.lazy}" src="${value.img}" alt="${value.title} width="370""></img>
                <div class="project-wrapper"><h3 class="project-title">${value.title}</h3> <p class="project-type">${value.type}</p></div>
            </li>`
        ).join(" ");

        category.innerHTML=itemList ;
        
    });
});
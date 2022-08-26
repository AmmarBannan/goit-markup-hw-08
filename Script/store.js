let imgLocation="./image/page2/";

const categoryObject={
    title:"",
    img:"",
    type:""
}

const tap=[{name:"All",state:"active"},{name:"Web-site",state:"normal"},{name:"Apps",state:"normal"},{name:"Design",state:"normal"},{name:"Marketing",state:"normal"}];

let categoryArray=[
    {title:"Technoduck",img:imgLocation.concat("1.jpg"),lazy:imgLocation.concat("lazyLoading/1.jpg"),type:"Web-site",description:"Technoduck is a state-of-the-art coronavirus distribution platform. Companies use this platform for digital espionage and attacks on competitors' secure servers."},
    {title:"Poster New Orlean vs Golden Star",img:imgLocation.concat("2.jpg"),lazy:imgLocation.concat("lazyLoading/2.jpg"),type:"Design",description:"description for :"},
    {title:"Seafood Restaurant ",img:imgLocation.concat("3.jpg"),lazy:imgLocation.concat("lazyLoading/3.jpg"),type:"Apps",description:"description for :"},
    {title:"Project Prime",img:imgLocation.concat("4.jpg"),lazy:imgLocation.concat("lazyLoading/4.jpg"),type:"Marketing",description:"description for :"},
    {title:"Project Boxes",img:imgLocation.concat("5.jpg"),lazy:imgLocation.concat("lazyLoading/5.jpg"),type:"Apps",description:"description for :"},
    {title:"Inspiration has no Borders",img:imgLocation.concat("6.jpg"),lazy:imgLocation.concat("lazyLoading/6.jpg"),type:"Web-site",description:"description for :"},
    {title:"Limited Edition",img:imgLocation.concat("7.jpg"),lazy:imgLocation.concat("lazyLoading/7.jpg"),type:"Design",description:"description for :"},
    {title:"Project LAB",img:imgLocation.concat("8.jpg"),lazy:imgLocation.concat("lazyLoading/8.jpg"),type:"Marketing",description:"description for :"},
    {title:"Growing Business",img:imgLocation.concat("9.jpg"),lazy:imgLocation.concat("lazyLoading/9.jpg"),type:"Apps",description:"description for :"}
];
const category=document.querySelector(".projects");


const tapList=tap.map((val,index)=>
    `<li class="filter"><button class="filter__button ${val.state}" value=${val.name}>${val.name}</button></li>`
).join("")

const filters=document.querySelector(".filters");
filters.innerHTML+=tapList;

let firstRender=categoryArray.map((value,index)=>
    `<li class="project" tabIndex="-1">
    <a class="project__link link" href="#">
        <div class="project__link__box">
            <img loading="lazy" data-src="${value.lazy}" src="${value.img}" alt="${value.title} width="370""></img>
            <div class="project__link__box__overlay"><p class="type">${value.description}</p><p class="title">${value.title}</p></div>
        </div>
        <div class="project__link__wrapper"><h3>${value.title}</h3> <p class="project-type">${value.type}</p></div>
    </a>
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
                <a class="project__link link" href="#">
                    <div class="project__link__box">
                        <img loading="lazy" data-src="${value.lazy}" src="${value.img}" alt="${value.title} width="370""></img>
                        <div class="project__link__box__overlay"><p class="type">${value.description}</p><p class="title">${value.title}</p></div>
                    </div>
                    <div class="project__link__wrapper"><h3>${value.title}</h3> <p class="project-type">${value.type}</p></div>
                </a>
            </li>`
        ).join(" ");

        category.innerHTML=itemList ;
        
    });
});
const loadNews = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json();
    const newsData = data.data.news_category.slice(0,5)

    eachData(newsData)

    // console.log(newsData);

}
// Tab section
const eachData = (news) => {
    const TabContainer = document.getElementById("tab-container")
    TabContainer.innerHTML = "";
    news.forEach((news) => {
        // console.log(news);
        const div = document.createElement("div")
        div.classList.add = `stabs justify-center" `;
        div.innerHTML = `<a onclick="displayNews('${news.category_id}')" class="tab font-bold">${news.category_name}</a> `;
        TabContainer.appendChild(div)
    });

}
// DISPLAY NEWS sections 

const displayNews = async (ID) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${ID}`)
    const data =await res.json();
    const mainNews = data.data
    const gridContainer = document.getElementById("grid-container")
    gridContainer.innerHTML = ""
    mainNews.forEach((news)=>{
        // console.log(news);
        const div = document.createElement("div")
        div.classList = `card bg-base-100 shadow-xl `
        div.innerHTML = `
        <figure><img src=${news.thumbnail_url} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${news.title.slice(0,35)}...</h2>
              <p>${news.details.slice(0,70)}</p>
              <div class="card-actions justify-between mt-6">
                <div class="flex gap-3 ">
                   <div>
                    <img class="w-12 rounded-full" src=${news.author?.img} alt="">
                   </div>
                    <div>
                    <p class="text-sm font-medium">name: ${news.author.name}</p>
                    <p class="text-sm font-medium">published_date: ${news.author.published_date.slice(0,10)} </p>
                    </div>
                </div>
                <button onclick=" modal('${news._id}')" class="btn btn-primary ">Details</button>
              </div>
            </div>
        
        `;
        gridContainer.appendChild(div)
    })

    // console.log(mainNews);
    

}
//MODAL SECTIONS 
const modal = async (id) =>{
    console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data = await res.json();
    const modalDetails = data.data[0];  

    console.log(modalDetails);

    const modalContainer = document.getElementById("my_modal_4")
    modalContainer.innerHTML = ""

    const div = document.createElement("div")
    div.innerHTML = `
    <form method="dialog" class="modal-box w-full max-full">
                 <div>
                    <img src=${modalDetails.image_url} alt="">
                </div>
                <h3 class="font-bold text-lg">${modalDetails.title}</h3>
                <p class="py-4">${modalDetails.details}</p>
                <div class="modal-action">
                    <!-- if there is a button, it will close the modal -->
                    <button class="btn">Close</button>
                </div>
            </form>
    `
    modalContainer.appendChild(div)

    
    my_modal_4.showModal()
    
}
 



loadNews()
displayNews("01")
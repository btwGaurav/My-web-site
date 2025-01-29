const accessKey = "Z-_HA-Iistsdi2ZYjTFCYdUN2k98MOsBBgKaeYr7A_0"
const searchForm = document.getElementById("search-form")
const searchbox = document.getElementById("search-box")
const searchresult = document.getElementById("search-result")
const showmore = document.getElementById("show-more")
const submit = document.getElementById("submit")

let keyword = "";
let page = 1
     

async function searchImages(){
    keyword = searchbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;


const response = await fetch(url);
const data = await response.json();


const results = data.results;

results.map((result) => {
    if (result.urls && result.links) {
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || "Image"; // Add an alt text fallback
  
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(image);
  
      searchresult.appendChild(imageLink);
    } else {
      console.warn("Missing URLs or links for result:", result);
    }
  });
  

}

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    page = 1;
    searchImages()
    showmore.style.display = "block"
})

showmore.addEventListener("click" , ()=>{
    page++;
    searchImages()
})
submit.addEventListener("click" , ()=>{
    e.preventDefault();
    page = 1;
    searchImages()
    showmore.style.display = "block"
})
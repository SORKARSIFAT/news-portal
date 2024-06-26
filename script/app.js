const fetchCategories = () =>{

    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then((res) => res.json())
    .then((data) => showCategories(data.data));
};

 

const showCategories = data =>{
 const categoriesContainer = document.getElementById("categories-container");

  data.news_category.forEach(singleCategories => {
    //  step 1 : This (advanced)

    //   categoriesContainer.innerHTML += `<a class ="nav-link"    href"#">${singleCategories?.category_name} </a>`


// Step 2: This easy

let linkContainer = document.createElement('p');
 linkContainer.innerHTML = `<a class ="nav-link" href"#" onclick="fetchCategoriesNews('${singleCategories.category_id}','${singleCategories.category_name}')">${singleCategories?.category_name} </a>`;
 categoriesContainer.appendChild(linkContainer);
  }) 
}

// fetch all newses available in a category  

const  fetchCategoriesNews =(category_id , category_name)  =>{
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => showAllNews (data.data , category_name))
}

     const showAllNews = (data , category_name)=>{
      console.log(data , category_name);
      document.getElementById("news-count").innerText = data.length;
     document.getElementById("category-name").innerText= category_name;
     data.forEach(singleNews =>{
      console.log(singleNews);
     })

     };

// load Categories function 
const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCategories(data.data.news_category);
    }
    catch (error) {
        console.log(error);
    }
}

// display Categories function 
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-conatiner');
    const categoryName = document.getElementById('category-name');

    categories.forEach(category => {
        console.log(category);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <a onclick="loadCategoryNews('${category.category_id}')" class="nav-link hover text-secondary" href="#">${category.category_name}</a>
        `
        categoriesContainer.appendChild(li);
    });

    loadCategoryNews('01');
}

loadCategories();
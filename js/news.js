
const loadCategoryNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/02`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNews(data.data);
}

const displayCategoryNews = (newses) => {
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('row', 'g-0');
    });
}
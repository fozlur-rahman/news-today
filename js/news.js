const loadCategoryNews = async (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNews(data.data);
    // console.log(data.data);
}

const displayCategoryNews = (newses) => {
    console.log(newses);
    const notFount = document.getElementById('not-found');

    const newsLength = document.getElementById('news-lenght');
    newsLength.innerText = newses.length;

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;

    newses.forEach(news => {
        const div = document.createElement('div');
        div.classList.add('row', 'g-0');
        console.log(news);
        div.innerHTML = `
           <div class="col-md-4">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details.slice(0, 400)}...</p>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <div>
                                    <img src="${news.author.img}" width="40px" alt="">
                                </div>
                                <div>
                                    <p class="m-0">${news.author.name}</p>
                                    <p class="m-0">${news.author.published_date}</p>
                                </div>
                            </div>
                            <div>
                                <p>${news.rating.number}</p>
                            </div>
                            <div>
                                <p>${news.total_view}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `
        newsContainer.appendChild(div);
    });
}
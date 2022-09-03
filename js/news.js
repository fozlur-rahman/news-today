const loadCategoryNews = async (categoryId) => {
    loaderSpiner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNews(data.data);
    // console.log(data.data);

}

const displayCategoryNews = (newses) => {
    // console.log(newses);

    const notFount = document.getElementById('not-found');
    if (newses.length === 0) {
        notFount.classList.remove('d-none');
    } else {
        notFount.classList.add('d-none');
    }
    const newsLength = document.getElementById('news-lenght');
    newsLength.innerText = newses.length;

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;

    newses.forEach(news => {
        const div = document.createElement('div');
        // div.classList.add('card');
        console.log(news);
        div.innerHTML = `
            <button onclick="loadDeatilsnews('${news._id}')" type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
               <div class=" row g-0 shadow my-3 p-4 rounded-3">
                <div class="col-md-3 ">
                    <img src="${news.thumbnail_url}" class="img-fluid rounded-start md-d-block" alt="...">
                </div>

                <div class="col-md-9">
                    <div class="card-body text-start">
                        <div class="">
                        <h5 class="card-title mb-3">${news.title}</h5>
                            <p class="card-text text-secondary">${news.details.slice(0, 400)}...</p>
                        </div>
                        <div style="height: 150px;" class="d-flex justify-content-between align-items-end">
                            <div class="d-flex align-items-center">
                                <div>
                                    <img class="rounded-5 me-2" src="${news.author.img}" width="45px" alt="">
                                </div>
                                <div>
                                    <p class="m-0 fs-6">${news.author.name}</p>
                                    <p class="m-0 fs-6 text-secondary">${news.author.published_date}</p>
                                </div>
                            </div>
                            <div>
                            <p><i class="fa-regular fa-eye"></i>  ${news.total_view}</p>
                                
                            </div>
                            <div>
                                <p>Rating: ${news.rating.number}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </button>    
                
        `
        newsContainer.appendChild(div);
    });
    loaderSpiner(false);
}

const loaderSpiner = isloading => {
    const loaderSection = document.getElementById('spiner');
    if (isloading) {
        loaderSection.classList.remove('d-none');
    } else {
        loaderSection.classList.add('d-none');
    }
}

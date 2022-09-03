// load Deatils news function 
const loadDeatilsnews = async (news_id) => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}?;`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayDetailsModal(data.data[0]);
    }
    catch (error) {
        console.log(error);
    }
}


// display Details Modal function 
const displayDetailsModal = (detailsNews) => {
    console.log(detailsNews)
    const detailsModal = document.getElementById('details-modal');
    detailsModal.innerHTML = ``;
    const div = document.createElement('div');
    div.innerHTML = `
            <div style="max-height:80vh;" class="shadow my-3 p-4 rounded-3 overflow-scroll">
                <div class=" ">
                    
                    <img style="max-height:350px;" src="${detailsNews.thumbnail_url}" class="img-fluid rounded-start md-d-block w-100 " alt="...">
                </div>

                <div class="">
                    <div class="card-body text-start">
                        <div class="">
                        <h5 class="card-title my-3">${detailsNews.title}</h5>
                            <p class="card-text text-secondary">${detailsNews.details}...</p>
                        </div>
                        <div style="height: 150px;" class="d-flex justify-content-between align-items-end">
                            <div class="d-flex align-items-center">
                                <div>
                                    <img class="rounded-5 me-2" src="${detailsNews.author.img}" width="45px" alt="">
                                </div>
                                <div>
                                    <p class="m-0 fs-6">${detailsNews.author.name}</p>
                                    <p class="m-0 fs-6 text-secondary">${detailsNews.author.published_date}</p>
                                </div>
                            </div>
                            <div>
                            <p><i class="fa-regular fa-eye"></i>  ${detailsNews.total_view}</p>
                                
                            </div>
                            <div>
                                <p>Rating: ${detailsNews.rating.number}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>        
    
    `
    detailsModal.append(div);
}
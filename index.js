async function fetchNews() {
    // https://newsdata.io/api/1/latest?apikey=pub_52355617acf125a80eda7c9428a1b09bc6ced&q=donald%20trump&region=washington-united%20states%20of%20america
    const baseurl = "https://saurav.tech/NewsAPI/";
    const top_headlines_api = `${baseurl}top-headlines/category/health/in.json`;

    try {
      const response = await fetch(top_headlines_api,
        {
          method: 'GET'
        });

      const result = await response.json();
      console.log(result);
      // console.log(result.data);
      let mainNews = ``;
      for (let i = 0; i < 10; i++) {
        mainNews += `
        <div class="card mb-3" style="max-width: 1300px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${result.articles[i].urlToImage}" class="img-fluid rounded-start" height="600" width="600" align-items-center style="padding:25px;margin:20px;" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${result.articles[i].title.slice(0, 70)}</h5>
                <p class="card-text">${result.articles[i].content.slice(0, 400)}</p>
                <p class="card-text"><b>- by ${result.articles[i].source.name}</b></p>
                <p class="card-text"><small class="text-body-secondary">${result.articles[i].publishedAt}</small></p>
                <a href="${result.articles[i].url}" class="card-link">Go to News</a>
              </div>
            </div>
          </div>
        </div>
        `;
      }
      document.getElementById("placeTheNewsHere").innerHTML = mainNews;

    } catch (error) {
      console.error('Error processing image:', error);
    }
  }
  fetchNews();
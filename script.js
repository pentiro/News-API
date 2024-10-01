document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4,
        articles: [
            {
              source: {
                id: null,
                name: "Digitimes"
              },
              author: "Heidi Tai",
              title: "Soft launch of Energy Taiwan 2024 highlights solar and energy storage supply chain",
              description: "The 2024 Energy Taiwan and Net-Zero Taiwan Exhibitions are kicking off on October 2. A pre-event press conference was held on September 30, featuring companies such as TSEC, Formosa Smart Energy, Tesla, and Delta Energy sharing insights on energy trends.",
              url: "https://www.digitimes.com/news/a20241001PD202/taiwan-2024-solar-electricity-development.html",
              urlToImage: "https://img.digitimes.com/newsshow/20241001pd202_files/2_b.jpg",
              publishedAt: "2024-10-01T01:50:01Z",
              content: "Save my User ID and Password. Some subscribers prefer to save their log-in information so they do not have to enter their User ID and Password each time they visit the site. To activate this function… [+307 chars]"
            },
            {
              source: {
                id: null,
                name: "Philippine Star"
              },
              author: null,
              title: "Google to invest $1 billion in Thailand",
              description: "Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data center, the US tech giant has announced, saying the move would support 14,000 jobs in the kingdom.",
              url: "https://www.philstar.com/business/2024/10/01/2389351/google-invest-1-billion-thailand",
              urlToImage: "https://media.philstar.com/photos/2023/09/27/google2023-05-1322-00-00_2023-09-27_22-26-28.jpg",
              publishedAt: "2024-10-01T01:49:58Z",
              content: "BANGKOK, Thailand — Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data center, the US tech giant has announced, saying the move would support 14,000 jobs in the kingdom. [+2370 chars]"
            },
            {
              source: {
                id: null,
                name: "CNBC"
              },
              author: null,
              title: "CNBC Daily Open: Markets just had an expectations-defying month",
              description: "The S&P 500 has fallen at least 4% in the last four Septembers. But the index charted a new trajectory this year to cap off a winning month and quarter.",
              url: "https://www.cnbc.com/2024/10/01/cnbc-daily-open-markets-just-had-an-expectations-defying-month-.html",
              urlToImage: "https://image.cnbcfm.com/api/v1/image/107429317-1718647090780-107429317-17183808522024-06-14t150732z_151487312_rc21b8ax5x6v_rtrmadp_0_usa-stocks.jpg?v=1719866767&w=1920&h=1080",
              publishedAt: "2024-10-01T01:12:00Z",
              content: "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what you… [+3905 chars]"
            }
          ]
    };
    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);
});
//apikey:o4doTyWmlYeGyNg7VQzaoYKtgt4eK13g
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=o4doTyWmlYeGyNg7VQzaoYKtgt4eK13g';

function setup(){
  noCanvas();
  loadJSON(url,gotData);

}

function gotData(data) {
   console.log(data.response.docs[0].web_url);
    var articles = data.response.docs;

    for (var i = 0; i < 10; i++) {
        createElement('h1', articles[i].headline.main);
        createP(articles[i].snippet);

    }
}
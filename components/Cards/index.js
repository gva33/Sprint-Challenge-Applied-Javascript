// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articles = document.querySelector('.cards-container')
const promise = axios.get('https://lambda-times-backend.herokuapp.com/articles')

promise
.then (data => {
   console.log('RESPONSE',data.data.articles)
   const entries = data.data.articles
   Object.keys(entries).forEach(function (y) {
    articles.appendChild(newComponent(entries[y]))
    console.log(entries[y])
   })
})
.catch(error => {
    console.log('Error')
})

function newComponent(headliner,authorA,authorPhoto){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const img = document.createElement('img');
    const container = document.createElement('div');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    container.classList.add('img-container');
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(container);
    author.appendChild(authorName);
    container.appendChild(img);

    headline.textContent = headliner;
    author.textContent = authorA;
    img.src = authorPhoto;

    return card;

}
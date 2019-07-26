// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then (data => {
    const info = data.data;
    console.log('Info', info);
    const topics = document.querySelector('.topics')
        for (x=0; x<info.topics.length; x++){
            topics.appendChild(newTab(info.topics[x]));
            console.log('stuff', info.topics[x]);
            } 
        });
    
function newTab(i) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('tab');
        newDiv.textContent = i;
        return newDiv;
}
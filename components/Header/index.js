// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const head = document.querySelector('.header-container');
const head2 = Header('SMARCH 28, 2019', 'Lambda Times', '98°');
console.log(head2);
head.appendChild(head2);

function Header(march, name, num) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h = document.createElement('h');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(h);
    header.appendChild(temp);

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = march;
    h.textContent = name;
    temp.textContent = num;

    return header;
}



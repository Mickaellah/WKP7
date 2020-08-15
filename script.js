// A big array that contains some objects that I need to start this project.
const books = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        genre: 'Fantasy',
        pages: 323,
        status: true,
    },

    {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        genre: 'IT',
        pages: 434,
        status: false,
    },

    {
        title: 'Refactoring UI',
        author: 'Adam Wathan',
        genre: 'Design',
        pages: 200,
        status: true,
    },

    {
        title: 'Pachinko',
        author: 'Min Jin Lee',
        genre: 'Fiction',
        pages: 496,
        status: true,
    }
];

console.log(books);



// Grab the elements that might be needed in this project.
const form = document.querySelector('form');
const table = document.querySelector('.container');
const tableBody = document.querySelector('.tbody');
const addBttn = document.querySelector('.add_button');

// Generate the books objects into html elements.
const loadBookList = () => {
    const html = books.map(book => 
        `
        <tr class="table-row">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" class="checkbox"></td>
            <td>
                <button class="delete-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z" fill="#747474"/>
                    </svg>
                </button>
            </td>
        </tr>
        `).join(' ');
    tableBody.insertAdjacentHTML("beforeend", html);
};
loadBookList();

// An empty array to hold the state.
const items = [];


// A function for the handling the add button in the form.
const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const pages = form.pages.value;
    const status = form.status.value;
    console.log(author);

    const item = {
        title: title,
        author: author,
        genre: genre,
        pages: pages,
        status: status,
        id: Date.now(),
    };
    items.push(item);
    tableBody.dispatchEvent(new CustomEvent('addItem'));

    const html = items.map(item => `
    <tr class="table-row">
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.genre}</td>
        <td>${item.pages}</td>
        <td><input type="checkbox" class="checkbox"></td>
        <td>
            <button class="delete-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z" fill="#747474"/>
                </svg>
            </button>
        </td>
    </tr>
    `).join('');
    tableBody.insertAdjacentHTML("beforeend", html);
    form.reset();
};


// A function to convert an object to a string for the local storage to store it.
const mirroToLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(items));
};

// A fnction to convert back the string that we've just convert into an object.
const restoreFromLocalStorage = () => {
    const listsOfItems = JSON.parse(localStorage.getItem('items'));
    if (listsOfItems) {
        items.push(...listsOfItems);
    }
    tableBody.dispatchEvent(new CustomEvent('addItem'));
};

tableBody.addEventListener('addItem', mirroToLocalStorage);



const markAsRead = id => {
    const itemRef = items.find(item => item.id === id);
    console.log(itemRef);
    tableBody.dispatchEvent(new CustomEvent('addItem'));
};


/*****======= Event listeners =======******/
form.addEventListener('submit', handleSubmit);
tableBody.dispatchEvent(new CustomEvent('addItem'));


window.addEventListener('click', e => {
    const deleteBtn = e.target.matches('button.delete-button');
    console.log(deleteBtn);
    // deleteBtn.closest('.table-row').remove();
});

window.addEventListener('click', (e) => {
    const id = Number(e.target.value);
    if (e.target.matches('input[type="checkbox"]')) {
        markAsRead(id);
    }
});

restoreFromLocalStorage();

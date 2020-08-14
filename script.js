// A big array that contains some objects that I need to start this project.
const books = [
    {
        title: 'Harry Potter and the Philosopher Stone',
        author: 'JK Rowling',
        genre: 'Fantasy',
        pages: 323,
        status: true,
    },

    {
        title: 'Clean Code: A Handbook of Software Engineering',
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
const table = document.querySelector('.container');
const tableRow = document.querySelector('.table_row2');
const addBttn = document.querySelector('.add_button');

// Generate the books objects into html elements.
function loadBookList() {
    // let listOfBooks = [...books];
    const html = books.map(book => 
        `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td>${book.status}</td>
            <td>
                <button class="delete_button" type="button">Delete</button>
            </td>
        </tr>
        `).join(' ');
    tableRow.insertAdjacentHTML("beforeend", html);
};
console.log(loadBookList);
loadBookList();


// A function for the handling the add button in the form.
const handleClick = (event) => {
    console.log(event.target);
    if (event.target.matches('form')) {
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const genre = form.genre.value;
        const pages = form.pages.value;
        const status = form.status.value;

        const html = `
        <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${genre}</td>
            <td>${pages}</td>
            <td>${status}</td>
            <td>
                <button class="delete_button" type="button">Delete</button>
            </td>
        </tr>
        `;

        tableRow.innerHTML = html;
    }

}


// An event listener for the add button to push the form in the table under.
addBttn.addEventListener('click', handleClick);



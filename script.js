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
function loadBookList() {
    const html = books.map(book => 
        `
        <tr class="table-row">
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
    tableBody.insertAdjacentHTML("beforeend", html);
};
loadBookList();


// A function for the handling the add button in the form.
const handleClick = (event) => {
    // console.log(event.target);
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
        tableBody.innerHTML = html;
    }
    form.reset();
}


// An event listener for the add button to push the form in the table under.
addBttn.addEventListener('click', handleClick);


window.addEventListener('click', (e) => {
    const deleteBtn = e.target.matches('button.delete_button');
    console.log(deleteBtn);

})



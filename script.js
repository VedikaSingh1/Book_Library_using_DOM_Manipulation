const form = document.querySelector(".book-form");
const bookEntries = document.querySelector(".book-entries");

// Function to create a new book entry
function createBookEntry(title, author, genre, year) {
  const bookEntry = document.createElement("div");
  bookEntry.classList.add("book-entry");

  bookEntry.innerHTML = `
    <p>Title: ${title}</p>
    <p>Author: ${author}</p>
    <p>Genre: ${genre}</p>
    <p>Year: ${year}</p>
    <button class="delete-button">Delete</button>
  `;

  // Event listener for delete button
  const deleteButton = bookEntry.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    bookEntry.remove();
  });

  return bookEntry;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const genreInput = document.getElementById("genre");
  const yearInput = document.getElementById("year");

  const title = titleInput.value;
  const author = authorInput.value;
  const genre = genreInput.value;
  const year = yearInput.value;

  if (title && author && genre && year) {
    const bookEntry = createBookEntry(title, author, genre, year);
    bookEntries.appendChild(bookEntry);

    // Clear form inputs
    titleInput.value = "";
    authorInput.value = "";
    genreInput.value = "";
    yearInput.value = "";
  }
}

// Add event listener to the Add Book button
const addBookButton = document.getElementById("addBook");
addBookButton.addEventListener("click", handleFormSubmit);

// FILTER BY GENRE
// Function to filter book entries by genre
// Function to filter book entries by genre
function filterBookEntriesByGenre() {
  const filterGenreInput = document.getElementById("filterGenre");
  const filterGenre = filterGenreInput.value.toLowerCase();

  const bookEntries = document.querySelectorAll(".book-entry");

  bookEntries.forEach((entry) => {
    const genreElement = entry.querySelector("p:nth-child(3)"); // Assuming Genre is the third <p> element
    const entryGenre = genreElement.textContent.toLowerCase();

    if (entryGenre.includes(filterGenre) || filterGenre === "") {
      entry.style.display = "block"; // Show matching entries or all entries if the filter is cleared
    } else {
      entry.style.display = "none"; // Hide non-matching entries
    }
  });
}

// Add event listener to the Filter button
const filterButton = document.getElementById("filter");
filterButton.addEventListener("click", filterBookEntriesByGenre);

// Prevent the form from submitting when pressing Enter in the filter input
const filterGenreInput = document.getElementById("filterGenre");
filterGenreInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

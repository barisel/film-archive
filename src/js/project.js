const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clearFilm = document.getElementById("clear-films");

// UI Objesini başlatma
const ui = new UI();

// Storage a ekleme
const storage = new Storage();

// Event Listeners
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function() {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
  cardBody.addEventListener("click", deleteFilm);
  clearFilm.addEventListener("click", deleteFilmAll);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurun", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); // Ara yüze film ekleme.
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Film başarı ile eklendi.", "success");
  }

  ui.clearInputElements(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "clear-films") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.textContent
    );
    ui.displayMessages("Silme işlemi başarılı", "success");
  }
}

function deleteFilmAll() {
  if (confirm("Tüm datalar silinecek. Emin misiniz?")) {
    ui.clearAllFilmsUI();
    storage.clearAllFilmsStorage();
  }
}

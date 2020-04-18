function UI() {}

UI.prototype.addFilmToUI = function(newFilm) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.director}</td>
    <td>${newFilm.title}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
};

UI.prototype.clearInputElements = function(element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

UI.prototype.displayMessages = function(message, type) {
  const cardBody = document.querySelectorAll(".card-body")[0];
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);

  setTimeout(function() {
    div.remove();
  }, 2000);
};

UI.prototype.loadAllFilms = function(films) {
  let filmList = document.getElementById("films");
  films.forEach(element => {
    filmList.innerHTML += `<tr>
    <td><img src="${element.url}" class="img-fluid img-thumbnail"></td>
    <td>${element.title}</td>
    <td>${element.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
  });
};

UI.prototype.deleteFilmFromUI = function(film) {
  film.parentElement.parentElement.remove();
};

UI.prototype.clearAllFilmsUI = function(){
  const filmLists = document.getElementById("films");
  // filmLists.innerHTML = ""; Bu yavaş bir işlem
  while (filmLists.firstElementChild !== null) {
    filmLists.firstElementChild.remove();
  }
}

const searchBar = document.getElementById("searchBar"),
    searchButton = document.getElementById("searchButton");

function toggleSearchBar() {
    searchButton.addEventListener("click", function () {
        searchBar.classList.toggle("show-search");
    });
}

toggleSearchBar();

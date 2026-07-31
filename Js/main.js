const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const movies =
            document.querySelectorAll(".movie-card");

        movies.forEach(movie => {

            const title =
                movie.dataset.title.toLowerCase();

            if (title.includes(value)) {

                movie.style.display = "block";

            } else {

                movie.style.display = "none";

            }

        });

    });

}
window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("splash")
            .style.display = "none";

    }, 3000);

});
function toggleMenu() {

    document
        .querySelector(".nav-links")
        .classList.toggle("active");

}
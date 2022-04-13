const ENDPOINT = "projects.json";
const output_projects = document.querySelector("#project-container");

fetch(ENDPOINT)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      output_projects.innerHTML += `<section class= "all-projects"> <div class="project-name">
         ${el.name} </div> <br>
        <div class= "description"> ${el.description}  </div> <br> <div class="project-image-container">
         <img class="project-image" src=${el.image}></div> </section> <br> `;
    });
  });

// function showProjects(data) {
//   main.innerHTML = "";

//   data.forEach((movie) => {
//     const { title, poster_path, vote_average, overview } = movie;
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("movie");
//     movieEl.innerHTML = `   <img
//           src="${IMG_URL + poster_path}"
//           alt="${title}"
//         />
//         <div class="movie-info">
//           <h3>${title}</h3>
//           <span class="${getColor(vote_average)}">${vote_average}</span>
//         </div>

//         <div class="overview">
//         ${overview}
//         </div>`;

//     main.appendChild(movieEl);
//   });
// }

window.addEventListener("load", function () {
  window.localStorage.clear();

  // const endpoint = "https://api.tvmaze.com/shows";
  // const endpointSearch = "https://api.tvmaze.com/search/shows?q=:";

  const baseUrl = "https://api.tvmaze.com";

  let main = document.querySelector(".main-div");
  let top50 = [];

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const request = new XMLHttpRequest();
  request.open("GET", `${baseUrl}/shows`, true);
  request.onload = function () {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);

      let sortedShow = data.sort(function (x, y) {
        return y.rating.average - x.rating.average;
      });

      top50 = sortedShow.slice(0, 50);
      top50.forEach(function (element) {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("data-our-key", element.id);
        mainDiv.classList = "tv-div";
        let img = document.createElement("img");
        img.setAttribute("src", element.image.medium);
        let title = document.createElement("h4");
        title.textContent = element.name;
        main.append(mainDiv);
        mainDiv.append(img);
        mainDiv.append(title);
      });

      let div = document.querySelectorAll(".tv-div");
      div.forEach(function (element) {
        element.addEventListener("click", function (event) {
          let key = element.getAttribute("data-our-key");

          console.log(key);
          window.localStorage.setItem("id", key);
          document.location = "second.html";
        });
      });
    }
  };
  request.send();

  /************* SEARCH INPUT FIELD ******************************************* */
  let ul = null;

  // const searchResultsWrapper = document.querySelector('.search-results');

  const btnSearch = document.getElementById("btnSearch");
  btnSearch.addEventListener("keyup", function (event) {
    console.log(event);
    if (!event.target.value) {
      return;
    }
    const requestSearch = new XMLHttpRequest();
    console.log({ requestSearch });
    requestSearch.open(
      "GET",
      `${baseUrl}/search/shows?q=${event.target.value}`,
      true
    );
    requestSearch.onload = function () {
      if (requestSearch.status === 200) {
        const searchResultsWrapper = document.querySelector(".search-results");
        console.log({ searchResultsWrapper });
        if (searchResultsWrapper && searchResultsWrapper.children.length > 0) {
          removeAllChildNodes(searchResultsWrapper);
        }

        const searchResults = JSON.parse(requestSearch.responseText);
        console.log({ searchResults });

        if (!searchResultsWrapper) {
          ul = document.createElement("ul");
          ul.classList.add("search-results");
          main.append(ul);
        }

        searchResults.forEach(function (element) {
          console.log(element);
          let text = document.createElement("h5").textContent;

          let li = document.createElement("li");
          li.classList.add("single-result");
          li.innerText = element.show.name;
          li.setAttribute("data-our-key", element.show.id);
          ul.append(li);
        });
      }
    };
    requestSearch.send();
  });

  /************* END SEARCH INPUT FIELD ******************************************* */

  document.addEventListener("click", function (event) {
    //event Delegation
    console.log(event.target);
    if (event.target.classList.contains("single-result")) {
      const id = event.target.getAttribute("data-our-key");
      console.log(id);

      window.localStorage.setItem("id", id);
      document.location = "second.html";
    }
  });
});

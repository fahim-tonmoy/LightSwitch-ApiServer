console.log("connected");

let btn = document.getElementById("fetchBtn");
const getData = () => {
  const token =
    "d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3";
  const url = "https://gorest.co.in/public/v1/users";
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayFetchData(data.data);
    });
};

const displayFetchData = (data) => {
  const fetchData = data;
  for (const item of data) {
    let fetchedContent = document.getElementById("fetchedContent");
    const displayDiv = document.createElement("div");
    displayDiv.innerHTML = `
      <div class="card">
      <h1 class="name">Name: ${item.name}</h1>
      <h3 class="email">Email: ${item.email}</h3>
      <h3 class="email">Id: ${item.id}</h3>
      <h3 class="gender">Gender:  ${item.gender}</h3>
      <h3 class="status">Status: ${item.status}</h3>
      </div>
    `;
    fetchedContent.appendChild(displayDiv);
  }
};

getData();

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const cards = document.querySelector(".cards");

function newCard(Data) {
  const cardWrapper = document.createElement("div");
  const image = document.createElement("img");
  const CardInfo = document.createElement("div");
  const headingThree = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Classes
  cardWrapper.classList.add("card");
  image.src = Data.then(response => {
    const newData = response.data.avatar_url;
    image.src = newData;
  });

  CardInfo.classList.add("card-info");
  headingThree.classList.add("name");
  username.classList.add("username");
  profileLink.href = Data.then(response => {
    const newData = response.data.html_url;
    profileLink.href = newData;
  });

  // Content
  headingThree.textContent = Data.then(response => {
    const newData = response.data.name;
    if (newData === null) {
      headingThree.textContent = "No Name";
    } else {
      headingThree.textContent = newData;
    }
  });

  username.textContent = Data.then(response => {
    const newData = response.data.login;
    username.textContent = newData;
  });

  location.textContent = Data.then(response => {
    const newData = response.data.location;
    location.textContent = `Location: ${newData}`;
  });

  profile.textContent = `Profile: `;

  profileLink.textContent = Data.then(response => {
    const newData = response.data.html_url;
    profileLink.textContent = newData;
  });

  followers.textContent = Data.then(response => {
    const newData = response.data.followers;
    followers.textContent = `Followers: ${newData}`;
  });

  following.textContent = Data.then(response => {
    const newData = response.data.following;
    following.textContent = `Following: ${newData}`;
  });

  bio.textContent = Data.then(response => {
    const newData = response.data.bio;
    bio.textContent = `Bio: ${newData}`;
  });

  // Tree structure
  cards.append(cardWrapper);
  cardWrapper.append(image);
  cardWrapper.append(CardInfo);
  CardInfo.append(headingThree);
  CardInfo.append(username);
  CardInfo.append(location);
  CardInfo.append(profile);
  profile.append(profileLink);
  CardInfo.append(followers);
  CardInfo.append(following);
  CardInfo.append(bio);

  return cardWrapper;
}

// link function
function person(link) {
  const axiosPromises = axios.get(`${link}`);
  return axiosPromises;
}

newCard(person("https://api.github.com/users/nuvallo"));
followersArray.push("https://api.github.com/users/tetondan");
followersArray.push("https://api.github.com/users/dustinmyers");
followersArray.push("https://api.github.com/users/justsml");
followersArray.push("https://api.github.com/users/Heart8reak");
followersArray.push("https://api.github.com/users/bigknell");
followersArray.forEach(user => {
  newCard(person(user));
});

const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-btn')
const card = document.querySelector('.card')

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    card.classList.add('active')
    fetch(`https://api.github.com/users/${searchInput.value}`)
        .then(resp => resp.json())
        .then(data => findUser(data))

    searchInput.value = ''
})

function findUser(resp) {
    let cardDisplay = ``;

    cardDisplay +=
        `
                <div class="user-about-container">
    
                    <div class="profile-photo">
                        <img src=${resp.avatar_url} alt="">
                    </div>
    
                    <div class="user-bio">
                        <h2>${resp.name}</h2>
                        <a href = https://github.com/${resp.login} target="_blank">@${resp.login}</a>
                        <p>${resp.bio}</p>
                    </div>
    
                    <span>Joined  ${resp.created_at.slice(0,10)}</span>
                </div>
    
                <div class="repos-follows">
                     <p>Repos <br> ${resp.public_repos}</p>
                     <p>Followers <br> ${resp.followers}</p>
                    <p>Following <br> ${resp.following}</p>
                </div>
    
                 <div class="location-work">
                     <div class="bottom">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>${resp.location}</p>
                    </div>
    
                    <div class="bottom">
                         <i class="fab fa-twitter"></i>
                        <p>@${resp.twitter_username}</p>
                    </div>
    
                    <div class="bottom">
                        <i class="fas fa-link"></i>
                        <p>${resp.blog}</p>
                    </div>
    
                    <div class="bottom">
                        <i class="fas fa-building"></i>
                        <p>${resp.company}</p>
                    </div>
                </div>
    
        `
    card.innerHTML = cardDisplay;
}










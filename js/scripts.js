let owner = "pxldevv";
let user;

async function fetchGithubUser(username) {
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('User not found or failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchGithubUser(owner)
    .then(fetchedUser => {
        if (!fetchedUser) {
            throw new Error("Fetched user is undefined");
        }

        user = fetchedUser;
        document.title = user.name;
        document.getElementById("username").innerText = user.name;
        document.getElementById("pfp").src = user.avatar_url;

    })
    .catch(error => {
        console.error("An error occurred:", error.message);
        document.title = "ogpxl";
        document.getElementById("username").innerText = "ogpxl";
        document.getElementById("pfp").src = "../assets/pxldevv.png"
    });


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.getElementById('loader').classList.add('slide-up');

    }, 1000);
}, false);




const btn = document.querySelector('#discUsr')

btn.addEventListener('click', () => {
    new Notify({
        status: 'success',
        title: 'Copied!',
        text: 'Discord Username successfully copied!',
        effect: 'fade',
        speed: 300,
        customClass: '',
        customIcon: '',
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
})
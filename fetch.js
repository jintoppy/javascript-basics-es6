fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(msg => console.log(msg));
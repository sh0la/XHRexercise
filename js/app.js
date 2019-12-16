const input = document.querySelector('#movie-name');
const form = document.querySelector('form');
const display = document.querySelector('#display')
const url = 'http://www.omdbapi.com/?'
const apikey = 'apikey=c4fc44ed'


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const userQuery = '&s=' + input.value;

  const searchUrl = `${url}${apikey}${userQuery}`

  //Using the AJAX function
  
  const xhr = new XMLHttpRequest();
  //xhr.response = 'json';
  xhr.open('GET', searchUrl)
  console.log(searchUrl)

  const handleSuccess = function() {
    console.log(xhr.responseText)
    let data = JSON.parse(xhr.responseText)

    for (each of data.Search) {
      display.insertAdjacentHTML('beforeend', `<img class='displayed' src=${each.Poster}>`)
    } 
  }

  function handleError () {
    throw new Error(networkError.message)
  }

  xhr.onload = handleSuccess;
  xhr.onerror = handleError;
  xhr.send();
})


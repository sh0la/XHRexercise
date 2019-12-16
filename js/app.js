const input = document.querySelector('#movie-name');
const form = document.querySelector('form');
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
      form.insertAdjacentHTML('afterend', `<img src=${each.Poster}>`)
      //console.log(`${each.Poster}/n`)
    }
    //console.log(data)
   
  }

  
  xhr.onload = handleSuccess;
  xhr.send();



})


function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  }

  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(json => appendId(json))
    .catch(error => appendError(error))
}


function appendId(json) {
  document.body.innerHTML = json.id
}

function appendError(error) {
  document.body.innerHTML = error.message
}
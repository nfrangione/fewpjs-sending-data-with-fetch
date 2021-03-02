let submitData = (nameInput, emailInput) => {
    let formData = {
        name: nameInput,
        email: emailInput
    }
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let p = document.createElement('p');
            p.innerHTML = object.id;
            document.body.appendChild(p);
        })
        .catch(function(error) {
            let p = document.createElement('p');
            p.innerHTML = error.message;
            document.body.appendChild(p);
        });
};

  

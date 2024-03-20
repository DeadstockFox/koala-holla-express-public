console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  
  //spot on DOM where koala table will go
  let koalaTable = document.querySelector('#viewKoalas');

  //GET request in getKoalas() function
  axios.get('/koalas').then((response) => {
    //our database table
    let koalaResponse = response.data;
    console.log(koalaResponse);


    for (koala of koalaResponse){
    koalaTable.innerHTML += `
      <td>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
      </td>
      
      `;
    };
  }).catch((error) => {
    //in case of error
    console.log(error);
  });
} 

function saveKoala(event){
  event.preventDefault();
  console.log( 'in saveKoala' );
/*
  let koalaName = document.querySelector('#nameIn').value
  let koalaAge = document.querySelector('#ageIn').value
  let koalaColor = document.querySelector('#colorIn').value
  let koalaTransfer = document.querySelector('#readyForTransferIn').value
  let koalaNotes = document.querySelector('#notesIn').value
*/
  let koalaPayload = {
    name: document.querySelector('#nameIn').value,
    favoriteColor: document.querySelector('#colorIn').value,
    age: document.querySelector('#ageIn').value,
    transfer: document.querySelector('#readyForTransferIn').value,
    notes: document.querySelector('#notesIn').value
  };

  axios.post('/koalas', koalaPayload).then(() => {
    console.log('success');
    getKoalas();
  }).catch((error) => {
    console.log('error in POST request:', error);
  });
 
}

getKoalas();

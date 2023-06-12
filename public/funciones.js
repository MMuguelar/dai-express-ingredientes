const BASE_URL_PIZZAS = 'http://localhost:5000/api/pizzas/';

async function getAll() {
  try {
    let url = BASE_URL_PIZZAS;
    console.log('getAll: ', url);
    const response = await axios.get(url);
    console.log(response.data);
    displayPizzas(response.data);
  } catch (error) {
    console.log(error);
  }
}

function getAll_Clear() {
  displayPizzas([]);
}

function displayPizzas(pizzas) {
  let table = '<table class="table table-striped table-hover">';
  table += `<thead class="table-dark"><tr><th class="col-1 text-center">Id</th><th class="col-3">Nombre</th><th class="col-5">Descripcion</th><th class="col-2 text-center">Importe</th><th class="col-1 text-center">Libre Gluten</th><th class="col-4">Ingredientes</th></tr></thead>`;
  pizzas.forEach((unPizza, index) => {
    table += `<tr>`;
    table += `<td scope="col" class="text-center">${unPizza.Id}</td>`;
    table += `<td scope="col">${unPizza.Nombre}</td>`;
    table += `<td scope="col">${unPizza.Descripcion}</td>`;
    table += `<td scope="col" class="text-center">${unPizza.Importe}</td>`;
    table += `<td scope="col" class="text-center">${unPizza.LibreGluten}</td>`;
    table += `<td scope="col">${unPizza.Ingredientes ? unPizza.Ingredientes.join(', ') : ''}</td>`;
    table += `</tr>`;
  });
  table += "</table>";
  document.getElementById("pizzas-list").innerHTML = table;
}



async function getById() {
  try {
    let id = document.getElementById('txtId').value;
    let url = BASE_URL_PIZZAS + id;
    console.log('getById: ', url);
    const response = await axios.get(url);
    console.log(response.data);

    displayUnaPizza(response.data, false);

  } catch (error) {
    displayUnaPizza({}, true);
  }
}

function getById_Clear() {
  displayUnaPizza({});
}

function displayUnaPizza(unaPizza, huboError) {
  let estilo = 'table-dark';
  if (huboError) {
    estilo = 'table-danger';
  }
  let table = '<table class="table table-striped table-hover">';
  table += `<thead class="${estilo}"><tr><th class="col-1 text-center">Id</th><th class="col-3">Nombre</th><th class="col-5">Descripcion</th><th class="col-2 text-center">Importe</th><th class="col-1 text-center">Libre Gluten</th><th class="col-4">Ingredientes</th></tr></thead>`;
  table += `<tr>`;
  table += `<td scope="col" class="text-center">${unaPizza.Id}</td>`;
  table += `<td scope="col">${unaPizza.Nombre}</td>`;
  table += `<td scope="col">${unaPizza.Descripcion}</td>`;
  table += `<td scope="col" class="text-center">${unaPizza.Importe}</td>`;
  table += `<td scope="col" class="text-center">${unaPizza.LibreGluten}</td>`;
  table += `<td scope="col">${unaPizza.Ingredientes ? unaPizza.Ingredientes.join(', ') : ''}</td>`;
  table += `</tr>`;
  table += "</table>";
  document.getElementById("pizzas-una").innerHTML = table;
}



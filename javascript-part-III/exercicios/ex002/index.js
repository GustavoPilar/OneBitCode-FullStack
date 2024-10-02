function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

const btnAdd = document.getElementById('btn-add');
const form = document.getElementById('userForm');
const developers = [];
let inputRows = 0;

btnAdd.addEventListener('click', function(ev) {
    const listTech = document.getElementById('list-tech');

    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = 'inputRow-' + rowIndex;
    newRow.className = 'inputRow';

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName');

    const expLabel = createLabel('Exepirência: ');
    const nameRadio = 'techExp-' + rowIndex;
    const id1 = 'expRadio-' + rowIndex + '.1';
    const expRadio1 = createInput(id1, '0-2 anos', nameRadio, 'radio');
    const expLabel1 = createLabel('0-2 anos', id1);
    const id2 = 'expRadio-' + rowIndex + '.2';
    const expRadio2 = createInput(id2, '3-4 anos', nameRadio, 'radio');
    const expLabel2 = createLabel('3-4 anos', id2);
    const id3 = 'expRadio-' + rowIndex + '.3';
    const expRadio3 = createInput(id3, '5+ anos anos', nameRadio, 'radio');
    const expLabel3 = createLabel('5+ anos', id3);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.innerText = 'Remover';
    removeBtn.addEventListener('click', function() {
        listTech.removeChild(newRow);
    });

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeBtn
    );

    listTech.appendChild(newRow);
});

form.addEventListener('submit', function(ev) {
    ev.preventDefault(); // Sem atualizar a página

    const fullNameInput = document.getElementById('name');
    const inputRows = document.querySelectorAll('.inputRow');

    let technologies = [];
    inputRows.forEach(function (row) {
        // #rowId input[name="techName"];
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value;
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value;
        technologies.push({name: techName, exp: techExp});
    })

    const newDev = {fullName: fullNameInput.value, technologies: technologies};
    developers.push(newDev);
    alert("Dev cadastrado com sucesso");

    fullNameInput.value = "";
    inputRows.forEach(function (row) {
        row.remove();
    });

    console.log(developers);
});

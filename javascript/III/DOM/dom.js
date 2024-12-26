function show() {

    // PEGA PELO ID
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    // PEGA PELA TAG
    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    // PEGA PELA CLASSE
    const contactsInputs = document.getElementsByClassName('contact-input');
    console.log(contactsInputs);

    // PEGA PELO NOME
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);

    // PEGA TODOS OS ELEMENTOS
    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts);

    // PEGA O PRIMEIRO ELEMENTO
    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact);
    console.log(firstContact.value)
}



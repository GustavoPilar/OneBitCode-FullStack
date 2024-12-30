let dev = {name: null, email: null, phone: null};
let technology = {type: null, experienceTime: null};
const tempTechs = [];
let count = 0;
const addTech = document.getElementById('addTechBtn');
const sign = document.getElementById('signBtn');
const inputsTech = document.getElementById('fieldsetInputsTech');
const techList = document.getElementById('tech-list');
const devList = document.getElementById('dev-list');

addTech.addEventListener('click', function(ev) {
    ev.preventDefault();
    count ++;

    const id = 'tech' + count;

    const newLi = document.createElement('li');
    newLi.id = id;
    
    const newInputText = document.createElement('input');
    newInputText.type = 'text';
    newInputText.setAttribute('placeholder', 'Digite a Tecnologia usada');
    newInputText.id = id + 'Input';
    newLi.append(newInputText);

    for (let i = 0; i < 3; i++) {
        const id = 'tech' + count + (i + 1);
        const name = 'techs' + count;
        const newInputRadio = document.createElement('input');
        const newLabelRadio = document.createElement('label');
        newInputRadio.id = id;
        newLabelRadio.setAttribute('for', id);
        newInputRadio.name = name;
        newInputRadio.type = 'radio';

        switch(i) {
            case 0: 
                newLabelRadio.textContent = '0 - 2 anos';
                newInputRadio.value = '0-2 anos';
                break;
            case 1:
                newLabelRadio.textContent = '3 - 4 anos';
                newInputRadio.value = '3-4 anos';
                break;
            default:
                newLabelRadio.textContent = '+5 anos';
                newInputRadio.value = '+5 anos';
        }

        newLi.append(newInputRadio, newLabelRadio);

        if (i == 2) {
            const removeBtn = document.createElement('button');
            removeBtn.id = newLi.id + 'RemoveBtn';
            removeBtn.textContent = 'Remover Tecnologia';
            removeBtn.addEventListener('click', (ev) => {     
                ev.preventDefault();
                techList.removeChild(document.getElementById(newLi.id));
                count --;
            
                const indice = tempTechs.indexOf(newLi.id);
            
                if (indice !== -1) {
                    tempTechs.splice(indice, 1);
                    console.log('removido com sucesso');
                }
                else {
                    console.log('Indice não encontrado');
                }
            });

            newLi.append(removeBtn);
        }
    }

    tempTechs.push(newLi.id);
    techList.append(newLi);
});


sign.addEventListener('click', function(ev) {
    ev.preventDefault();

    dev.name = document.getElementById('name').value;
    dev.email = document.getElementById('email').value;
    dev.phone = document.getElementById('phone').value;
    const devData = 'Desenvolvedor: ' + dev.name + ' - ' + dev.email + ' - ' + dev.phone;

    const fieldset = document.createElement('fieldset');
    fieldset.id = dev.name;
    const legend = document.createElement('legend');
    legend.textContent = devData;

    const newUl = document.createElement('ul');

    for (let i = 0; i < tempTechs.length; i++) {

        const inputCurrent = document.getElementById(tempTechs[i] + 'Input').value;
        let radioCurrent = null;

        for (let j = 1; j <= 3; j++) {
            const id = tempTechs[i] + j;

            if (document.querySelector('#' + id + '[type="radio"]:checked')) {
                radioCurrent = document.querySelector('#' + id + '[type="radio"]:checked').value;

                break;
            }
        }        

        technology.type = inputCurrent;
        technology.experienceTime = radioCurrent;

        const newLi = document.createElement('li');

        newLi.id = 'tech' + i + '-' + dev.name;
        const techString = technology.type + ' - ' + technology.experienceTime;
        newLi.append(techString);

        newUl.append(newLi);
    }

    fieldset.append(legend, newUl);
    devList.append(fieldset);
    document.getElementById('fieldsetDevs').removeAttribute('style');


    dev = {
        name: null,
        email: null,
        phone: null
    };

    for (let i = tempTechs.length - 1; i >= 0; i--) {
        const button = document.getElementById(tempTechs[i] + 'RemoveBtn');
        button.click();
    }

    tempTechs.splice(0, tempTechs.length);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
})


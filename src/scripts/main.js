document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.consult__form');

    const logradouro = document.getElementById('logradouro');
    const bairro = document.getElementById('bairro');
    const localidade = document.getElementById('localidade');
    const estado = document.getElementById('estado');
    const regiao = document.getElementById('regiao');
    const ddd = document.getElementById('ddd');
    const ibge = document.getElementById('ibge');
    const siafi = document.getElementById('siafi');

    const cep = document.getElementById('cep');

    const message = document.getElementById('error');
    const searchErrorText = 'Houve um erro na requisição!';
    const inputErrorText = 'O valor digitado é inválido!';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        message.style.display = 'none';

        const regexComTraco = /^[0-9]{5}[-][0-9]{3}$/
        const regexSemTraco = /^[0-9]{8}$/

        if(regexComTraco.test(cep.value.toString()) || regexSemTraco.test(cep.value.toString())){
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(archive => {
                return archive.json();
            })
            .then(object => {;
                const arrayOfKeys = Object.keys(object);
                const arrayOfValues = Object.values(object);
                const map = new Map();

                for(let i = 0; i < arrayOfKeys.length; i++){
                    if(arrayOfValues[i] == ''){
                        arrayOfValues[i] = 'INDEFINIDO';
                        arrayOfKeys[i] == arrayOfValues[i];
                    }
                    map.set(arrayOfKeys[i], arrayOfValues[i]);
                }

                logradouro.value = map.get('logradouro');
                bairro.value = map.get('bairro');
                localidade.value = map.get('localidade');
                estado.value = `${map.get('estado')} - ${map.get('uf')}`;
                regiao.value = map.get('regiao');
                ddd.value = map.get('ddd');
                ibge.value = map.get('ibge');
                siafi.value = map.get('siafi');
            })
            .catch((e) => {
                message.innerHTML = searchErrorText;
                message.style.display = 'block';
            })
        } else {
            message.innerHTML = inputErrorText;
            message.style.display = 'block';
        }

        cep.value = ''
    })


})


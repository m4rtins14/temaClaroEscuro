const trocarTema = document.getElementById('trocar-tema');
const body = document.body;

trocarTema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro')
})
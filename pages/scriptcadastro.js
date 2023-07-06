

const criarConta = () => {
const criarContaBtn = document.getElementById('criarContaBtn');
const formularioCadastro = document.getElementById('formularioCadastro');

criarContaBtn.addEventListener('click', function() {
  formularioCadastro.style.display = 'block';
}
)};


export default criarConta;
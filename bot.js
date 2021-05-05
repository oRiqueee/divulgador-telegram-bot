const token = "Token"; // Token do seu bot
const chatId = "ID"; // ID do chat no qual a mensagem deve ser enviada
const minhaMensagem = "Mensagem"; // Mensagem que deseja enviar
const intervaloEnvio = 120000; // Intervalo de envio das mensagens em milessegundos

const linkApi = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + minhaMensagem;

var qntID = document.getElementById('mensagens');
var qntMensagem = 1;

setInterval(() => {

    fetch(linkApi)
  .then(response => response.json())
  .then(data =>{
  
  qntID.innerText = qntMensagem++;
  
  
  })

}, intervaloEnvio);

const nftImage = document.getElementById('NFT-Image');
// criou uma constante que recebeu o id NFT-Image
const fullscreenButton = document.getElementById('fullscreen-button');
// criou uma constante que recebeu o id fullscreen-button

nftImage.addEventListener('mouseover', () => {
    // criou uma arrow function com addEventListener, enquanto o mouse estiver em cima da const nftImage, os efeitos dentro dessa função serão executados.
  nftImage.style.filter = 'blur(5px)';
  // aplica o filter com destorção de 5px
  fullscreenButton.style.display = 'block';
  // aplica o display block no button (view icon) que estava com display none.
});

fullscreenButton.addEventListener('mouseover', () => {
    //criou uma nova função para que o button continue com display block enquanto o mouse estiver em cima do próprio button, essa function foi necessária para que 
    nftImage.style.filter = 'blur(5px)';
    fullscreenButton.style.display = 'block';
  });

nftImage.addEventListener('mouseout', () => {
  // Criou uma função para realizar as alterações necessárias quando a imagem estiver em fullscreen
  nftImage.style.filter = 'none';
  //remove o filtro da imagem.
  fullscreenButton.style.display = 'none';
  // adiciona o display none no button.
});

fullscreenButton.addEventListener('click', () => {
  //function para realizar as alterações ao clicar no botão
    nftImage.classList.toggle('fullscreen');
    //adiciona/remove a class 'fullscreen' na nftImage.
    if (nftImage.classList.contains('fullscreen')) {
      //se a nftImage conter a classe 'fullscreen' realizará os códigos a seguir:
      nftImage.style.width = '100vw';
      nftImage.style.height = '100vh';
      // aumenta o tamanho da imagem.
      nftImage.style.objectFit = 'contain';
      // ajusta a imagem para não haver cortes.
      nftImage.style.position = 'fixed';
      nftImage.style.top = '0';
      nftImage.style.left = '0';
      //posicionamento da imagem na tela.
      nftImage.style.zIndex = '9999';
      //garante que a imagem cubra todos os itens da tela.
      fullscreenButton.style.display = 'none';
      //remove o botão ao adicionar o display none.
    } else {
      //caso não contenha a class 'fullscreen' irá aplicar o código a seguir:
      nftImage.style.width = 'auto';
      nftImage.style.height = 'auto';
      nftImage.style.position = 'static';
      nftImage.style.zIndex = 'auto';
    }
  });
  
  nftImage.addEventListener('click', () => {
    // função para remover a class 'fullscreen' e voltar a página como era anteriormente.
    if (nftImage.classList.contains('fullscreen')) {
      nftImage.classList.remove('fullscreen');
      nftImage.style.width = 'auto';
      nftImage.style.height = 'auto';
      nftImage.style.position = 'static';
      nftImage.style.zIndex = 'auto';
    }
  });
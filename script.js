const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showItem(index) {
  carouselItems.forEach(item => item.classList.remove('active'));
  carouselItems[index].classList.add('active');
}

// Inicializa o carrossel
showItem(currentItem);

// Função para avançar para o prsóximo item
function nextItem() {
  currentItem = (currentItem + 1) % carouselItems.length;
  showItem(currentItem);
}

// Função para voltar para o item anterior
function prevItem() {
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentItem);
}

// Adicione eventos de clique para botões de navegação (se necessário)
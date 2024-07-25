document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      makeDraggable(card);
    });
  });
  
  function makeDraggable(card) {
    let isDragging = false;
    let offsetX, offsetY;
  
    card.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - card.getBoundingClientRect().left;
      offsetY = e.clientY - card.getBoundingClientRect().top;
      card.style.position = 'absolute';
      card.style.zIndex = 1000;
      card.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      card.style.left = `${e.clientX - offsetX}px`;
      card.style.top = `${e.clientY - offsetY}px`;
    });
  
    document.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging = false;
      card.style.zIndex = '';
      card.style.cursor = 'grab';
    });
  }
  
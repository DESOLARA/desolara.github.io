function closePopup() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

function showPopup(title, description, characterId) {
  const overlay = document.getElementById('overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const characterPictures = document.getElementById('character-pictures');

  overlay.style.display = 'block';
  popupTitle.innerText = title;
  popupDescription.innerText = description;

  // Clear previous pictures
  characterPictures.innerHTML = '';

  // Dynamically add pictures based on the character
  for (let i = 1; i <= 2; i++) {
    const pictureCell = document.createElement('div');
    pictureCell.classList.add('picture-cell');

    const img = document.createElement('img');
    img.src = `character${characterId}_picture${i}.jpg`;
    img.alt = `Character ${characterId} Picture ${i}`;
    
    const descriptionP = document.createElement('p');
    

    pictureCell.appendChild(img);
    pictureCell.appendChild(descriptionP);

    characterPictures.appendChild(pictureCell);
  }
}

const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
  character.addEventListener('mouseenter', () => {
    character.style.transform = 'scale(1.1)';
  });

  character.addEventListener('mouseleave', () => {
    character.style.transform = 'scale(1)';
  });
});


function goToSynopsis() {
  window.location.href = 'sypnosis.html';
}



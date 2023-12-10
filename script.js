let currentIndex = 0;

function showPopup(index) {
  const overlay = document.getElementById('overlay');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');

  overlay.style.display = 'block';
  popupTitle.innerText = `Setting ${index + 1}`;
  popupDescription.innerText = getPopupText(index);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

function getPopupText(index) {
  switch (index) {
    case 0:
      return "The Citadel. At the heart of the desolation lies the imposing Citadel, a huge fortification that formerly stood for power and wealth. Its soaring spires are now worn and fractured, symbolizing a society that has collapsed from within. The magnificent décor of the once-grand halls is now faded and covered in shadows, yet they nevertheless resound with the murmurs of a bygone era.";
    case 1:
      return "The Dark Forests. sThe Citadel is surrounded by a vast forest that is both eerie and mysterious. Twisted and distorted, the trees create a dense canopy through which only slivers of light may pass. The Veiled Enclave is a name given to these woodlands, where mysteries and secrets from the past loom among the trees. The only sounds in the eerie solitude are the distant screams of a cold wind and the sporadic rustle of invisible creatures.";
    case 2:
      return "The Divide. A great chasm, both metaphorical and literal, separates the ruling class within the Citadel from the oppressed masses dwelling in the outskirts.";
    default:
      return "";
  }
}

function changeSlide(direction) {
  const slider = document.querySelector('.slider');
  const totalSlides = slider.children.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.slider img');
  images.forEach((img, index) => {
    img.addEventListener('click', () => showPopup(index));
  });
});
	

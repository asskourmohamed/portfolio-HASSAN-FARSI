const textArray = [
    "Abarchihi Abdellah", 
    "Ahorrar Omar", 
    "Ajouan Ibrahim", 
    "Asskour Mohammed", 
    "Baba Salmane", 
    "Belabied Youness", 
    "Bel-houideg Imad Eddine", 
    "Bendifi Majda", 
    "Beniken Brahim", 
    "Bentaleb Nohaila", 
    "Boussalah Younes", 
    "Chakrone Anas", 
    "Chaouni Mouad", 
    "El Asri Yassine", 
    "El Ati Safae", 
    "Elbouyed Zainab", 
    "El Mansouri Meryem", 
    "Elmouden Abdelghafour", 
    "Elouafi Salah-Eddine", 
    "Elqemary Maryem", 
    "El-hlou Salma", 
    "El-marzouki Noureddine", 
    "Ezzhar Elidrissi Abdelkarim", 
    "Ghayati Douae", 
    "Habet Youssef", 
    "Khafifi Ayman", 
    "Lachguer Mouad", 
    "Lachheb Badr", 
    "Nait El Haj Khadija", 
    "Najmi Yassin", 
    "Nasr Houda", 
    "Ouarach Abderrahmane", 
    "Stitel Ezzahra", 
    "Tahiri Alaoui Nada", 
    "Tounli Aboubaker", 
    "Zrigou Hind"
  ];
  
let index = 0;
let i = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (i < textArray[index].length) {
    typingText.textContent += textArray[index].charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (i > 0) {
    typingText.textContent = textArray[index].substring(0, i - 1);
    i--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typeEffect, 500));

  
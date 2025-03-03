let currentIndex = 0;
const backgrounds = ["#C37EC2", "#9FDDC8", "#F2D856"];
const cans = ["img/pilsol.png", "img/apaol.png", "img/ipaol.png"];
const wheatImages = ["img/pilsbag.png", "img/apabag.png", "img/ipabag.png"];
const titles = ["PILSNER", "APA", "IPA"];
const descriptions = [
  "Our alcohol-free pilsner beer delivers the crisp, refreshing taste of a classic pilsner without the alcohol. Brewed with traditional methods, it retains its light golden color, earthy aroma, and perfectly balanced bitterness.",
  "Our alcohol-free APA beer offers the bold, hoppy flavors of a classic APA without the alcohol. Crafted with premium ingredients, it boasts a rich amber color, citrusy aroma, and a smooth, well-balanced bitterness.",
  "Our alcohol-free IPA delivers the bold, hoppy character of a classic IPA without the alcohol. Brewed with aromatic hops, it boasts a deep amber color, fruity aroma, and a crisp, refreshing finish with floral and pine notes.",
];

function updateSlide() {
  const canImage = document.getElementById("can-image");
  const wheatImage = document.getElementById("wheat-image");

  // Add pop-out animation
  canImage.classList.add("pop-out");
  wheatImage.classList.add("pop-out");

  // Wait for the pop-out animation to start the pop-in animation
  setTimeout(() => {
    document.querySelector(".lilla-baggrund").style.backgroundColor =
      backgrounds[currentIndex];
    canImage.src = cans[currentIndex];
    wheatImage.src = wheatImages[currentIndex];
    document.getElementById("beer-title").textContent = titles[currentIndex];
    document.getElementById("beer-description").textContent =
      descriptions[currentIndex];

    // Add pop-in animation
    canImage.classList.add("pop-in");
    wheatImage.classList.add("pop-in");
  }, 200); // Start pop-in animation after pop-out animation starts

  // Remove pop-out and pop-in classes after animations complete
  setTimeout(() => {
    canImage.classList.remove("pop-out");
    wheatImage.classList.remove("pop-out");
    canImage.classList.remove("pop-in");
    wheatImage.classList.remove("pop-in");
  }, 400); // Match the duration of the pop-in animation
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cans.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + cans.length) % cans.length;
  updateSlide();
}

document.addEventListener("DOMContentLoaded", updateSlide);

// Check om vi er på shop-siden
if (window.location.pathname !== "/shop.html") {
  // Den automatiske pop-up efter 5 sekunder (kun på forsiden)
  setTimeout(function () {
    document.getElementById("newsletterPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }, 5000);
}

function closePopup() {
  document.getElementById("newsletterPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function openBasket() {
  document.getElementById("basketPopup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeBasket() {
  document.getElementById("basketPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

//Newsletter poppup visen ved klik på link
document
  .getElementById("newsletterLink")
  .addEventListener("click", function () {
    document.getElementById("newsletterPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });



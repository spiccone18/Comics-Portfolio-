// Array of comic image URLs
const comicImages = [
    "images/Batman_thelonghalloween.jpg",
    "images/Amazing_Spider-Man_Vol_1_361_Second_Printing_Variant.webp",
    "images/clean.jpg", 
    "images/Venom_Lethal_Protector_no_1.jpg",
    "images/Nightwing_Vol_2_1.webp", 
    "images/Amazing_Spider-Man_Vol_1_136.webp",
    "images/Nightwing_Vol_2_16.webp ",
    "images/51E7xBA9yNL._AC_UF1000,1000_QL80_.jpg"
];

// Function to generate a random comic
function generateRandomComic() {
    // Select a random comic image from the array
    const randomIndex = Math.floor(Math.random() * comicImages.length);
    const randomComic = comicImages[randomIndex];

    // Update the comic image source
    document.getElementById("comicImage").src = randomComic;
}

// Add event listener to the button
document.getElementById("generateComic").addEventListener("click", generateRandomComic);
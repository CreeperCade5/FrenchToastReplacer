
const frenchToastImageUrl = "https://i1.wp.com/isinginthekitchen.com/wp-content/uploads/2011/11/dsc_0058.jpg"; //


function replaceWithFrenchToast() {

  const allElements = document.querySelectorAll('*');

  allElements.forEach(element => {
    // Create an img element
    const img = document.createElement('img');
    img.src = frenchToastImageUrl;
    img.style.width = '100%'; // Resize the image to fit the element
    img.style.height = 'auto';
    img.alt = 'French Toast';


    element.innerHTML = ''; // Clear the element's contents
    element.appendChild(img);
  });
}

window.addEventListener('load', replaceWithFrenchToast);

let imageNumber = 1
const numImages = 5

const sliderElement = document.getElementById('slider')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('previous')
let images

nextButton.addEventListener('click', nextImage) 
prevButton.addEventListener('click', previousImage)

loadImages()

function loadImages() {
    for (let i = 1 ; i <= numImages ; i++) {
        const imgElement = document.createElement('img')
        imgElement.src = `imgs/pic${i}.jpg`
        sliderElement.appendChild(imgElement)
    }
    images = document.querySelectorAll('#slider img')
}

function showSlide() {
    images.forEach( img => {
        img.style.transform = `translateX(-${(imageNumber - 1) * 600}px)`
    })
}

function nextImage() {
    if (imageNumber < numImages) {
        imageNumber++
    }
    else {
        imageNumber = 1
    }
    showSlide()
}

function previousImage() { 
    if (imageNumber > 1) {
        imageNumber--
    }
    else {
        imageNumber = 5
    }
    showSlide()
}

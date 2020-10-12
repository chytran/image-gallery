// variables
var imageReplace = document.querySelector("#fitBg");
var imageReplace2 = document.querySelector("#fitBg-2");
var imageReplace3 = document.querySelector("#fitBg-3");
var imageReplace4 = document.querySelector("#fitBg-4");
var imageReplace5 = document.querySelector("#fitBg-5");
var imageReplace6 = document.querySelector("#fitBg-6");

var htmlChanger = document.querySelector(".html-changer");
var htmlChanger2 = document.querySelector(".html-changer-2");
var htmlChanger3 = document.querySelector(".html-changer-3");
var htmlChanger4 = document.querySelector(".html-changer-4");
var htmlChanger5 = document.querySelector(".html-changer-5");
var htmlChanger6 = document.querySelector(".html-changer-6");

// array 1: images for 1st container of image
var imageGallery = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg"
]

// array 1: images for 2nd container of image
var imageGallery2 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg"
]

// array 1: images for 3rd container of image
var imageGallery3 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg"
]

// array 1: images for 4th container of image
var imageGallery4 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg"
]

// array 1: images for 5th container of image
var imageGallery5 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg"
]

// array 1: images for 6th container of image
var imageGallery6 = [
    // image url (6)
    "", // this is a decoy since loop starts at index(1)
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/eiffel-tower.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/waterfall.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/pyramid.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/skyscraper.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/tokyo.jpg",
    "https://kevintran1.s3.us-east-2.amazonaws.com/images/snow.jpg"
]

// array 2: title
var titles = [
    // titles (3)
    "",
    "Waterfall",
    "Pyramids",
    "Skyscraper",
    "Tokyo Tower",
    "Snow Mountain",
    "Eiffel Tower"
]

// array 3: sentences
var sentences = [
    // sentences (3)
    "",
    "Waterfalls are the signs of nature and beauty. Wherever you go, you will sense the art the feeling of peace and freedom. One should explore the secrets of the waterfall",
    "Pyramids are the sign of culture and spirituality. The pyramids contain a big history of events that many people strive the know about. There tends to be a lot of mystery behind the pyramid as well",
    "The skyscraper is a magnificent building that has a lot of innovation to it. Skyscrapers are great for businesses. Working in a nice skyscraper helps people's health and mentality",
    "Tokyo Tower is a great building to visit for vacation. It contains a lot of history based on its culture. It shows peace and harmony in the world",
    "The Snow mountain is a great place for skiing. The weather is extremely cold. People often love to snowboard here",
    "The Eiffel tower represents peace and love. The structure was created as the symbolism of France. Love is mostly sparked around this building",
]

// addition array 4: link to detailed pages for 2nd image container
var pages = [
    // pages
    "",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html"
]

// addition array 4: link to detailed pages for 2nd image container
var pages2 = [
    "",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html"
]

// addition array 4: link to detailed pages for 3rd image container
var pages3 = [
    "",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html"
]

// addition array 4: link to detailed pages for 4th image container
var pages4 = [
    "",
    "tokyo.html",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
]

// addition array 4: link to detailed pages for 6th image container
var pages5 = [
    "",
    "snow.html",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html"
]

// addition array 4: link to detailed pages for 6th image container
var pages6 = [
    "",
    "eiffel.html",
    "waterfall.html",
    "pyramid.html",
    "skyscraper.html",
    "tokyo.html",
    "snow.html",
]

// function to change image, title, and sentences in a time frame
function change (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace.src = image[i];
            htmlChanger.href = pages[i];
        }, i * 6000);
    }
}

function change2 (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace2.src = image[i];
            htmlChanger2.href = pages[i];
        }, i * 6000);
    }
}

function change3 (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace3.src = image[i];
            htmlChanger3.href = pages[i];
        }, i * 6000);
    }
}

function change4 (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace4.src = image[i];
            htmlChanger4.href = pages[i];
        }, i * 6000);
    }
}

function change5 (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace5.src = image[i];
            htmlChanger5.href = pages[i];
        }, i * 6000);
    }
}

function change6 (image, pages) {
    for (let i = 1; i < image.length; i++){
        setInterval(function timer() {
            imageReplace6.src = image[i];
            htmlChanger6.href = pages[i];
        }, i * 6000);
    }
}

function consoleURL (url, title) {
    for (i = 0; i < url.length; i++) {
        console.log(title[i] + ": " + url[i]);
    }
}

// call the changing function
change(imageGallery,  pages);
change2(imageGallery2, pages2);
change3(imageGallery3, pages3);
change4(imageGallery4, pages4);
change5(imageGallery5, pages5);
change6(imageGallery6, pages6);

// show URL in console
consoleURL (imageGallery, titles);

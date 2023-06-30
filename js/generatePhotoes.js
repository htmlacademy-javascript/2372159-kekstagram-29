import { photoId } from './data.js';

let commentId = 0;

/*
const { checkLength, isPalindrome1, strMk1 } = require('../../js/functions');
function generatePhotos2(amount = 25) {
  const photos = [];
  for (let i = 1; i <= amount; i++) {
    const photo = generatePhoto();
    photos.push(photo);
  }
  return photos;
}


function generatePhoto() {
  const photo = {
    id : generateId(),
    url : generateUrl(),
    description : generateDescription(),
    likes : generateLikes(),
    comments : generateComments(),
  };

  return photo;
}
*/

function generateId() {
  prhotoId = photoId + 1;
  return photoId;
}
//console.log(generateId());

function generateUrl() {
  const url = `photos/${photoId}.jpg`;
  return url;
}
//console.log(generateUrl());

function generateDescription() {
  const description = `Описание фотографии №${photoId}`;
  return description;
}
//console.log(generateDescription());

function generateLikes() {
  const likes = Math.floor(Math.random() * 186) + 15; // случайное число от 15 до 200
  return likes;
}
//console.log(generateLikes());

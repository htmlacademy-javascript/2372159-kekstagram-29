import { photoId } from './data.js';
import { messageTemplates } from './data.js';
import { nameTemplates } from './data.js';

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

// часть 1/5
function generateId() {
  prhotoId = photoId + 1;
  return photoId;
}
//console.log(generateId());

// часть 2/5
function generateUrl() {
  const url = `photos/${photoId}.jpg`;
  return url;
}
//console.log(generateUrl());

// часть 3/5
function generateDescription() {
  const description = `Описание фотографии №${photoId}`;
  return description;
}
//console.log(generateDescription());

// часть 4/5
function generateLikes() {
  const likes = Math.floor(Math.random() * 186) + 15; // случайное число от 15 до 200
  return likes;
}
//console.log(generateLikes());

// часть 5/5
function generateComments(amount = 30) {
  const comments = [];
  const numberOfComments = Math.floor(Math.random() * (1 + amount)); // случайное число от 0 до 30
  for (let commentId = 1; commentId <= numberOfComments; commentId++) {
    const comment = generateComment(commentId);
    comments.push(comment);
  }
  return comments;
}

function generateComment(commentId) {
  const comment = {
    id: commentId,
    avatar: generateAvatar(),
    message: generateCommentMessageText(),
    name: generateAuthorName(),
  };
  return comment;
}

function generateAvatar() {
  const avatarNumber = Math.ceil(Math.random() * 6); // случайное число от 1 до 6
  const avatarUrl = `img/avatar-${avatarNumber}.svg`;
  return avatarUrl;
}

function generateCommentMessageText(){
  let message = '';
  const messageTemplatesLen = messageTemplates.length;
  const usedTemplateNumbers = [];
  const numberOfMessages = Math.floor(Math.random() * 2);
  for (let i = 0; i < numberOfMessages; i++){
  //take 2 random items from messageTemplates array
    let numberOfMessageTemplate = Math.floor(Math.random() * messageTemplatesLen);
    while (usedTemplateNumbers.has(numberOfMessageTemplate)) {
      numberOfMessageTemplate = Math.floor(Math.random() * messageTemplatesLen);
    }
    usedTemplateNumbers.add(numberOfMessageTemplate);
    message += messageTemplates[numberOfMessageTemplate];
  }
  return message;
}

function generateName(){
  return nameTemplates[Math.floor(Math.random() * nameTemplates.length)];
}

//console.log(generateName());

// конец части 5/5 function generateComments(amount = 5)
// #####################################################

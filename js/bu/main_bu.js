//4.16. Больше деталей

/*
Обратите внимание, в тексте задания вы будете встречать текст в фигурных скобках. Такой текст будет означать, что на месте этого текста должно появиться значение, которое вы возьмёте из данных. Например, в шаблоне может быть написано <div>{{x}}</div>, и это будет значить, что {{x}} нужно заменить на значение переменной x. Если переменная будет равна 100, то разметка должна выглядеть как <div>100</div>. Фигурные скобки в этой записи ничего не значат, они просто показывают, что закончилась разметка и в этом месте будут стоять данные. Сами фигурные скобки переносить в разметку не нужно.
*/
//раздел package.json->scripts->
//nmp run start (npm start) (ctrl+c - stop)

function generatePhotos() {
  const photos = [];
  const usedUrls = new Set(); // множество для хранения уже использованных адресов картинок

  for (let i = 1; i <= 25; i++) {
    //В этой строке кода мы создаем константу id, которая будет хранить идентификатор фотографии. В данном случае, идентификатором фотографии будет номер i от 1 до 25.
    const id = i;
    //В этой строке кода мы создаем переменную url, которая содержит адрес картинки вида photos/${i}.jpg, где i — это номер фотографии от 1 до 25.
    //Мы используем символы обратной кавычки (backticks), чтобы создать шаблонную строку, в которую мы можем вставлять значения переменных, заключая их в фигурные скобки и предваряя знаком доллара. В данном случае, вместо ${i} в строке photos/${i}.jpg будет подставлено значение переменной i.
    let url = `photos/${i}.jpg`;

    // Генерируем уникальный адрес для картинки, чтобы не было повторений
    while (usedUrls.has(url)) {
      url = `photos/${Math.ceil(Math.random() * 25)}.jpg`;
    }
    usedUrls.add(url);

    const description = `Описание фотографии #${i}`;
    const likes = Math.floor(Math.random() * 186) + 15; // случайное число от 15 до 200
    const comments = [];
    const numberOfComments = Math.floor(Math.random() * 31); // случайное число от 0 до 30


    // Генерируем комментарии
    for (let j = 0; j < numberOfComments; j++) {
      const commentId = j + 1;
      const avatarNumber = Math.ceil(Math.random() * 6); // случайное число от 1 до 6
      const avatarUrl = `img/avatar-${avatarNumber}.svg`;
      const commentText = getRandomCommentText();
      const authorName = getRandomAuthorName();

      comments.push({
        id: commentId,
        avatar: avatarUrl,
        message: commentText,
        name: authorName,
      });
    }

    photos.push({
      id: id,
      url: url,
      description: description,
      likes: likes,
      comments: comments,
    });
  }

  return photos;
}

// Функция для получения случайного текста комментария
function getRandomCommentText() {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

// Функция для получения случайного имени автора комментария
function getRandomAuthorName() {
  const names = [
    'Артём',
    'Иван',
    'Дмитрий',
    'Екатерина',
    'Ольга',
    'Мария',
    'Николай',
    'Алексей',
    'Анастасия',
    'Алёна',
  ];
  return names[Math.floor(Math.random() * names.length)];
}

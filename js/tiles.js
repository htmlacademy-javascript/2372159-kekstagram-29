
/*
1. использует метод document.querySelector('#picture') для выбора элемента на странице с id "picture".
2. вызывает textContent на выбранном элементе, чтобы получить текстовое содержимое элемента
3. на полученном текстовом содержимом вызывается метод querySelector('.picture'), чтобы выбрать элемент с классом "picture"
4. результат этого выбора сохраняется в переменную tileTemplate
*/
const tileTemplate = document
  .querySelector('#picture')
  .textContent.querySelector('.picture');


// определяет переменную container и присваивает ей значение, полученное с помощью метода querySelector элемента document. Метод querySelector ищет элемент в документе, соответствующий указанному селектору CSS
const container = document.querySelector('.pictures');

// функция принимает объект в качестве аргумента. В объекте ожидаются свойства url, description, likes и comments
const createTile = ({ url, description, likes, comments}) => {
  /* создает копию элемента tileTemplate с помощью метода cloneNode(true). Аргумент true указывает на то, что нужно также клонировать все дочерние элементы tileTemplate.
  Результат клонирования сохраняется в переменную tile. Теперь tile содержит точную копию элемента tileTemplate со всем его содержимым.*/
  const tile = tileTemplate.cloneNode(true);
  //Адрес изображения url подставьте как атрибут src изображения.
  tile.querySelector('picture_img').src = url;
  //Описание изображения description подставьте в атрибут alt изображения.
  tile.querySelector('picture_img').alt = description;
  //Количество лайков likes выведите в блок .picture__likes.
  tile.querySelector('picture_comments').textContent = comments.length; //но не innerhtml
  //Количество комментариев comments выведите в блок .picture__comments.
  tile.querySelector('picture_likes').textContent = likes;

  return tile;

};

const renderTiles = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const tile = createTile(photo);
    fragment.append(tile);
  });
  container.append(fragment);
};


export { renderTiles }; // es module

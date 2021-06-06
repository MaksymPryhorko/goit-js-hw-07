const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
const newElement = document.createElement('li')


const arrayToString = images.map(el => {
  const allString = `<li class="photo"><img src="${el.url}", alt="${el.alt}"></li>`;
  return allString;
});

galleryRef.insertAdjacentHTML('afterbegin', arrayToString);


galleryRef.style.display = 'flex';
galleryRef.style.justifyContent = 'space-between';
galleryRef.style.margin = '0px';
galleryRef.style.padding = '0px';
galleryRef.style.width = '1100px';
galleryRef.style.backgroundColor = 'grey';

const liRef = document.querySelectorAll('li.photo');
liRef.forEach(el => {
  el.style.listStyle = 'none';
  el.firstChild.style.width = '350px';
  el.firstChild.style.height = '100%';
  el.firstChild.style.borderRadius = '15px';
});

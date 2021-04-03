function renderGallery(gallery) {
  gallery.className = 'splide';
  var track = document.createElement('div');
  track.className = 'splide__track';
  var list = document.createElement('div');
  list.className = 'splide__list';
  var images = document.querySelectorAll('.tiledAlbum img');
  for (var i = 0; i < images.length; i++) {
    var slide = document.createElement('div');
    slide.className = 'splide__slide';
    var src = images[i].src.replace('/480p/', '/1080p/');
    var img = document.createElement('img');
    img.src = src;
    img.setAttribute('width', gallery.offsetWidth);
    slide.appendChild(img);
    list.appendChild(slide);
  }
  track.appendChild(list);
  gallery.appendChild(track);
}

function showGallery(e) {
  var gallery = document.querySelector('.gallery');
  gallery.style.display = 'block';
  if (!gallery.children[0].children[0].childElementCount) {
    renderGallery(gallery.children[0].children[0]);
  }
  var splide = new Splide('#splide-gallery', { type: 'loop', start: e.target.dataset.index }).mount();
  var images = document.querySelectorAll('#splide-gallery .splide__slide img');
  for (var i = 0, len = images.length; i < len; i++) {
    var image = images[i];
    splide.on('click', function (e) {
      window.open(e.target.src.replace('/1080p',''));
      e.stopPropagation();
      e.preventDefault();
    }, image);
  }
  function hideGallery(e) {
    if (!splide.root.contains(e.target)) {
      gallery.style.display = 'none';
      document.body.removeEventListener('click', hideGallery);
      splide.destroy();
    }
  }
  document.body.addEventListener('click', hideGallery);
}

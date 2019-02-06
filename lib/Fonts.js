const FontFaceObserver = require('fontfaceobserver');

const createLink = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';

  return link;
};

const Fonts = () => {
  document.head.appendChild(createLink('https://fonts.googleapis.com/css?family=Didact+Gothic'));
  document.head.appendChild(createLink('/static/fonts/CurlzMT/style.css'));

  const didactGothic = new FontFaceObserver('Didact Gothic');
  const curlzMt = new FontFaceObserver('CurlzMT');

  document.documentElement.classList.add('loadingFonts');
  return Promise.all([didactGothic.load(), curlzMt.load()]);
};

export default Fonts;

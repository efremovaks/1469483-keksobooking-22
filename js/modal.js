// модалки на успешную \ не успешную отправку
function renderModal(selector) {
  const modalTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const mainHtml = document.querySelector('main');
  const modalMessage = modalTemplate.cloneNode(true);
  mainHtml.appendChild(modalMessage);

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modalMessage.remove();
    }
  });

  document.addEventListener('click', function () {
    modalMessage.remove();
  });
}

export{renderModal};

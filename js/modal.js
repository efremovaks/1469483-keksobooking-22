'use strict';


function onPopupEscKeydown(modal, evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    modal.remove();
    document.addEventListener('keydown', onPopupEscKeydown);
  }
}

function onPopupClick(modal, evt) {
  evt.preventDefault();
  modal.remove();
  document.addEventListener('click', onPopupClick);
}

// модалки на успешную \ не успешную отправку
function renderModal(selector) {
  const modalTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const mainHtml = document.querySelector('main');
  const modalMessage = modalTemplate.cloneNode(true);
  mainHtml.appendChild(modalMessage);

  document.addEventListener('keydown', onPopupEscKeydown.bind(null, modalMessage));
  // document.removeEventListener('keydown', onPopupEscKeydown.bind(null, modalMessage));

  document.addEventListener('click', onPopupClick.bind(null, modalMessage));
  // document.removeEventListener('click', onPopupClick.bind(null, modalMessage));
}

export {
  renderModal
};

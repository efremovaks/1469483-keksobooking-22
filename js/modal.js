'use strict';


function onPopupEscKeydown(modal, evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    modal.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
}

function onPopupClick(modal) {
  modal.remove();
  document.removeEventListener('click', onPopupClick);
}

// модалки на успешную \ не успешную отправку
function renderModal(selector) {
  const modalTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const mainHtml = document.querySelector('main');
  const modalMessage = modalTemplate.cloneNode(true);
  mainHtml.appendChild(modalMessage);

  document.addEventListener('keydown', onPopupEscKeydown.bind(null, modalMessage));

  document.addEventListener('click', onPopupClick.bind(null, modalMessage));
}

export {
  renderModal
};

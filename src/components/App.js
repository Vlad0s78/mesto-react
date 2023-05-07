import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

export default function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name={"edit-profile"} title={"Редактировать профиль"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_name" type="text" name="name" id="input-name" minLength="2" maxLength="40" placeholder="Имя" required />
          <span className="popup__input-error input-name-error"></span>
          <input className="popup__input popup__input_type_description" type="text" name="about" id="input-description" minLength="2" maxLength="200" placeholder="О себе" required />
          <span className="popup__input-error input-description-error"></span>
        </PopupWithForm>

        <PopupWithForm name={"add-card"} title={"Новое место"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_type_place" type="text" name="name" id="input-place" minLength="2" maxLength="30" placeholder="Название" required />
          <span className="popup__input-error input-place-error"></span>
          <input className="popup__input popup__input_type_url" type="url" name="link" id="input-url" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error input-url-error"></span>
        </PopupWithForm>

        <PopupWithForm name={"edit-avatar"} title={"Обновить аватар"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="popup__input popup__input_avatar" type="url" name="avatar" id="avatar" minLength="2" placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm name={"delete-card"} title={"Вы уверены?"} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

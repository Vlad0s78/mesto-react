import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm name={"edit-avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_avatar" type="url" name="avatar" id="avatar" minLength="2" placeholder="Ссылка на аватар" ref={avatarRef} required />
      <span className="popup__input-error avatar-error"></span>
    </PopupWithForm>
  );
}

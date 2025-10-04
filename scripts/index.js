const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileModalForm = editProfileModal.querySelector(".modal__form");
const editprofileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editprofileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostModalForm = newPostModal.querySelector(".modal__form");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");

const profileNameEL = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editprofileNameInput.value = profileNameEL.textContent;
  editprofileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEL.textContent = editprofileNameInput.value;
  profileDescriptionEl.textContent = editprofileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileModalForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("Caption", newPostCaptionInput.value);
  console.log("Link", newPostLinkInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

newPostModalForm.addEventListener("submit", handleNewPostSubmit);

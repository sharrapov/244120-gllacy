var link = document.querySelector(".login");
var popup = document.querySelector(".user-block-login");
var body = document.querySelector("body");
var search = document.querySelector(".search-link");
var searchModal = document.querySelector(".search-form");	
var cart = document.querySelector(".cart-link");
var cartModal = document.querySelector(".cart-modal");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackModal = document.querySelector(".feedback-modal-background");
var feedbackForm = document.querySelector(".feedback-modal");
var close = document.querySelector(".feedback-modal-close");
var form = feedbackModal && feedbackModal.querySelector("form");
var login = feedbackModal && feedbackModal.querySelector("[name=feedback-modal-name]");
var mail = feedbackModal && feedbackModal.querySelector("[name=feedback-modal-mail]");
var message = feedbackModal && feedbackModal.querySelector("[name=feedback-modal-message]");
var storage = localStorage.getItem("login");

link.addEventListener("mouseover", function(event){
	event.preventDefault();
	popup.classList.add("user-block-login-show");
});
		
popup.addEventListener("mouseover", function(event){
	event.preventDefault();
	popup.classList.add("user-block-login-show");
});
		
popup.addEventListener("mouseout", function(event){
	event.preventDefault();
	popup.classList.remove("user-block-login-show");
});
		
search.addEventListener("mouseover", function(event){
	event.preventDefault();
	searchModal.classList.add("search-form-show");
});
		
searchModal.addEventListener("mouseover", function(event){
	event.preventDefault();
	searchModal.classList.add("search-form-show");
});
		
searchModal.addEventListener("mouseout", function(event){
	event.preventDefault();
	searchModal.classList.remove("search-form-show");
});

if (cartModal) {
		
	cart.addEventListener("mouseover", function(event){
		event.preventDefault();
		cartModal.classList.add("cart-modal-show");
	});
		
	cartModal.addEventListener("mouseover", function(event){
		event.preventDefault();
		cartModal.classList.add("cart-modal-show");
	});
		
	cartModal.addEventListener("mouseout", function(event){
		event.preventDefault();
		cartModal.classList.remove("cart-modal-show");
	});

}

if (form) {

	feedbackButton.addEventListener("click", function(event){
		event.preventDefault();
		feedbackModal.classList.add("feedback-modal-background-show");
		feedbackForm.classList.add("feedback-modal-show");
		login.focus();
			
		if (storage) {
			login.value = storage;
			mail.focus();
		} else {
			login.focus();
		}
	});
		
	close.addEventListener("click", function(event){
		event.preventDefault();
		feedbackModal.classList.remove("feedback-modal-background-show");
		feedbackForm.classList.remove("feedback-modal-error");
	});
		
	form.addEventListener("submit", function(event) {
		if (!login.value || !mail.value || !message.value) {
			event.preventDefault();
			feedbackForm.classList.add("feedback-modal-error");
		} else {
			localStorage.setItem("login", login.value);
		}
	});
		
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (feedbackModal.classList.contains("feedback-modal-background-show")) {
				feedbackModal.classList.remove("feedback-modal-background-show");
			}
		}
	});
	
}
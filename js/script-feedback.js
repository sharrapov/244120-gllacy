		var feedbackButton = document.querySelector(".feedback-button");
		var feedbackModal = document.querySelector(".feedback-modal-background");
		var feedbackForm = document.querySelector(".feedback-modal");
		var close = document.querySelector(".feedback-modal-close");
		var form = feedbackModal.querySelector("form");
		var login = feedbackModal.querySelector("[name=feedback-modal-name]");
		var mail = feedbackModal.querySelector("[name=feedback-modal-mail]");
		var message = feedbackModal.querySelector("[name=feedback-modal-message]");
		var storage = localStorage.getItem("login");
		
		
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
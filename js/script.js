		var link = document.querySelector(".login");
		var popup = document.querySelector(".user-block-login");
		var body = document.querySelector("body");
		var search = document.querySelector(".search-link");
		var searchModal = document.querySelector(".search-form");	
		var cart = document.querySelector(".cart-link");
		var cartModal = document.querySelector(".cart-modal");
		

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
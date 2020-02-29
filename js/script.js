var buttonOpen = document.querySelector(".travel__btn");
		var ModalWindow = document.querySelector("form");
		var In = ModalWindow.querySelector(".in__label-text");
		var Older = ModalWindow.querySelector(".older__label-numbers");
		var Kids = ModalWindow.querySelector(".kids__label-numbers");
		var storage = localStorage.getItem("In");
		
		ModalWindow.classList.add("info__modal-hide");
		

		var MapHide = document.querySelector(".travel__map");
		MapHide.classList.add("travel__map-hide");
		
		function plusCount(obj) {
			var currentAttr = obj.getAttribute('href'),
				input = document.querySelector(currentAttr);
			input.value++;
		}
		function minusCount(obj) {
			var currentAttr = obj.getAttribute('href'),
				input = document.querySelector(currentAttr);

			if (input.value > 0) input.value--;
		}
	

		buttonOpen.addEventListener("click", function(evt) {
			evt.preventDefault();
			ModalWindow.classList.toggle("info__modal");
			In.focus();
			if (storage) {
				In.value = storage;
				Out.focus();
			}
			else {
				In.focus();
			}
		});

		ModalWindow.addEventListener("submit", function(evt) {
			if ((!In.value) || (!Out.value)) {
				evt.preventDefault();
				ModalWindow.classList.remove("info__modal-error");
				ModalWindow.offsetWidth = ModalWindow.offsetWidth;
				ModalWindow.classList.add("info__modal-error");
			}
			else {
				localStorage.setItem("In", In.value);
			}
		})
		window.addEventListener("keydown", function (evt) {
		    if (evt.keyCode === 27) {
		      if (ModalWindow.classList.contains("info__modal")) {
		        ModalWindow.classList.remove("info__modal");
		      }
		    }
		});
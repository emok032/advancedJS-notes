// objectOriented-Notes

// What does the keyword 'this' mean? ================================================================================
	
// Keyword 'this' refers to the object within the currently defined operating context

	var exampleObject = {
		checkThis: function() {
			console.log(this); // local-object (exampleObject): this

			function checkOther() {
				this.moo = 1; // global-object (window): this
				console.log(this); // global-object (window): this
			}

			checkOther();
			console.log(this.moo); // undefined: pointing to nothing - this.moo is defined in global context via Line 8
			console.log(window.moo); // global-object (window): this - via Line 8

		}
	};

	exampleObject.checkThis(); // the operating context has been specifcally defined (as exampleObject)
	// Object { }

// How to resolve ambiguity with 'this'? (Multiple solutions) =========================================================
// 1. "use strict";
	var exampleObject = {
		checkThis: function() {
		    "use strict"; // restricts default object 'this' from representing the global object
			console.log(this); // local-object (exampleObject): this

			function checkOther() {
			    console.log(this); // undefined
				this.moo = 1; // Uncaught TypeError: Cannot set property 'moo' of undefined(…)
			}

			checkOther();
			console.log(this.moo); // undefined: pointing to nothing - this.moo is defined in global context via Line 8
			console.log(window.moo); // global-object (window): this - via Line 8

		}
	};

	exampleObject.checkThis(); // the operating context has been specifcally defined (as exampleObject)
	// Object { }

// 2. Stabilize the keyword 'this' by defining it a variable
	var exampleObject = {
		checkThis: function() {
			var self = this; // any variable (i.e. self, vm, that, etc.)
			console.log(self); // local-object (exampleObject): this

			function checkOther() {
			    console.log(self); // local-object: this
				self.moo = 1; // local-object: this
			}

			checkOther();
			console.log(this.moo); // local-object: this
			// 1
			console.log(window.moo); // local-object (window): this - via Line 8
			// 1

		}
	};

	exampleObject.checkThis(); // the operating context has been specifcally defined (as exampleObject)
	// Object { }

// What do the functions call, bind, and apply do? =====================================================================





























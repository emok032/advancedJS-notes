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

function exampFunc(param1, param2) {
	console.log(this);
};

exampFunc.call(); // Why use .call()? *Remember, it's all about stabilizing the value of 'this'
exampFunc(); // Instead of?

// Because...
function exampFunc(param1, param2) {
	console.log(this);
};

exampFunc.call();

// Also, it takes parameters: where the very first parameter (invisible) always refers to 'this'

"use strict";

function a(b,c,d) {
	console.log(this);
	console.log(b);
	console.log(c);
	console.log(d);
}

a.call(1,2,3,4); // very first parameter - 'this'

// .apply()

"use strict";

function a(b,c,d) {
	console.log(this);
	console.log(b);
	console.log(c);
	console.log(d);
}

a.call(1,2,3,4); // very first parameter - 'this'

a.apply(1, [2,3,4]); // very first parameter - 'this'

// So, why use .apply() vs .call()?
	// .apply() is great for object and array arugments
	// Example: Assume there is a summation function called sum()

	// .call()
	var y = sum.call(null, 1, 2, 3, 4); // if passing var things, then .call() would pass one object
	console.log(y);
	// .apply()
	var things = [1,2,3,4];
	var x = sum.apply( null, things) // takes array object as varadic (variable number of) arguments including all of it's elements
	console.log(x);

// FYI: variadic (function) - a function of indefinite arity (arguments)

























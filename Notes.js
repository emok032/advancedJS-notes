#Advanced Javascript

1. (mode) "use strict";
...AKA using variables in a 'strict' operating context

	Rules of "use strict":
		- *Variable MUST be declared before it used (or else undefined)
		- Will return errors where variable is undefined
		- Prevents { 
			accidental global variables (e.g. variable typos),
		 	use of JS reserved words (i.e. let)
		 	deletion of variables, functions, and arguments
		  }
		- eval() will be safer to use: Specifies eval arguments to within eval only - do not "leak out"
		- what goes on in eval() stays in eval()

			"use strict";

			var name = 'igloo';
			var code = "var name = 'asim';" // re-defining var name
			eval(code) // "use strict" restricts the eval() to only eval

			console.log(name)

(1) Example:
	"use strict";
		zee = 1;
		console.log(zee);
	// Undefined - instead, "var zee = 1"

2. Does JS pass variables by reference or by value?

	(Brief answer) Generally...
		- primitive types (string, number, boolean, etc.) are passeds as values
		- objects are passed by reference

	(Follow-up) Specifically... BOTH
		- 'pass by value' means to 'pass a copy' of the variable
		- so, when passing a reference var, we cannot change this referenced var (what this var points to)
		- instead we can pass a reference var and change the referenced variable's PROPERTY but not it's value
		- the value of the variable will always be maintained

(2) Example:
	"use strict"; // (with or without "use strict")
		var zee = 1;
		function foo(zee){
			zee = 2;
		}
		foo(zee);
		console.log(zee);
	// 1
	// because variable zee's value cannot be changed
	// variable zee is being referenced by function foo() - only property values can be changed

3.1 What are the different types of Javascript?

The Primitive & Object Types
	*can be check with reserved JS function: typeof()

	Primitive (var):
		- Boolean
		- Number
		- String
		- Null (		represents an actual VALUE in JS - unlike in Java where it IS the absence of a value,
						var values of Null can only be set by users)
		- Undefined (	also represents an actual VALUE in JS,
						'no value initialized',
						JS Engine defaults to Undefined never to Null)
		*remember! types of Null and Undefined are different from values of Nulla nd Undefined

	Object (var):
		a. Object literal
			= {};
		b. Object instance
			= new Object()

3.2 Follow-up: What makes JS so special compared to Java (for example)?

	JavaScript: 
		variable Types can be changed DYNAMICALLY when the application runs (at runtime)
		- (+) Up and running very quickly
		- (-) Can miss silent errors
	Java (contains a static system): 
		variable Types are definited STATICALLY - set initially and permanently
		- (+) Catch silent errors
		- (-) Not as flexible to get to runtime

4. What is the difference between == and === ?

	Value comparisons of [Equality Only] vs [Type & Equality]

	type coercion (string-value conversion) occurs: ==
	exact type required: ===

5. What is NaN? How can we check for typeof? (*beware type coercion is occuring)
	
	NaN - Not A Number
	even though... typeof(NaN); returns "number"

	NaN == (any value) is/returns 'false'
	However, NaN == NaN also returns 'false' - So, always false! How do you check NaN? (use reserved JS function)
		isNaN(1); // true
		isNaN("1") // false
		// but... type coercion occurring
		isNaN("A"); // true

	*FACT: NaN is the only JS type that is NOT equal to itself*
		NaN == NaN; // false
		NaN !== NaN;  // true (Use INEQUALITY Operator)
		a !== a; // everything !== itself should always be  false

6. What are the different scopes (scope variables) in JavaScript?

	Global Scope:
		- Window.exampleVar
		- var
	Local/function Scope:
		
		function(){
			var exampleVar = innerScope.value;
		}

	*Blocks in JavaScript:
		- JS does not observe block-level scope

		for (var i = 0; i < Things.length; i++) {
			var exampleBlock = innerScope.value;
		}
		console.log(exampleBlock); // returns exampleBlock! Not limited by block-level code

7. What is variable hoisting?

variable & function() hoisting -VS- var-anonymous-function() hoisting
(or a NAMED function hoisted at top of scope while a FUNCTION EXPRESSION, which is assigned to a var won't get hoisted)

JS Engine executes a variable declaration basically on the implication that it is declared like so:

// Before (same as below)...
	"use strict";

	console.log(exampleVar);
	var exampleVar = 100;

// ...After (implied by JS Engine)
	"use strict";

	var exampleVar; // undefined
	console.log(exampleVar); // undefined
	exampleVar = 100;

...Even if it is called before it is declared like:

A.	// Hoisted (Works)
	exampleFunction(); // function call
	function exampleFunction(){ // function declaration
		// this is a named function
	};

B.	// Not Hoisted (Will not execute properly)
	exampleFunction(); // function call
	var exampleFunction = function() { // function declaration
		// this is an ANONYMOUS function
	};

8. What is the scope chain? (How are variables resolved?)

	*Scope Chain is defined LEXICALLY (in the order it is defined on the page/file)*

9. What is an IIFE? (Immediately Invoked Function Expression)

	// IIFE: Wrapping a ( function() ) and having it called immediately
	( function(){	 } )();

	**A general JS principles/convention:
		* We don't want to have pseudo-global variables (unintended global variables)
			- variables intended for a specific function's scope
			- "leaks" out and pollutes the global scope

10. What is a closure?
	
	Closures are inner functions inside of an outer function.
	They have their own local scope and has access to outer function's scope,
		parameters (but NOT arguments object),
		and they also have access to global variable

	function(){
		// Closure {}
	};

	A. Closures can refer to OUTERSCOPE variables/functions 
		*even if the outerscope function has exited (returned)
		- 	closure points to curent value of whatever values are being used in the function body
	Points to current value of the outerscope.
	Use IFFE's (in a for loop, for example) to output the expected behavior.

	// Consider the following code snippet:
	// What gets logged to the console when the user clicks on “Button 4”?

	for (var i = 0; i < 5; i++) {

		var btn = document.createElement('button'); // btn: creates a button

		btn.appendChild(document.createTextNode('Button ' + i)); // attach button creation to text node 'Button' + value of i

		btn.addEventListener('click', function(){ console.log(i); }); // add click event listener where function executes a console.log to return value of i

		document.body.appendChild(btn); // attach variable btn to the html body with all of it's 

	}

	// What will the following code output to the console?
	// FYI: f(n) is a factorial

	console.log(
		(
			function f(n){
				return (
					(n > 1) ? n * f(n-1) : n
					// (4 > 1) ? true... 4 * f(3) ...* 6 = 24
					// (3 > 1) ? true... 3 * f(2) ...* 2 = 6
					// (2 > 1) ? true... 2 * f(1) ...* 1 = 2
					// (1 > 1) ? false... 1
				)
			}
		)(4)
		// f(4) = 24
		// 4! = 24
	);

	// console.log(24);
	// 24

	// Consider the code snippet below. What will the console output be?

	(
		function(x) { // x = 1

			return (
				function(y) { // y = 2

					console.log(x); // x = 1

				}
			)(2)

		}
	)(1);

	// 1
	// JS Engine takes the value of x in the outerscope, which x = 1

	function loo() {
	  var goo = 1;
	  moo();
	}

	function moo() {
	  console.log(goo);
	}

	loo();
	// Throw an ERROR where goo is 'not defined'
	// BUT notice that it is not 'undefined' and is actually a REFERENCE ERROR

	var salary = "1000$";

	(function () {

	console.log("Original salary was " + salary);

	var salary = "5000$";

	console.log("My New Salary " + salary);

	})();












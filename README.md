#Advanced Javascript

1. (mode) "use strict";
...AKA using variables in a 'strict' operating context
	
	Rules of "use strict":
		- Cannot use any variable even if it has not been defined by "var = "
		- Will return errors where variable is undefined
		- Prevents { 
			accidental global variables (e.g. variable typos),
		 	use of JS reserved words (i.e. let)
		 	deletion of variables, functions, and arguments
		  }
		- eval() will be safer to use: Specifies eval arguments to within eval only - do not "leak out"

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
	Java (a static language): 
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

7. What is varible hoisting?










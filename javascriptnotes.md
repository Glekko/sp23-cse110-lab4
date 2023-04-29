To run things in Node, do "node.filename.js".

# First website notes
https://javascript.info/variables

Variable = "named storage" for data.
Can be created with `let` keyword.\
`let randomVarName` declares variable with name "randomVarName".


using the equal operator `=` allows us to assign the variable with data.\
Ex: `let randomVarName = 'banana'`


Can declar multiple variables in 1 line:


`let user = 'John', age = 25, message = 'Hello';`

WARNING: better to use 1 variable per line for readability.


use `const` instead of `let` for an unchanging variable.

"There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores."


# Second Website Notes
https://javascript.info/closure


If a variable is declared within a code block, it's restricted to within that code block.


Every function, code block, script entirely has a hidden/internal object called the _Lexical Environment_.

It's made up of the _Environment Record_ which stores all local variables as its properties.

And a reference associated with the outer code/_out lexical environment_.
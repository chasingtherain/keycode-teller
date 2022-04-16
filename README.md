# keycode-teller
a program that allows user to find the key code of any character



# expected behavior
UI will show:
- user input
- keyCode of user input
- a table below to show all info

UI refreshes when user keys a new input

# html structure:
- div 1: user input; class:
- div 2: keycode of user input; class: key-code
- table

# pseudocode
- create a variable for: 
    - keyCode and assign it to key-code
    - key and assign to key
- add event listener to window and read key code (keydown, event => event.keyCode)
    - assign event.keyCode value to keyCode variable
    - assign event.key to key



# Notes for HTML and CSS

1. [Terminal commands](#terminal-commands)
1. [Git commands](#git-commands)
1. [HTML notes](#html-notes)
    1. [HTTP protocol](#http-protocol)
    1. [HTML forms](#html-forms)
1. [CSS notes](#css-notes)
1. [Resources](#resources)

## Terminal commands

* Everything in your filesystem is either a **file** or a **directory** (a container
  for files)
* Your file system is organized as a tree structure
    * There is a root element `/` (AKA the root directory)
* Hidden files start with a `.`
* Working with files and directories
    * `pwd` Print working directory
    * `mkdir` Create a directory
    * `cd` Move to a specific directory
    * `cd ..` Go to the parent directory
    * `ls` List files
    * `touch` Creates an empty file
    * `cat` Show the contents of a file
    * `rm` Delete files or directories
        * For directories we'll add the flag `-r` (recursive)
            * `rm -r directory` It will work if the directory is empty
            * `rm -rf directory` If the directory is not empty, ie, it contains files
               or other directories, we'll need the flag `-f` (force)
        * It needs the recursive flag, because we need to repeat the same operation but
          for the files and directories within the current directory. Recursion is a
          type of repetition

## Git commands

* Git workflow
    * `git status` List the current changes 
    * `git add filename` Add a single file
        * `git add .` This adds everything in the current directory, but deleted files
        * `git add -A` This adds everything, even ignored files
    * `git commit` Save your changes to git. You'll need to include a message
        * The default editor is vim
            * Press `i` to start typing
            * Once your done, press `esc`
            * To quit the editor press `:wq`
    * `git commit -m "Add examples for HTML forms"` Write the message using the `-m`
       flag
    * `git commit --amend -m "Fixed message"` Fix a previous commit, with a new
       message
    * `git log` To see a list with all the commits, including your most recent one
    * `git push origin master` Send your changes to Github
    
More commands

* `git fetch` Git download. Downloads changes from the remote without aplying them to mty local repo
* `git stash` Saves Work in Progress, is similar to commit (temporary save)
* `git stash list` Shows all the code tha has been stashed

## HTML Notes

* HTML is markup language. It describes the structure of a document
* The main component of this language is an **element**
* There's 3 types of elements 
    * Block level -> `div`, `p`, `h1`, `h6`
    * Inline elements -> `strong`, `em`, `span`
    * Void elements -> `br`, `meta`, `hr`
* The parts of an element are
    * Tags (`<tag></tag>`)
        * Opening
        * Closing (void elements do not have it)
    * Attributes (`attribute="value"`) 
        * They represent properties of the element
        * Some are required (`src` in an `img`), some are optional (`class`)
        * Some do not require a value, since it would be redundant (`disabled`,
          `readonly`)
* Elements are containers
    * Elements can have 
        * no content (empty)
        * more elements (children) 
        * or text (text nodes)
* Rules
    * block within block (valid)
    * inline within inline (valid)
    * inline within block (valid)
    * Some void elements are block elements (`br`, `hr`)
    * block within inline (invalid)
* A document can be a
    * well-formed document
        * Have a correct syntax
    * mal-formed documents
        * Have incorrect syntax. For instance, a non-void element without a closing tag
    * invalid document
        * It has correct syntax, but does not follow the rules defined by the doctype.
          It uses a non-existing tag (`<bananas></bananas>`)  
    * valid document
        * It has correct syntax
        * It follows the rules defined by the doctype

### HTTP protocol

* What's the HTTP protocol?
    * It defines the rules to exchange messages in the Internet
* Communication occurs between a `client` and a `server`
* They exchange messages 
    * The client sends a `request`
    * The server returns a `response`
* Types of messages
    * Questions
    * Commands
* HTTP verbs are used to determine the type of the message
    * `GET` requests are **questions** (Could you play this song?)
    * `POST` requests are **commands** (Pay the pizza I ordered)
    * There are more: `PUT`, `DELETE`, `PATCH`
* Parts of a message
    * Headers
        * Meta-information (configuration)
            * Status code: 200 OK, 404 Not found, 500 Server error
            * Content type: image, audio, video, text, html, pdf
    * Body
        * The real content

### HTML forms

#### Default values in forms

* The default method (HTTP verb) for forms is `get`
* The default type for `input` is `text`
* The default type for `button` is `submit`

#### How is the information sent
* Depending on the method the information is sent to the server within
    * The request **body** if it's a post request
    * The request **headers** if it's a get request (in the **query string**)
* In any case the format used is the same
    * `name1=value1&name2=value2` ....

#### What is sent to the server

* If you want to send a pre-populated value, then
    * for `checkbox`, `radio`, add the `checked` attribute
    * for `select`, add the `selected` attribute
    * for `input`, use the `value` attribute
* Inputs of type `checkbox` and `radio` are not sent to server if none is
  checked
* If a form element is `disabled` then is not sent to the server either
* If a form element is `readonly` it is sent to the server anyway
* A form element without a `name` is not sent to the server

## CSS Notes

* The unit of work in CSS is a rule
    * One or several selectors.
    * Declarations
        * properties and values
    * `selector { property: value; }`
* Types of selectors
    * Elements, classes, ids, pseudo-selector
    * Combinations of them
* There are 3 ways to include CSS in a page
    * Inline. Using the `style` attribute
    * Embedded. Using the `style` element
    * External. Using the `link` element pointing to an external `.css` file
* Types of positioning
    * `static` is the default positioning
    * `absolute` and `relative` positioning. Mostly used for images
    * `fixed`. Mostly used in main navigation menus
    * `float`. Is used mostly to create columns
* There's 3 main font families
    * Serif
    * Sans serif
    * Monospace
* How to use Google fonts
    * Select a font
    * Add a link element in your HTML pointing to the font you selected
    * Use the font family in your CSS rule

### Grids

A generalization to create layouts based on columns

* They generally are 12 columns
* We have several general concepts
    * Container. It will define the maximum width of the blocks in the page
    * Row. It's a container for columns
    * Columns. Are usually elements floating with a specific width based on
      percents
      
## Setting up bootstrap

### From the CDN

* Got to http://getbootstrap.com/getting-started/
    * Copy the first `link` tag and add it to the head of your document
    * Copy the only `script` tag and add it before the end of your `body` element
    * Go to http://code.jquery.com/ and select the link to the minified version of the latest release (3.2.1)
     and include the `script` tag before the `script` for bootstrap

### Download bootstrap
    
* Got to http://getbootstrap.com/getting-started/
    * Click on the button "Download Bootstrap"
    * Extract the contents of the zip file
    * Copy the file `css/bootstrap.min.css` to your `css` folder
    * Copy the directory `fonts` to the root of your project
    * Create a new directory `js` in your project
    * Copy the file `js/bootstrap.min.js` to your new `js` in your project
    * link to the CSS and JS files from your HTML (`css/bootstrap.min.css` and 
       `boostrap.min.js`)
    * Include jQuery from the CDN before the script for bootstrap

## Grid system

* `col-xs-3` means three columns for extra small devices and bigger (all devices)

## Javascript

* Introduction to JavaScript
    * It was created in 7-10 days
    * Its loosely typed
        * Variables change type according to its content
* Statements
    * variable declaration `var identifier`;
        * An identifier cannot start with a number
        * Cannot include spaces
        * Cannot include dashes
        * They can include underscores
    * assignment
        `identifier = "value";`
* Expression
    * Is a statement that returns a value
        * A variable declaration is NOT a expression
        * An assignment IS a expression
    * All expressions have types
        * a boolean expression
        * a numeric expression
        * a string expression
* Javascript will try to convert the values of variables based on the operator
    * `x && y`, will try to convert both `x` and `y` to booleans if they have a different type
    * `x * y`, will try to convert the variables to numbers
    * `x + y`, is more complicated because `+` is used for both addition and concatenation,
       so JS will look at the types of the variables, if one of them is a string, it will be
       concatenation
* String Indexes in JavaScript

    We start counting from 0

    ```
    string:  "codeup"
    indexes:  012345
    ```
    
    * The character at index `0` is `c`
    * The character at index `3` is `e`
    
* Loops Break / Continue
    - `break` will stop the execution of the whole loop.
    - `continue` will skip the current cycle of loop and jump to the next iteration.
    

## Control flow statemens

* There's 3 main types
    * sequential
    * conditionals
    * loops
* Types of conditionals
    * if
        * ternary operation
    * switch
* Types of loops
    - while
    - do-while
    - for

## Understanding arrays and objects

* Types
    * Simple (1 single value)
        * booleans, numbers, strings
    * Complex (composition, several values)
        * array -> groups, sets, collections, of similar things
            * name[1], name[0] (key (number) -> value (anything))
        * object -> describing the properties of books
            * book["title"], book["author"] (key (string) -> value (anything))
            * book.title, book.author
        * books[0].title "Clean code"
        * books[0]["author"] "Robert Martin"

## Chrome debugger

1. Open your Chrome dev tools
1. Switch to the Sources tab
1. Click on the file name that contains your JavaScript code
1. Add a breakpoint in the first line ypu want  to debug (click to left of the line number,
   the line will become blue-ish)
1. Refresh your page
1. Use the button "Step over" to move between lines

## Semantic versioning

In simple words

* `1.2.3` -> `major.minor.patch`
   * major. New stuff yay! Old stuff might not work as before, careful!!!
   * minor. New stuff, yay!
   * patch. Sorry my bad

## Resources

### For typing and shortcuts

* [Typing club](https://www.typingclub.com/)
* [Typing IO](https://typing.io/)
* [Shortcut foo](https://www.shortcutfoo.com/)

### Services to include images

* [Image placeholders](https://placeholder.com/)
* [Lorem ipsum images](http://lorempixel.com/)
* [Free stock photos](https://www.pexels.com/)

### Validators

* [HTML validator](https://validator.w3.org/)

### Miscellaneous

* [Is the HTML/CSS feature supported?](https://caniuse.com/)
* [Google fonts](https://fonts.google.com/)

# Notes for HTML and CSS

* Sites to practice typing and shortcuts
    * typing club, typing IO, shortcut foo
* Working with files and directories
    * Directory / File
        * Hidden files start with a `.`
        * `pwd` Print working directory
        * `mkdir` Create directory
        * `cd` Change directory, moves to a specific directory
        * `cd ..` leave directory, go to the parent directory
        * `ls` List files
        * `touch` Creates an empty file
        * `cat` Show the contents of a file
        * `rm` Delete files or directories
            * We'll add a flag `-r` recursive
                * `rm -r directory` If the directory has only empty directories or is empty itself
                * `rm -rf directory` If the directory or any inner directory has files
                * Repeat the same operation to the directories within the current directories
                * It implies some sort of repetition of the same process
                * directories are containers
* Git workflow
    * `git status`
    * `git commit --amend -m "Missing message"`
    * `git add filename`
        * `git add .` This adds everything in the current directory, but
           deleted files
        * `git add -A` This adds everything, even ignored files
    * `git commit -m "Add examples for HTML forms"`
    * `git commit`
        * If your editor is vim
            * Press `i` to start typing
            * Once your done, press `esc`
            * To quit the editor press `:wq`
    * `git log` to see your new commit
    * `git push origin master`
* HTML Overview
    * Elements are containers (grammar)
        * Elements can have either more elements or text (text nodes)
        * Types of elements 
            * Block level -> div, p, h1, h6
            * Inline elements -> strong, em, span
            * Void elements -> br, meta, hr
        * Rules
            * block within block (valid)
            * inline within inline (valid)
            * inline within block (valid)
            * are void elements block elements (some of them -> br, hr)
            * block within inline (invalid)
        * Attributes (describe elements)
            * examples: class, id, src, href
            * required: a -> href
            * optional: p -> class
    * Without errors vs Valid
        * well-formed documents (syntax)
            * Have a correct syntax
        * mal-formed documents (syntax errors)
            * A non-void element must have a closing
    * Valid document/Invalid document
        * https://validator.w3.org/
        * Follow the rules defined by the doctype

## HTML forms

* What's the HTTP protocol?
    * Rules to exchange messages in Internet
* Types of messages
    * Questions
    * Command
* Messages come in pairs request/response
* HTTP verbs
    * GET - questions
    * POST - commands
    * There are more: PUT, DELETE
* Parts of a message
    * Headers
        * Meta-information (configuration)
            * Status code: 200 OK, 404 Not found, 500 Server error
            * Content type: image, audio, video, text, html, pdf
    * Body
            * The real content

### Forms and form elements

#### Default values in forms
* The default method for forms is `get`
* The default type for `input` is `text`
* The default type for `button` is `submit`

#### How is the information sent
* Depending on the method the information is sent to the server within
    * The request **body** if it's a post request
    * The request **headers** if it's a get request (in the query string)
    * In both cases the format is the same
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

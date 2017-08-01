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
    
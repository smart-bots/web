# Material Lite

--------------

For developing based on the theme you want to setup your workflow with the following steps:

#### Grunt and Bower
make sure you have node.js installed (http://nodeguide.com/beginner.html)
```sh
$ npm install -g grunt-cli
$ npm install -g bower
```

#### Using grunt and bower
With bower you can download the needed packages and with npm you need to download the grunt dependencies
```sh
$ cd /to/path/where Gruntfile.js and bower.json are located
$ npm install
$ bower install
```

#### Workflow
The project is divided into two parts "demo" and "blank". The demo contains all our examples and is what we use to showcase this template.
When you are looking for code examples this is the first place you should look.

### Directory structure
- bower_components                        (Vendors, you can ignore this directory)
- config                                  (Grunt configs)
- demo                                    (Generated demo based off of src/)
- node_modules                            (Modules used by node)
- src                                     (Source files for the template)
  - css
    - sass
      - demo                              (sass files need for the demo)
      - material-lite                     (core material-lite files)
      - material-lite-blank.scss          (index file for a blank project)
      - material-lite-demo.scss           (index file for demo)
    - material-lite-blank.css             (generated css file)
    - material-lite-demo.css              (generated css file)
  - js
    - blank                               (source files for blank project)
    - demo                                (source files for the demo)
    - directives                          (directives not demo or blank specific)
    - modules                             (modules not demo or blank specific)
    - vendors                             (additional vendors)
  - pages                                 (example pages)
  - tpl
    - blank                               (HTML views for blank project)
    - demo                                (HTML views for the demo)
    - partials                            (HTML partials not demo or blank specific, usually for directives or modules)
  - blank.html                            (HTML base for blank project)
  - index.html                            (HTML base for demo)

### Grunt tasks
The following grunt tasks can be used for development and compiling a new release:

Use the default grunt task while developing to check your JS for errors and recompile SASS when making scss changes
```sh
$ grunt
```

If you want to create a new version of the demo and compile everything run
```sh
$ grunt demo
```

### Viewing the template

We've added a grunt serve so you directly view the theme, just run
```sh
$ grunt serve
```
Browse to http://localhost:9000/src/index.html

Your own webserver:
Place the files inside your (local) webserver and open up src/index.html, src/blank.html or after generating the demo demo/index.html

licences
user icons - http://www.freepik.com/free-vector/user-avatars-pack_746488.htm#term=user&page=1&position=2

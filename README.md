# grunt-remove-comments

> To remove the comments in JS and CSS. Support single line comments and mulitiline comments.

You can browse [中文说明](https://github.com/echoloyuk/grunt-remove-comments/blob/master/README_cn.md) here.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-remove-comments --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-remove-comments');
```

## The "remove_comments" task

### Overview
In your project's Gruntfile, add a section named `remove_comments` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  remove_comments: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.multiline
Type: `Boolean`
Default value: `true`

Whether to remove multi-line block comments

#### options.singleline
Type: `Boolean`
Default value: `true`

Whether to remove the comment of a single line. 

Note: The single line comment is include the comments in a code line. There are a another option work on it.

#### options.keepSpecialComments
Type: `Boolean`
Default value: `false`

Whether to keep special comments, like: `/*! !*/`

#### options.linein
Type: `Boolean`
Default value: `true`

Whether to remove a line-in comment that exists in the line of code, it can be interpreted as a single-line comment in the line of code with `/*` or `//`.

### Usage Examples

#### Default Options

This is the most sample options.

```js
grunt.initConfig({
  remove_comments: {
    src: '**/*.js',
    dest: 'test/dest/'
  },
});
```

#### Custom Options

Custom configuration allows you to use Grunt's basic configuration, following grunt's src and dest file standards。Please browse [Grunt Option](https://www.gruntjs.net/configuring-tasks) to know. 

The configuration below shows how to set the type of comment removal, including multiple line types, single lines, single lines within code, and more.

```js
grunt.initConfig({
  remove_comments: {
    default: {
      options: {
        multiline: true,
        singleline: false,
        keepSpecialComments: false,
        linein: true
      },
      cwd: 'test/origin/',
      src: '**/*.js',
      expand: true,
      dest: 'test/dest/'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

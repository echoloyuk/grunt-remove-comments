# grunt-remove-comments

> A Grunt plugins: To remove the comments in JS and CSS. Support single line comments and mulitiline comments.

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

#### options.isCssLinein
Type: `Boolean`
Default value: `false`

当前要处理的批量文件是否是CSS文件。由于CSS文件和JS文件稍有区别，CSS中的`//`的注释是不合法且不支持的，因此，如果你需要处理CSS注释时，就不能去掉`//`开头的内容，例如`background: url(//www.your.com/img)`。将该字段设置为true，本插件将不会处理以`//`存在的内容。

Whether the file currently being processed is a CSS file. Because of the CSS file and the JS file are slightly different, the comments like `//` in CSS is illegal and unsupported. Therefore, if you need to process CSS comments, you cannot remove the contents of `//`, for example ` Background: url(//www.your.com/img)`. Setting this option to `true` will not handle content that exists in `//`.

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

For removing JS comments. You can write like this:

```js
grunt.initConfig({
  remove_comments: {
    js: {
      options: {
        multiline: true,
        singleline: true,
        keepSpecialComments: false
      },
      cwd: 'test/origin/',
      src: '**/*.js',
      expand: true,
      dest: 'test/dest/'
    },
  },
});
```

For removing CSS comments. You will see that `isCssLinein` is set to `true`:

```js
grunt.initConfig({
  remove_comments: {
    css: {
      options: {
        multiline: true,
        singleline: true,
        keepSpecialComments: true,
        linein: true,
        isCssLinein: true
      },
      cwd: 'test/origin/',
      src: '**/*.css',
      expand: true,
      dest: 'test/dest/'
    }
  },
});
```

## Release History

- 2018-11-24 birthday

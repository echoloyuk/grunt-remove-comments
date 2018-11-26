# grunt-remove-comments

> To remove the comments in JS and CSS. Support single line comments and mulitiline comments.

## First

当前插件需要的Grunt版本号为`~0.4.5`.

如果你还没使用过[Grunt](http://gruntjs.com/)，请您先阅读并了解Grunt的基本使用指引[Getting Started](http://gruntjs.com/getting-started)。该指引将解释如何创建[Gruntfile](http://gruntjs.com/sample-gruntfile)，以及如何安装Grunt插件。当您做好上述准备之后，您就可以安装该插件，命令如下：

```shell
npm install grunt-remove-comments --save-dev
```

插件安装之后，它就可以直接在您的Gruntfile文件中使用了：

```js
grunt.loadNpmTasks('grunt-remove-comments');
```

## The "remove_comments" task

### 配置

在您的Gruntfile中的`grunt.initConfig()`增加`remove_comments`配置

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

是否去掉多行块注释

#### options.singleline
Type: `Boolean`
Default value: `true`

是否去掉单独行的注释。注意，这里并不是存在与代码行中的单行注释。而是独立于代码存在的单行注释。

#### options.keepSpecialComments
Type: `Boolean`
Default value: `false`

是保留`/*!     !*/`的特殊注释。

#### options.linein
Type: `Boolean`
Default value: `true`

是否去掉存在于代码行中的单行注释，它可以解释为代码行中以`/*` 或 `//`存在的单行注释。


### Usage Examples

#### Default Options

该配置会将`**/*.js`匹配的文件全都依次去掉所有注释。

```js
grunt.initConfig({
  remove_comments: {
    src: '**/*.js',
    dest: 'test/dest/'
  },
});
```

#### Custom Options

自定义配置允许你使用

```js
grunt.initConfig({
  remove_comments: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```


## Release History

- 2018-11-24 birthday


# grunt-remove-comments

> 基于Grunt的删除CSS和JS中的注释的插件。

你可以浏览英文说明[English Readme](https://github.com/echoloyuk/grunt-remove-comments/blob/master/README.md)

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

#### options.isCssLinein
Type: `Boolean`
Default value: `false`

当前要处理的批量文件是否是CSS文件。由于CSS文件和JS文件稍有区别，CSS中的`//`的注释是不合法且不支持的，因此，如果你需要处理CSS注释时，就不能去掉`//`开头的内容，例如`background: url(//www.your.com/img)`。将该字段设置为true，本插件将不会处理以`//`存在的内容。


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

自定义配置允许你使用Grunt的基本配置，遵循grunt的src和dest文件标准。详情你可以参考[Grunt Option](https://www.gruntjs.net/configuring-tasks)。自定义配置允许你设置去除注释的类型，包含多行、单行、代码内单行等不同注释类型。

下面给出一个最通用的去除JS注释的配置，你可以这样写：

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

下面再给出一个通用的去除CSS注释的配置，你会看到`isCssLinein`被设置为`true`：

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


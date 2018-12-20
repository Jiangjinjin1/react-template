## 刚拉的项目先执行下面两个命令之一

```bash
npm run postinstall

# 或者

npm run enablePrePush
```

## hooks也可以用三方库配置

例如pre-commit和pre-push

```json
  "scripts": {
      "lint": "……",
  },
  "pre-commit": ["lint"]
```

## 如果使用vscode，再添加.editorconfig

> 注意：解决项目‘LF’的问题！！！

> 1.拉代码之前，要先设置git 规则和vscode的规则

```text
git需要设置：git config --global core.autocrlf input
vscode设置："files.eol": "\n"
```

## 依赖包作用解释

> @babel/plugin-proposal-class-properties  是类中定义实例属性的新方法,以前定义实例的属性只能写在constructor中，现在可以直接写在外面

```javascript
//以前定义实例属性写在constructor
class Test extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
}
//现在定义实例属性可以直接写在外面
class Test extends React.Component{
	state = {}
}
```

> @babel/plugin-proposal-decorators  使用修饰器语法
我使用修饰器语法的场景：

**react的状态管理mobx需要@observable、@observer来观察变化
react路由需要@withRouter将路由信息传递给组件的props对象上
antd组件的form表单@Form.create()等**

> case-sensitive-paths-webpack-plugin  兼容不同系统下的webpack获取的实际路径

> eslint-plugin-import  eslint-import-resolver-babel-module  两个库结合使用

```json
// 在.eslintrc.json中配置
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
}
```

> 配置typescript + eslint会用到的库

+ typescript    // 将.babelrc中"presets"的"react-app"对象参数中增加typescript: true,
+ typescript-eslint-parser  // 将.eslintrc.json中parser换成typescript-eslint-parser 
+ @babel/preset-typescript  // 在.babelrc的presets里配置"@babel/typescript"
+ eslint-plugin-typescript // 在.eslintrc.json的plugins里添加"typescript"

**"typescript/no-unused-vars": "warn"** 设置规则，否则引入interface会报定义未使用no-unused-vars

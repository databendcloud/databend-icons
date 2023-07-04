# databend-icons
Icons for Databend Cloud

# View the display effect
https://databendcloud.github.io/databend-icons/

# Install
```js
yarn add git+https://github.com/databendcloud/databend-icons.git#package
```

# How to use
```js
import { Loading } from 'databend-icons';

props:
<Loading size="20" className="class-name" onClick={action}/>
{
  size: number // default: 20
  className: string // clsx('icon default', class-name)
  onClick: ()=> void;
}
```

# May be you need css Or you can define your own style (define your own className)
Tips: This css is just an example, Feel free to change it yourself
```css
  .icon.default{
     fill: transparent;
     stroke: rgb(1, 14, 41);
   }
  .icon.default:has(path[fill-rule="evenodd"]:not(:last-child)) {
     fill: rgb(1, 14, 41);
  }
```

# How to update
Change the version field of package.json, incrementally, submit to the main branch, and ci will be built automatically，as illustrated in following figure：

![image](https://user-images.githubusercontent.com/15354455/206726455-89b8f7f7-f2db-4363-8a1d-a2e071e4164c.png)


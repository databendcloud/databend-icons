# databend-icons
Icons for Databend Cloud

# How to update
Change the version field of package.json, incrementally, submit to the main branch, and ci will be built automatically
![image](https://user-images.githubusercontent.com/15354455/206726320-f79d949f-bc94-4076-bfc3-67fd731c6aca.png)


# View the display effect
https://databendcloud.github.io/databend-icons/

# Install
```js
yarn add git+https://github.com/databendcloud/databend-icons.git#package
```

# How to use
```js
import { Loading } from '@databendcloud/databend-icons';
```

# May be you need css Or you can define your own style
Tips: This css is just an example, You're free to play 
```css
  .icon.default{
     fill: transparent;
     stroke: rgb(1, 14, 41);
   }
  .icon.default:has(path[fill-rule="evenodd"]:not(:last-child)) {
     fill: rgb(1, 14, 41);
  }
```


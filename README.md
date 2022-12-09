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
import { Loading } from '@databendcloud/databend-icons';
```

# May be you need css Or you can define your own style
example: 
```css
  .icon.default{
     fill: transparent;
     stroke: rgb(1, 14, 41);
   }
  .icon.default:has(path[fill-rule="evenodd"]:not(:last-child)) {
     fill: rgb(1, 14, 41);
  }
    
 This css is just an example, you can play with it
```


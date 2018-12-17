# CSDN 去除查看更多登录插件

## 背景

我们百度出来的资料，大量引用CSDN，但是CSDN默认文章显示一点，有个查看更多，点击查看更多就需要登录，这种方式让人很难受，所以写了这个插件。代码特别简单，只有两行，就是当页面加载完，将遮罩删除，显示全文，代码如下：

```js
// 删除查看更多遮罩层
document.getElementById("btn-readmore").parentNode.remove();

// 调整正文高度，取消overhidden
document.getElementById('article_content').removeAttribute('style');
```



## 使用说明

- 本功能使用的是Chrome浏览器插件

- 部分人没有翻墙，而且上Chrome市场比较麻烦，所以采用本地生成crx文件的方式

- 下载本项目

  ```shell
  git clone https://github.com/Shiyajian/CSDN-clear.git
  ```

- 在Chrome地址栏输入

  ```
  chrome://extensions/
  ```

  - 开启右上角开发者模式
  - 选择 **打包拓展应用**，然后选中本项目路径，完成后生成crx文件
  - 将crx文件再拖进浏览器中即可
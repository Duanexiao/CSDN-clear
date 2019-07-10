// 删除查看更多遮罩层
document.getElementsByClassName("hide-article-box")[0].remove();

// 调整正文高度，取消overhidden
document.getElementById('article_content').removeAttribute('style');
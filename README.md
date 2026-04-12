# 京东首页核心模块还原与交互实现

基于现代 HTML5 + CSS3 + 原生 JavaScript 独立实现的京东首页核心交互模块，重点还原并优化了头部导航、搜索推荐、轮播图、电梯导航等高频交互场景，适配多端响应式布局。

**在线体验**：https://floraragent.github.io/jd-homepage/

## 技术栈
- HTML5 + CSS3（Flex、Grid、定位、z-index、CSS模块化）
- 原生 JavaScript（ES6+）
- 响应式布局（媒体查询 + rem/vw 适配）
- 无框架纯原生实现

## 主要功能与交互
- 头部导航栏悬停高亮 + 下拉菜单
- 搜索框实时联想推荐 + 防抖处理
- 轮播图：自动播放、手动切换、指示器联动
- 电梯导航：点击滚动定位 + 滚动监听高亮
- 商品卡片悬停效果 + 图片懒加载优化
- 解决 z-index 层级冲突、定时器内存泄漏等常见问题

## 项目亮点
- 完整还原京东首页高频交互模块，锻炼了复杂布局与 JS 交互能力
- 实现轮播图平滑切换与无缝衔接，提升用户体验
- 处理搜索推荐与鼠标事件冲突，优化多事件并发逻辑
- 使用原生 JS 实现与 Vue/React 相似的组件化思维（模块拆分 + 数据驱动）

## 本地运行
```bash
git clone https://github.com/floraragent/jd-homepage.git
cd jd-homepage
# 直接用 Live Server 或者任意静态服务器打开 index.html 即可

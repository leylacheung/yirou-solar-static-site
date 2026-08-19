# 易柔光伏静态产品官网

这个文件夹是一套独立的静态网站，不需要安装软件、不需要数据库，也不依赖原项目中的 React 网站。

## 直接查看

双击 index.html 即可在浏览器中查看。产品搜索、分类筛选和手机菜单可以直接使用。

## 上传到服务器

打开 html-site 后，将其中的全部内容上传到网站根目录（例如 public_html 或站点根目录）。不要把外层 html-site 再嵌套一层：不要上传整个 html-site 文件夹。index.html、assets、images 同级，并保持它们的相对位置不变。不要只上传 `index.html`，也不要删除相对路径。

## 修改公司信息

用文本编辑器打开 `index.html`，搜索“易柔光伏科技有限公司”“info@eflexpv.com”或现有地址，修改对应文字。电话显示文字修改后，也要同步修改 `href="tel:+8619926678723"` 中的号码。

## 修改产品和价格

用文本编辑器打开 `assets/site.js`：

- `structures` 保存产品名称、分类和结构图文件名。
- `priceEntries` 保存产品分类、批次、规格和人民币价格。
- 价格数字直接写整数，例如 `2500` 会显示为 `¥2,500`。
- 每个价格都是含税、含运费参考价；最终报价说明不要删除。

只有以下两组会自动合并：`PNDIT-F3N / F3N`、`BTP-eC9 / BTP-Ec9`。新增别名时必须先确认确实为同一产品。

## 替换产品结构图

结构图位于 `images/products`。新图片建议使用白色背景 PNG。structures 的第三个字段只填写 PNG 文件名，例如 foo.png；不能填写 images/products/ 前缀。实际图片文件放到 images/products/foo.png。替换后刷新浏览器即可看到新图片。

## 修改颜色和字号

用文本编辑器打开 `assets/styles.css`。文件开头的 `--color-bg`、`--color-ink`、`--color-accent` 控制主要颜色；`body` 中的 `font-size` 控制桌面正文基础字号。手机正文字号在 `@media (max-width: 767px)` 中设置，不应低于 `16px`。

## 备份建议

修改前复制一份完整 `html-site` 文件夹。修改产品数据时优先改一项并刷新确认，避免一次修改大量括号或逗号。

# 成医通

成都医学院校园百科平台 —— 由学生志愿者维护的第三方公益 wiki。

**[wiki.cyitong.top](https://wiki.cyitong.top)**

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm docs:dev

# 构建生产版本
pnpm docs:build
```

## 技术栈

基于 [VitePress](https://vitepress.dev) 构建，使用 Vue 3 默认主题扩展。

```
docs/
├── .vitepress/          # 配置、主题、组件、数据
├── campus/              # 校园（专业、医院、社团）
├── freshman/            # 新生指南
├── life/                # 生活服务
├── study/               # 学习
└── public/              # 静态资源
```

## 贡献

欢迎参与内容编写和功能改进，详见[贡献指南](https://wiki.cyitong.top/about/contributing)。

## 许可

- 代码：[MIT](LICENSE)
- 内容：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

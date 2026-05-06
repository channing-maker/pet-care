# 项目说明

## 个人协作偏好

- 使用者叫 ChanNing。
- ChanNing 擅长 Android、Java、Kotlin。
- ChanNing 对 CSS 不熟，解释网页样式时请用大白话，把“这个类会让页面变成什么样”讲清楚。

## 项目概览

- 项目名：`pet-care`。
- 这是一个宠物洗护美容预约单页，品牌文案是“萌爪洗护社”。
- 页面语言是中文，主要面向宠物洗澡、护理、美容造型、皮毛养护和门店预约展示。
- 当前主应用是 Next.js + React + TypeScript，使用 App Router 目录结构。
- 主要页面实现集中在 `app/page.tsx`，全局基础样式在 `app/globals.css`。

## 技术栈

- Next.js：依赖写的是 `latest`，锁文件已存在。
- React / React DOM：依赖写的是 `latest`。
- TypeScript：开启 `strict`，不允许普通 JS 参与编译。
- Tailwind CSS：通过 `@tailwindcss/postcss` 接入，页面大部分样式都写在 JSX 的 `className` 里。
- ESLint：使用 `eslint-config-next/core-web-vitals` 和 `eslint-config-next/typescript`。

## 常用命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 生产启动：`npm run start`
- 代码检查：`npm run lint`

## 目录和文件职责

- `app/layout.tsx`：根布局，设置中文语言 `zh-CN`，并配置页面标题和描述。
- `app/page.tsx`：首页全部内容，包括导航、首屏动画、预约表单、服务卡片、环境轮播、流程、安心标准、联系信息和页脚。
- `app/globals.css`：全局 CSS，只做基础设置，例如全站字体、背景色、链接默认样式、表单字体继承。
- `public/assets/`：Next.js 页面实际访问的图片目录，代码里使用 `/assets/xxx.png` 这种路径。
- `assets/`：和 `public/assets/` 内容重复，更像原始资源或静态 HTML 版本使用的资源目录。
- `index.html`：完整的静态 HTML 版本，内容和 Next.js 页面高度接近；当前 Next.js 应用运行时不依赖它。
- `.next/`：Next.js 构建或开发缓存，不应该手动维护。
- `node_modules/`：依赖目录，不应该手动维护。

## 页面结构

- `Home`：页面总入口，按顺序组合所有区块。
- 顶部导航：固定在页面顶部，包含品牌、锚点导航和“立即预约”按钮。
- 首屏区：包含品牌大标题、电话按钮、预约按钮、三个卖点卡片，以及 `HeroCanvas` 画出来的宠物洗护场景动画。
- `BookingSection`：快速预约表单。当前只在前端读取表单内容并展示“已收到”的提示，没有真正提交到后端。
- `ServicesSection`：服务项目卡片，数据来自文件顶部的 `services` 数组。
- `ShowcaseSection` / `SalonCarousel`：店内环境轮播，数据来自文件顶部的 `slides` 数组。
- `ProcessSection`：四步洗护流程。
- `TrustSection`：营业时间和安心标准。
- `ContactSection`：地址、预约按钮、电话按钮和地图概念图。
- 页脚：版权和“店内环境图由 AI 生成”的说明。
- 页面底部定义了多个 SVG 图标组件，例如 `PawIcon`、`CalendarIcon`、`PhoneIcon`、`FiveStarRatingIcon`。

## 交互逻辑

- `app/page.tsx` 顶部有 `"use client"`，因为页面使用了 React hooks、Canvas 动画和前端表单状态。
- `HeroCanvas` 使用 `canvas` 和 `requestAnimationFrame` 绘制动态背景，窗口尺寸变化时会重新适配画布大小，卸载时会清理监听和动画。
- `BookingSection` 使用 `FormData` 读取宠物类型、服务项目和预约日期，提交后重置表单并显示提示语。
- `SalonCarousel` 每 5.2 秒自动切换一张图。
- 鼠标移入轮播、焦点进入轮播时会暂停自动播放。
- 如果系统设置了“减少动态效果”，轮播会停止自动播放。
- 轮播左右半区是透明按钮，点击左半边上一张，点击右半边下一张。

## 样式约定

- 页面视觉是干净、温暖、偏宠物护理门店的风格。
- 主色大致是深墨绿 `#17201b`、薄荷绿 `#9ddfd3`、珊瑚橙 `#ff7a62`、琥珀黄 `#f7b84b`、米白 `#fffdf7`。
- 圆角基本统一为 `8px`，不要随手改成很大的圆角。
- 内容最大宽度统一由 `containerClass` 控制：`min(1180px, calc(100% - 32px))`。大白话说，就是桌面端最多 1180 像素宽，手机端左右各留 16 像素空白。
- 主要布局依赖 Tailwind 的响应式类，例如 `max-[980px]:grid-cols-1` 表示屏幕小于 980 像素时改成一列。
- 全局字体在 `app/globals.css` 里设置，优先中文系统字体，整体 `letter-spacing` 是 `0`。
- 页面里没有独立的 CSS Module，改样式时优先在对应组件的 `className` 中调整。

## 图片资源

- `salon-wash-spa.png`：洗护水疗区，尺寸 1672 x 941。
- `salon-styling-studio.png`：美容造型区，尺寸 1672 x 941。
- `salon-reception-lounge.png`：接待休息区，尺寸 1672 x 941。
- `store-map-ai.png`：门店地图概念图，尺寸 1586 x 992。
- Next.js 页面使用 `next/image` 加载图片，图片路径应放在 `public/assets/` 下。
- 当前图片是 AI 概念图，页脚和轮播角标都有说明。

## 修改注意事项

- 如果只是改文案、服务项目、价格或轮播图，优先修改 `app/page.tsx` 顶部的 `services` 和 `slides` 数据。
- 如果新增真实预约能力，需要给 `BookingSection` 接后端接口或表单服务；现在没有网络提交逻辑。
- 如果改地图或门店地址，请同步改 `ContactSection` 里的可见地址、地图图片 `alt`、`aria-label`。
- 如果改首屏动画，注意 `HeroCanvas` 里的 resize 监听和 `requestAnimationFrame` 清理逻辑。
- 如果改样式，尽量保持 8px 圆角、现有色彩和响应式断点风格一致。
- 修改后建议至少运行 `npm run lint`，有页面结构或图片变化时再跑 `npm run build`。

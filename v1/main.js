import ReactDOM from "./core/ReactDom.js";

import React from "./core/React.js";

// target 1 : 页面添加app元素
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";

// dom.append(textNode);

// target 2: 通过虚拟dom来实现 react -> vdom -> js Object
// 使用object来描述对象 关键有以下属性:
// 1. type => 标签的类型
// 2. props => 标签的属性

// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };
// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

// const dom = document.createElement(el.type);
// dom.id = el.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;

// dom.append(textNode);

// target 3: 如何动态创建虚拟dom

// 创建文本节点

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.nodeValue;
// dom.append(textNode);

// target 4:   如何创建节点
// 1. 创建节点
// 2. 设置属性
// 3. 添加到父元素里面

// const textEl = creatTextNode("app");

import App from "./App.js";
ReactDOM.createRoot(document.getElementById("root")).render(App);

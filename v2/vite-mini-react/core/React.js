const creatTextNode = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
};
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "string" ? creatTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  const dom =
    el.type !== "TEXT_ELEMENT"
      ? document.createElement(el.type)
      : document.createTextNode("");
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  // 处理children
  const children = el.props.children;
  children.forEach((child) => {
    render(child, dom);
  });
  container.append(dom);
}

const React = {
  createElement,
  render,
};

export default React;

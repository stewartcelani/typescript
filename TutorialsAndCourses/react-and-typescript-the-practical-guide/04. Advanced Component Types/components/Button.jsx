"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Button(props) {
  if (props.el === "a") {
    return (
      <a href={props.href} {...props}>
        {props.children}
      </a>
    );
  }
  return <button {...props}>{props.children}</button>;
}
exports.default = Button;

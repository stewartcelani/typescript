"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Input(_a) {
    var id = _a.id, label = _a.label, type = _a.type;
    return (<p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type}/>
        </p>);
}
exports.default = Input;

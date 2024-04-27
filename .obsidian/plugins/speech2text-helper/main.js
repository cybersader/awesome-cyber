/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SpeechToTextKeyboardHelper
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var SpeechToTextKeyboardHelper = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.commands = [
      {
        name: "Prepend new line (and jump to it)",
        id: "prepend-new-line",
        editorCallback: (editor) => {
          const line = editor.getCursor().line;
          createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor, line);
        }
      },
      {
        name: "Append new line (and jump to it)",
        id: "append-new-line",
        editorCallback: (editor) => {
          const line = editor.getCursor().line + 1;
          createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor, line);
        }
      }
    ];
  }
  async onload() {
    this.commands.map((e) => this.addCommand(e));
  }
};
function createNewLineBeforeGivenLineAndSetCursorPossitionToIt(editor, line) {
  editor.replaceRange("\n", { line, ch: 0 });
  editor.setCursor({ line, ch: 0 });
}

export const eel = window["eel"];

eel.expose(hello);
function hello(x) {
  console.log(`${x} from python`);
}
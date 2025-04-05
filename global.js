console.log("This is a global script.");

function $$ (selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}
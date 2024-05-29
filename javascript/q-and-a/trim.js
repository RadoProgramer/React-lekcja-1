// const text = "Message";
// const text = " Message";
// const text = " Message ";
const text = "   Message      ";

const log = (str) => console.log(str, str.length);

log(text);
log(text.trim());

function createFileName(name, ext) {
  //   return trimmedName.extension;
  return name.trim() + "." + ext.trim();
  //   return `${name.trim()}.${ext.trim()}`;
}

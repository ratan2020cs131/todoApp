export default () => {
  let code = Math.floor(100000 + Math.random() * 900000);
  return code.toString().padStart(6, "0");
};

const getKeyCode = (e) => {
  let code;

  if (e.key !== undefined) {
    code = e.key;
  } else if (e.keyIdentifier !== undefined) {
    code = e.keyIdentifier;
  } else if (e.keyCode !== undefined) {
    code = e.keyCode;
  }

  return code.toLowerCase();
};

// exports.getKeyCode = getKeyCode;
// module.exports = { getKeyCode };
export { getKeyCode };

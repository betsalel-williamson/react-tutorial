/**
 *
 * @returns Simple hello world message
 */
function Message() {
  const name = false; // "Saul";

  if (name) {
    return <h1>Hello {name}</h1>;
  }

  return <h1>Hello others</h1>;
}

export default Message;

export default window.onload = () => {
  const textElement = document.createElement("h1");

  textElement.style.color = "red";
  textElement.style.position = "absolute";
  textElement.style.top = "0";
  textElement.style.right = "1";
  textElement.textContent = "Hello from the Content Script!!!";

  document.body.appendChild(textElement);
};

function saveTextAsFile() {
  const textToSave = document.getElementById("inputTextToSave").value;
  const textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
  const textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  const fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

  const downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
}

function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

const back = document.querySelector(".backbtn");

back.addEventListener("click", function () {
  console.log("Back");
})

console.log(back)

function backPage() {
  const home = document.querySelector("#mainbox");
  const code = document.querySelector("#output");

  alert('Teste')
}

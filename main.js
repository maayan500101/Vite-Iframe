function loadFunction() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJKb3VybmFsIjoiMTA5IiwiSXNBZG1pbiI6IlRydWUifQ.bVm79GZLO9-H1jE9irSJvD9Gi76LhjceHEwPuH48IVs";
  const srcUrl = "http://localhost:3000";

  document.querySelector("iframe").contentWindow.postMessage(token, srcUrl);
}
alert(5)
)

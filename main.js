function loadFunction() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXR5SWQiOjEwNywiam91cm5hbCI6ImFsbEhvc3BpdGFscyIsImlzQWRtaW4iOnRydWV9.2nG-_7H5mPS5DyEAZNE_lB4F5J-DGHC1V76q2txpz0g";
  const srcUrl = "http://localhost:3000";

  document.querySelector("iframe").contentWindow.postMessage(token, srcUrl);
}
alert(import.meta.env.REACT_APP_SHUAL_TOKEN)

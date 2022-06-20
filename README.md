# JokesExtensionforChrome

An amazing extension that will lighten up your day with cheerful jokes!!

 > Screenshots
 
 &nbsp;

![screenshot3](https://user-images.githubusercontent.com/96099806/166458695-3129c7be-cdb4-4d14-b25f-3a40f8ea54bc.png)

&nbsp;

 > New Dark Mode

&nbsp;

``` JavaScript
const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("click", () => {
  const body = document.getElementById("body");
  body.classList.toggle("dark");
  const dark_btn = document.getElementById("toggle");
  dark_btn.classList.toggle("uil-sun");
  dark_btn.classList.toggle("uil-moon");
});
```








fetch('/code/data/style/json/style of home page.json')
  .then(res => res.json())
  .then(style => {
    const el = document.getElementById("LogoSunchineSalonFormatATagpPageHome");

    el.style.backgroundColor = style["background-color"];
    el.style.color = style["color"];
    el.style.fontStyle = style["text-style"];
    el.style.fontWeight = style["text-bold"];
    el.style.fontFamily = style["text-fmly"];
  });
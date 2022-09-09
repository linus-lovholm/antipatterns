// COLORS
// "yellow"
// #f6f6ff - light grey
// #4a412a - Pantone 448 C (Worst color in the world)
// #4e4326 - Pantone 448 C saturated
// #8000000 - WEbsafe Mar00n

export default function Test(props) {
  let colors = ["yellow", "#4a412a", "lightyellow", "#40e0d0"];
  let fonts = [
    "Times New Roman",
    "Comic Sans MS",
    "Brush Script MT",
    "Courier New",
  ];
  let backgrounds = ["#4a412a", "ff25b4", "#ffffff"];
  let currentColor = 0;
  let currentFont = 0;
  let currentBackground = 0;
  let doc = document.querySelectorAll("h1");

  function changeColor() {
    --currentColor;
    if (currentColor < 0) currentColor = colors.length - 1;
    for (var i = 0; i < doc.length; i++) {
      doc[i].style.color = colors[(currentColor + i) % colors.length];
    }
  }
  window.setInterval(changeColor, 1000);

  function changeFont() {
    --currentFont;
    if (currentFont < 0) currentFont = fonts.length - 1;
    for (var i = 0; i < doc.length; i++) {
      doc[i].style.fontFamily = fonts[(currentFont + i) % fonts.length];
    }
  }
  window.setInterval(changeFont, 1200);

  function changeBackground() {
    --currentBackground;
    if (currentBackground < 0) currentBackground = backgrounds.length - 1;
    for (var i = 0; i < doc.length; i++) {
      doc[i].style.backgroundColor =
        backgrounds[(currentBackground + i) % backgrounds.length];
    }
  }
  window.setInterval(changeBackground, 2000);

  return (
    <h1
      style={{
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        color: props.color,
      }}
    >
      Anmälan till ampLiFy!11!!1
    </h1>
  );
}

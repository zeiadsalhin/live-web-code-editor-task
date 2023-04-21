//local storage

//html
document.getElementById("htmlCode").addEventListener("change", () => {
  htmlcodecontent = document.getElementById("htmlCode").value;
  localStorage.setItem("html", htmlcodecontent);
  console.log(htmlcodecontent);
});

const ls = localStorage.getItem("html") || "<div>\n\n</div>\n";

//css
document.getElementById("cssCode").addEventListener("change", () => {
  csscodecontent = document.getElementById("cssCode").value;
  localStorage.setItem("css", csscodecontent);
  console.log(csscodecontent);
});

const ls1 = localStorage.getItem("css") || "<style>\n\n</style>\n";

//js
document.getElementById("jsCode").addEventListener("change", () => {
  jscodecontent = document.getElementById("jsCode").value;
  localStorage.setItem("js", jscodecontent);
  console.log(jscodecontent);
});

const ls2 = localStorage.getItem("js") || "<script>\n\n</script>\n";

const htmlcode = (document.getElementById("htmlCode").value = `${ls}\n`);
const csscode = (document.getElementById("cssCode").value = `${ls1}\n`);
const jscode = (document.getElementById("jsCode").value = `${ls2}\n`);

// load saved preveiw data
window.onload = showPreview();
function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

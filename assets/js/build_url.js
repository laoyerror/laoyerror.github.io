function build_url() {
  var url = encodeURI(decodeURI(document.querySelector("#url").value));
  if (url === "" || url.indexOf("http") === -1) {
    document.getElementById(
      "b_url"
    ).innerHTML = `输入的不是链接或者未加http请求头！`;
  } else {
    // url = document.location.href + "go/?url=" + url;
    let arr = url.split("/");
    let text = arr[arr.length - 1].replace(".html", "");
    url = document.location.href + "?p=" + text;
    document.getElementById(
      "b_url"
    ).innerHTML = `<a href='javascript:void(0);'>${url}</a>`;

    if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(url);
    } else {
      var textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      // 隐藏此输入框
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      // 赋值
      textarea.value = url;
      // 选中
      textarea.select();
      // 复制
      document.execCommand("copy", true);
      // 移除输入框
      document.body.removeChild(textarea);
    }
  }
}

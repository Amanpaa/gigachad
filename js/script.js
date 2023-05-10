const achHtml = document.querySelector('.html-btn');
const achCss = document.querySelector('.css-btn');
const achJs = document.querySelector('.js-btn');
const resultBtn = document.querySelector('.result-btn')
const textArea = document.getElementById('text-code-area');
const previewArea = document.querySelector('.preview');
let codeType;
let languageMode = 'xml';

function archive(elementAch) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  elementAch.classList.add('selected');
  saveText();

  switch (elementAch) {
    case achHtml:
      codeType = codeHtml;
      languageMode = 'xml';
      break;
    case achCss:
      codeType = codeCss;
      languageMode = 'css';
      break;
    case achJs:
      codeType = codeJs;
      languageMode = 'javascript';
      break;
    case resultBtn:
      Preview('show');
      previewArea.contentWindow.location.reload();
      break;
    default:
      Preview('hide');
  }

  codemirrorEditor.setOption('mode', languageMode);
  document.querySelector('.CodeMirror').CodeMirror.setValue(codeType);
}

function saveText() {
  let code;
  switch (languageMode) {
    case 'xml':
      code = codeHtml;
      break;
    case 'css':
      code = codeCss;
      break;
    case 'javascript':
      code = codeJs;
      break;
  }
  localStorage.setItem(`value${languageMode[0].toUpperCase()}${languageMode.slice(1)}`, codemirrorEditor.getValue());
  console.log(localStorage.getItem('valueHtml'));
  console.log(localStorage.getItem('valueCss'));
  console.log(localStorage.getItem('valueJs'));
}

function Preview(typeP) {
  const codeMirrorElement = document.querySelector('.CodeMirror');
  switch (typeP) {
    case 'show':
      codeMirrorElement.style.display = 'none';
      previewArea.style.display = 'block';
      break;
    case 'hide':
      codeMirrorElement.style.display = 'block';
      previewArea.style.display = 'none';
      break;
  }
}

// values
const codeHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body></body>
</html>`;

const codeCss = `* {
  margin: 0;
  padding: 0;
}`;

const codeJs = `console.log('Hello World!');`;

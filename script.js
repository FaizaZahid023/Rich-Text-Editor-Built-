document.addEventListener('DOMContentLoaded', () => {
  var toolbarButtons = document.querySelectorAll('.toolbar-button');
    var editor = document.querySelector('.editor');
  
    toolbarButtons.forEach(button => {
      button.addEventListener('click', () => {
        var command = button.getAttribute('data-command');
  
        if (command === 'fontSize') {
         var fontSize = prompt('Enter font size (1-7)', '3');
          document.execCommand(command, false, fontSize);
        } else if (command === 'fontFamily') {
          var fontFamily = prompt('Enter font family', 'Arial');
          document.execCommand(command, false, fontFamily);
        } else if (command === 'foregroundColor') {
          var color = prompt('Enter text color (e.g., red, #ff0000)', '#000000');
          applyTextStyle('color', color);
        } else if (command === 'backgroundColor') {
          var color = prompt('Enter background color (e.g., yellow, #ffff00)', '#ffff00');
          applyTextStyle('backgroundColor', color);
        } else if (command === 'createLink') {
          var url = prompt('Enter the URL', 'https://');
          document.execCommand(command, false, url);
        } else if (command === 'insertImage') {
          var imageUrl = prompt('Enter the image URL', 'https://');
          document.execCommand(command, false, imageUrl);
        } else {
          document.execCommand(command, false, null);
        }
      });
    });
  
    function applyTextStyle(styleProperty, value) {
    var selection = window.getSelection();
      if (!selection.rangeCount) return;
  
      var range = selection.getRangeAt(0);
      var span = document.createElement('span');
      span.style[styleProperty] = value;
      range.surroundContents(span);
    }
  });
  
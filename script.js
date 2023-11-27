function justifyContent(value) {
    var parent = document.querySelector('.parent');
    parent.style.justifyContent = value;
  }

  function flexDirection(value) {
    var parent = document.querySelector('.parent');
    parent.style.flexDirection = value;
  }
    item1_Color = document.getElementById('item1-Color');
    item2_Color = document.getElementById('item2-Color');
    item3_Color = document.getElementById('item3-Color');
    item4_Color = document.getElementById('item4-Color');
    
    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    item1_Color.style.backgroundColor = getRandomColor();
    item2_Color.style.backgroundColor = getRandomColor();
    item3_Color.style.backgroundColor = getRandomColor();
    item4_Color.style.backgroundColor = getRandomColor();
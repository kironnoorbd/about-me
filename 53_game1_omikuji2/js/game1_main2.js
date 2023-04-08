'use strict';

window.addEventListener('DOMContentLoaded',
  function() {
    // ページ本体が読み込まれたタイミングで実行するコード

    // おみくじボタン１
    {
      let btn1 = document.getElementById('btn1');
      btn1.addEventListener('click', () => {
        let n = Math.floor(Math.random() * 3);
    
            switch (n) {
              case 0:
                btn1.textContent = 'Very Happy!!';
                btn1.style.backgroundColor = '#FF0000';
                break;
              case 1:
                btn1.textContent = 'Happy!';
                btn1.style.backgroundColor = '#fff001';
                break;
              case 2:
                btn1.textContent = 'UnHappy...';
                btn1.style.backgroundColor = '#261e1c';
                break;
            }
      });
    }
    
  }, false
);
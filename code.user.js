// ==UserScript==
// @name        Sicko Search (Metal-Archives)
// @namespace   https://github.com/Slashbunny
// @match       https://www.metal-archives.com/albums/*
// @grant       none
// @version     1.0
// @author      Slashbunny
// @license     GPLv3
// @description 2/22/2026, 10:28:17 PM
// @updateURL   https://raw.githubusercontent.com/Slashbunny/userscript-sicko-search/refs/heads/main/code.user.js
// @downloadURL https://raw.githubusercontent.com/Slashbunny/userscript-sicko-search/refs/heads/main/code.user.js
// ==/UserScript==
(function() {
  const artist_name = document.querySelector('#album_info .band_name a').textContent;
  const album_title = document.querySelector('#album_info .album_name a').textContent;
  const left_info_element = document.querySelector('#album_info .float_left');
  const encoded_quoted_search_string = encodeURIComponent('"' + artist_name + '" "' + album_title + '"')

  left_info_element.insertAdjacentHTML('beforeend', `
      <dt>Sicko Search</dt>
      <dd>
        <a href="https://bandcamp.com/search?q=${encoded_quoted_search_string}&item_type=a" target="_blank" rel="noopener noreferrer"><img src="https://sickos.slashbunny.com/img/bc.png"></a>
        <a href="https://www.google.com/search?q=${encoded_quoted_search_string}" target="_blank" rel="noopener noreferrer"><img src="https://sickos.slashbunny.com/img/google.png"></a>
        <a href="https://www.youtube.com/results?search_query=${encoded_quoted_search_string}" target="_blank" rel="noopener noreferrer"><img src="https://sickos.slashbunny.com/img/yt.png"></a>
      </dd>
  `);
})();

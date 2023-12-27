const topMenu = document.getElementById('top-menu');
const togtopmenuIcon = document.getElementById('top-menu-toggle');

document.addEventListener('click', (e) => {
  if (togtopmenuIcon.contains(e.target)) {
    //click the menu toggle
    topMenu.classList.toggle('top-menu-expanded');
    topMenu.classList.toggle('hidden');
  } else {
    //Click outside the menu toggle
    if (topMenu.classList.contains('top-menu-expanded')) {
      topMenu.classList.remove('top-menu-expanded');
      topMenu.classList.add('hidden');
    }
  }
});

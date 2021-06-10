const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkBox = document.querySelector('#theme-switch-toggle')
  checkBox.addEventListener('change', onChangeInput)
  const body = document.querySelector('body')
  function onChangeInput (){
      body.classList.toggle(Theme.DARK)
      

  }
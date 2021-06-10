const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkBox = document.querySelector('#theme-switch-toggle')
  checkBox.addEventListener('change', onChangeInput)

  function onChangeInput (){
      body.classList.add('${Theme.DARK}')
  }
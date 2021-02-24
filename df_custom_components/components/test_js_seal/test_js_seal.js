(() => {
  const sealWrapper = document.getElementById('seal_wrapper');

  const toggleClass = (element, className) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  };

  sealWrapper.onclick = () => {
    toggleClass(sealWrapper, '--mode_question');
    toggleClass(sealWrapper, '--mode_seals');
  };
})();

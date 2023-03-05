const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        changeScr(id);
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  function changeScr(id) {
    const gif = document.getElementById(id);
    gif.src = "";
    gif.src = `img/home/${id}.gif`;
  }
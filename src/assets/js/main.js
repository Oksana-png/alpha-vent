// menu burger

const btnBurger = document.querySelector('.burger-menu__btn ');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
  const menu = document.querySelector(".header-nav");
  const overlay = document.querySelector('.overlay');
  console.log(overlay);

  if (btnBurger.classList.contains('active')) {
    menu.classList.add('header-nav-active');
    overlay.classList.add('active');
  } else {
    menu.classList.remove('header-nav-active');
    overlay.classList.remove('active');
  }

  overlay.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
    overlay.classList.remove('active');
    btnBurger.classList.remove('active');
  });
});

// плавный скролл
const btnUp = document.querySelector('.btn-up');

btnUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
});
window.addEventListener('scroll', () => {
  if (window.innerHeight < window.scrollY) {
    btnUp.style.display = 'flex';
  } else {
    btnUp.style.display = 'none';
  }
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.addEventListener('click', (event) => {
  const target = event.target.closest('.open-mobile__menu');

  if (target) {
    const subMenu = event.target.closest('.has-submenu').querySelector('.submenu');
    subMenu.classList.toggle('show');
    event.target.closest('.has-submenu').classList.toggle('active');
  }
});

// tabs
const openTab = (index, buttons) => {
  const contentTabs = document.querySelectorAll('.tabs__content');

  contentTabs.forEach((item, i) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    if (i == index) {
      item.classList.add('active');
    }
  });

  buttons.forEach((item, i) => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    if (i == index) {
      item.classList.add('active');
    }
  });
}

const tabs = () => {
  if (document.querySelector('.tabs')) {
    const buttonTabs = document.querySelectorAll('.tabs__btn');

    buttonTabs.forEach((item, i) => {
      if (item.classList.contains('active')) {
        openTab(i, buttonTabs);
      }
    });

    buttonTabs.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        openTab(i, buttonTabs);
      });
    });
  }
}

const modalClose = (selector) => {
  const modal = document.querySelector(selector);
  const modalBody = modal.querySelector('.modal__body');
  const inputs = document.querySelectorAll(".modal.active input");

  modal.classList.remove('active');
  modalBody.classList.remove('active');
  document.querySelector('html').style.overflowY = 'scroll';

  if (modal.querySelector('.default-checkbox')) {
    modal.querySelector('.default-checkbox').checked = false;
  }
  if (modal.querySelector("textarea")) {
    modal.querySelector("textarea").value = "";
  }

  inputs.forEach(input => {
    input.value = "";
  });
}

const modalOpen = (selector) => {
  const elem = selector;

  const modal = document.querySelector(elem);
  const modalBody = modal.querySelector('.modal__body');

  modal.classList.add('active');
  modalBody.classList.add('active');
  document.querySelector('html').style.overflowY = 'hidden';

  modal.addEventListener('click', (e) => {
    if (e.target.closest(".modal-close")) {
      modalClose(elem);
    }
    if (e.target.closest(".modal__body")) {
      return;
    }
    modalClose(elem);
  });
}

const modal = () => {
  const buttonOpenForm = document.querySelectorAll('.btn-open-form');

  buttonOpenForm.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalOpen('.modal__form');
    });
  });

  const buttonOpenFormBell = document.querySelectorAll('.btn-open-form-bell');
  buttonOpenFormBell.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOpen('.modal__bell');
    });
  })

  const buttonOpenQuiz = document.querySelectorAll('.btn-open-form-quiz');
  buttonOpenQuiz.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOpen('.quiz');
    });
  });

}

const breadCrumbs = () => {
  if (!document.querySelector('.breadcrumbs')) {
    return;
  }
  const bread = document.querySelector('.breadcrumbs');

  if (document.querySelector('.hero')) {
    bread.classList.add('bread-hero');
  } else if (document.querySelector('.new-item-page')) {
    bread.querySelector('ol').classList.add('pad');
  }
}



tabs();
modal();
breadCrumbs();
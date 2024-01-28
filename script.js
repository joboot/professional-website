window.onload=function(){
  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');
  // const openModalButtons = document.querySelectorAll('data-modal-target')
  // const closeModalButtons = document.querySelectorAll('data-close-button')
  // const overlay = document.getElementById('overlay')

  // openModalButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const modal = document.querySelector(button.dataset.modalTarget)
  //     openModal(modal)
  //   })
  // })

  // overlay.addEventListener('click', () => {
  //   const modals = document.querySelectorAll('.modal.active')
  //   modals.forEach(modal => {
  //     closeModal(modal)
  //   })
  // })

  // closeModalButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const modal = button.closest('.modal')
  //     closeModal(modal)
  //   })
  // })

  // function openModal(modal) {
  //   if (modal == null) return
  //   modal.classList.add('active')
  //   overlay.classList.add('active')
  // }

  // function closeModal(modal) {
  //   if (modal == null) return
  //   modal.classList.remove('active')
  //   overlay.classList.remove('active')
  // }


  menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });

  document.onscroll = () => {
    navbar.classList.remove('show');

    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  const btn = document.getElementById('form-btn');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_v0wtheb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

}

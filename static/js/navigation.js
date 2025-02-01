// navigation.js
barba.init({
    transitions: [
      {
        name: 'fade-transition',
        leave(data) {
          return gsap.to(data.current.container, { opacity: 0 });
        },
        enter(data) {
          return gsap.from(data.next.container, { opacity: 0 });
        }
      }
    ],
    views: [
      {
        namespace: 'home',
        beforeEnter() {
          console.log('Entrando a la página principal');
        }
      },
      {
        namespace: 'docs',
        beforeEnter() {
          console.log('Entrando a la página de documentación');
        }
      },
      {
        namespace: 'blogs',
        beforeEnter() {
          console.log('Entrando a la página de blogs');
        }
      }
    ]
  });
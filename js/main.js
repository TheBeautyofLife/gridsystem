new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      message: 'Hello Vue!',
      iconSize: '60px',
      users: [
        {
            img:'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            name: 'John Doe',
            job: ' UI/UX designer'
        },
        {
            img:'https://images.unsplash.com/photo-1455503521443-c39d5b861bc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            name: 'Jane Franklyn',
            job:'Lawyer'
         },
         {
            img: 'https://images.unsplash.com/photo-1512887681622-82fb5e682af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            name: 'Larry loud',
            job:'Geng Rapper'
         }
      ],
      products: [
        {
            img:'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            name: 'John Doe',
            info: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.',
            price: '0.00'
        },
      ]
    }
  })
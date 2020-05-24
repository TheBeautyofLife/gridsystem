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
      features: [
        {
            icon:'mdi-home',
            name: 'Stay Home',
        },
        {
          icon:'mdi-dog',
          name: 'Play with animals',
      }
      ],
      products: [
        {
            img:'https://i.etsystatic.com/21006302/r/il/698154/2126848936/il_1588xN.2126848936_edth.jpg',
            name: 'Natural Kyanite Bracelet , Gemstone Bracelet ',
            info: 'Kyanite aligns all chakras and subtle bodies instantly. It provides balance of yin-yang energy and dispels blockages, moving energy gently through the physical body. Kyanite has a calming effect on the whole being, bringing tranquility. It encourages psychic abilities and communication on all levels.',
            price: 'USD 49.99+',
            shop: 'Esty'
        },
        {
          img:'https://i.etsystatic.com/5448912/r/il/124102/2269559082/il_1588xN.2269559082_fv5g.jpg',
          name: 'Face Mask.. Fast shipping...Washable.. Reusable',
          info: `Etsy has asked us to help meet the demand of personal face mask. We have been making these for local neighbor service providers, Cancer treatment centers, assisted living , etc...And we are now trying to meet the public's demand`,
          price: 'USD 9.99',
          shop: 'Esty'
      },
      {
        img:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/175151/1.jpg?5785',
        name: 'Kabras Premium White Sugar - 2kg',
        info: `Kabras Premium White Sugar - 2kg white sugar is produced in the heart of kenya's western sugar belt on the same day as the harvest, preserving the original flavour of sun-sweetened sugar cane.`,
        price: 'KSh 198',
        shop: 'Jumia Kenya'
    },
    {
      img:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/412282/1.jpg?9005',
      name: 'Ajab All-Purpose Fortified Wheat Flour - 2Kg',
      info: `Perfect Texture: Our Wheat Flour Bakes A Soft, Flavorful Crust For An Authentic Chapati With A Soft, Tender BottomDiverse Ingredient: Great For High Temperature Firewood Or Deck Ovens! Our Product Is Milled Slowly And Finely For Optimal Water AbsorptionProfessional Flour.`,
      price: 'KSh 113',
      shop: 'Jumia Kenya'
  },  
  {
    img:'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/310721/1.jpg?8266',
    name: 'Soko Maize Meal Fortified With Vitamins And Minerals - 2kg',
    info: `The staple of ugali and other maize flour recipes will always come out right with Soko Maize Meal Fortified with VItamins and Minerals 2Kg.`,
    price: 'KSh 116',
    shop: 'Jumia Kenya',
}
      ]
    }
  })
var tableau = [
    {
      id: 0,
      product: 'shoes',
      price: 70
    },
    {
      id: 1,
      product: 'screen',
      price: 90
    },
    {
      id: 2,
      product: 'playstation V',
      price: 499
    },
    {
      id: 3,
      product: 'jean',
      price: 50
    }
  ]
  
  // Créer un code, qui va calculer le prix total de ces objets

 
//   function shopping(){
//   var total = 0
//   for (var b = 0; b < tableau.length; b++)
//   total += tableau [b].price
//   console.log(total)}

// shopping()


   // Exercice II
 // Créer une fonction, qui va nous afficher l'objet le moins cher
// function inferieur () { 
// var objet=tableau[0]
// for (var i=0; i<tableau.length;i++){
//   if(tableau[i].price <objet.price)
//   {objet=tableau[i]
// }}
// console.log(objet);

//  }
//  inferieur ()
  
  // Exercice III
  // Créer une fonction qui va ajouter la clé 'stock' a tous les objets
  // Et ajoutera comme valeur, de façon aléatoire: true or false

//   function newKey (){var tableau = [
//     {
//       id: 0,
//       product: 'shoes',
//       price: 70
//     },
//     {
//       id: 1,
//       product: 'screen',
//       price: 90
//     },
//     {
//       id: 2,
//       product: 'playstation V',
//       price: 499
//     },
//     {
//       id: 3,
//       product: 'jean',
//       price: 50
//     }
//   ]
// for (var i=0; i<tableau.length;i++){
//   var alea = Math.round(Math.random()*1)
//   if(alea===1){tableau[i].stock=true}else{tableau[i].stock=false}

// }console.log(tableau);}

//   newKey()

  
  // Exercice IV
  // A l'aide de l'exercice précédent
  // Afficher dans le terminal les objets seulement en stock

  function newKey (){var tableau = [
    {
      id: 0,
      product: 'shoes',
      price: 70
    },
    {
      id: 1,
      product: 'screen',
      price: 90
    },
    {
      id: 2,
      product: 'playstation V',
      price: 499
    },
    {
      id: 3,
      product: 'jean',
      price: 50
    }
  ]
for (var i=0; i<tableau.length;i++){
  var alea = Math.round(Math.random()*1)
  if(alea===1){tableau[i].stock=true}else{tableau[i].stock=false}

}console.log(tableau);}

  newKey()
  


   



  // ---------------------------------------------------------------------
  
  // var musics = [
  //   {
  //     id: 0,
  //     group: 'Muse',
  //     song: 'Starlight',
  //     rate: '5 / 10'
  //   },
  //   {
  //     id: 1,
  //     group: 'Spiderbait',
  //     song: 'Black Betty',
  //     rate: '9 / 10'
  //   },
  //   {
  //     id: 2,
  //     group: 'Franz Ferdinand',
  //     song: 'Take me out',
  //     rate: '7.5 / 10'
  //   }
  // ]
  
  
  // Exercice V
  // A l'aide du tableau musics
  // Créer une fonction qui va choisir un objet de façon aléatoire
  // Puis lui ajouter la clé "award: true"
  
  // Exercice VI
  // A l'aide du tableau musics
  // Afficher dans le terminal la musique la mieux notée
  // Indices : ".split()" et "parseInt()"
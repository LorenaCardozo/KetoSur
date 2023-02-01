const productos =[
{id:1,nombre:'Budín marmolado', categoria: 'panaderia', img: '/img/budin.png' , imgDetails: '/img/budin_details.png', stock:5, precio:1500},
{id:2,nombre:'Pan Burger Keto', categoria: 'panaderia', img: '/img/pan.png', imgDetails: '/img/pan_details.png',stock:10, precio:1300}, 
{id:3,nombre:'Box de galletitas', categoria: 'panaderia', img: '/img/galletitas.png' , imgDetails: '/img/galletitas_details.png',stock:10, precio:900},
{id:4,nombre:'Conitos Keto', categoria: 'panaderia', img: '/img/conitos.png' , imgDetails: '/img/conitos_details.png',stock:10, precio:1100},
{id:5,nombre:'Tarta de Ricota', categoria: 'panaderia', img: '/img/tarta.png' , imgDetails: '/img/tarta_details.png',stock:10, precio:2500},
{id:6,nombre:'Helado Keto', categoria: 'postres', img: '/img/helado.png' , imgDetails: '/img/helado_details.png',stock:10, precio:2500},
{id:7,nombre:'Mousse', categoria: 'postres', img: '/img/mousse.png' , imgDetails: '/img/mousse_details.png',stock:10, precio:2500},
{id:8,nombre:'Tiramisu', categoria: 'postres', img: '/img/tiramisu.png' , imgDetails: '/img/tiramisu_details.png',stock:10, precio:2500},
{id:9,nombre:'Arrollado de pollo', categoria: 'viandas', img: '/img/arrollado.png' , imgDetails: '/img/arrollado_details.png',stock:10, precio:2500},
{id:10,nombre:'Canelones', categoria: 'viandas', img: '/img/canelones.png' , imgDetails: '/img/canelones_details.png',stock:10, precio:2500},
{id:11,nombre:'Omelette', categoria: 'viandas', img: '/img/omelette.png' , imgDetails: '/img/omelette_details.png',stock:10, precio:2500},
]

const getProductList = (categoriaId) => {
    return new Promise((resolve, reject) => {

    let products = productos;

    if(categoriaId)
    {
     products = productos.filter((p)=> p.categoria === categoriaId );
    }

      setTimeout(() => {
        if (products){
            resolve(products);
        }else{
            reject("No se encontraron productos.")
        }
            

      }, 5000);
    });
  };


  const getProduct = (idProduct) => {
    return new Promise((resolve, reject) => {
       const product = productos.find((p)=> p.id === parseInt(idProduct) );
      setTimeout(() => {
        if(product){
            resolve(product);
        }
        else{reject("No se encontró el producto.")}
        
      }, 1000);
    });
  };  

export default getProductList;

export { getProduct }
const {Product , Brand , Color , Size , Category  } = require('../database/models');

const controller = {

    //vista de creacion
    createProduct: async (req,res) => {
        let colors = await Color.findAll();
        let brands = await Brand.findAll();
        let sizes = await Size.findAll();
        let categories = await Category.findAll();
        res.render('../src/views/products/crear' , {brands : brands , colors:colors , 'rodados' : sizes , 'categorias' : categories})
    },
    //funcion de creacion
    uploadProtuct: (req,res) => {
        console.log("guardando un producto");
        console.log(req.body)
        const _body = req.body;
        _body.image1 = req.file ? req.file.filename : '';
        Product.create(_body)
        .then(ProductStored => {
            ProductStored.addColors(req.body.colors)
            ProductStored.addCategories(req.body.categorias)
            ProductStored.addSizes(req.body.rodados)

            return res.redirect('/')
        })
        .catch(error => res.send(error))
        
    },
    //viste de producto
    show : (req,res) => {
        Product.findByPk(req.params.id, {
            include: ['brand' , 'colors']
        })
        .then(product => {
            res.render('../src/views/products/product' , {product : product})
        })
    },


    destroy: async (req,res) => {
        let productId = req.params.id;
        console.log("quiereo borrar al producto  " + productId);
        await Product.findByPk(productId , {include: ['colors', 'sizes' , 'categories']})
        await Product.destroy({ where: { id: productId } });
        return res.redirect("/")
        .catch(error => res.send(error))
        /*

        await Color.destroy({where: {productId : productId},force : true })
        console.log("Borre al producto" + req.params.id);
        return res.send("dale che")
        .catch(error => res.send(error));
        */

    } 
}




module.exports = controller;
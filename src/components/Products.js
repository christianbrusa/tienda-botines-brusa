const Products = [
    {
        id: 1111,
        title: "Nike Magista Obra II",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 25000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png",
        category: "nike"
    },
    {
        id: 1112,
        title: "Puma Future Z 1.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 24000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167663/bota-puma-future-bluejpg-removebg-preview_ifnybh.png",
        category: "puma"
    },
    {
        id: 1113,
        title: "Puma King Platinum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 23000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650086394/bota-puma-king-platinum-21-fgag-negro-0-removebg-preview_al8c99.png",
        category: "puma"
    },
    {
        id: 1114,
        title: "Adidas X 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 22000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650168195/Adidas-X-red-removebg-preview_qgrfs6.png",
        category: "adidas"
    },
    {
        id: 1115,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 21000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650086388/adidas_copa_orange-removebg-preview_x2opbz.png",
        category: "adidas"
    },
    {
        id: 1116,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 20000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084711/adidas-copa-19.1_black-removebg-preview_hyzltp.png",
        category: "adidas"
    },
    {
        id: 1117,
        title: "Puma Future Z 1.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 20000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167662/bota-puma-future-yellow-removebg-preview_bcu2of.png",
        category: "puma"
    },
    {
        id: 1118,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 19000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084702/adidas-copa-19.1-removebg-preview_albyjj.png",
        category: "adidas"
    },
    {
        id: 1119,
        title: "Nike Magista Obra II",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 19000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/orangeobra-removebg-preview_xxwpef.png",
        category: "nike"
    },
    {
        id: 1120,
        title: "Adidas Predator 18.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 18000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650168201/botines-adidas-predator-181-removebg-preview_mokrsa.png",
        category: "adidas"
    },
    {
        id: 1121,
        title: "Nike Superfly 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 29000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-mercurial-superfly-removebg-preview_nfospo.png",
        category: "nike"
    },
    {
        id: 1122,
        title: "Nike Superfly 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: '$' + 26000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-superfly-6-removebg-preview_u7losl.png",
        category: "nike"
    }
]

export default Products;
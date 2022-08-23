const Products = [
    {
        id: 1111,
        title: "Nike Magista Obra II",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 25000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1652230183/redobra2-removebg-preview_nf4mdt.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1652230183/redobra3-removebg-preview_cofiyz.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1652239400/obrared4-removebg-preview_xe02oe.png"
        ],
        category: "nike"
    },
    {
        id: 1112,
        title: "Puma Future Z 1.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 24000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167663/bota-puma-future-bluejpg-removebg-preview_ifnybh.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167663/bota-puma-future-bluejpg-removebg-preview_ifnybh.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1652480476/futurezblue_2-removebg-preview_k6xfjn.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1652480477/futurezblue_3-removebg-preview_kjd0fc.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653340906/futureblue_4-removebg-preview_3_ro0apw.png"
        ],
        category: "puma"
    },
    {
        id: 1113,
        title: "Puma King Platinum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 23000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1653190928/kingblack_1-removebg-preview_ckx4an.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653190928/kingblack_1-removebg-preview_ckx4an.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653190930/kingblack_2-removebg-preview_csvdnb.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653191916/kingblack_3-removebg-preview_2_h0felt.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653190932/kingblack_4-removebg-preview_gtekky.png"
        ],
        category: "puma"
    },
    {
        id: 1114,
        title: "Adidas X 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 22000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650168195/Adidas-X-red-removebg-preview_qgrfs6.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650168195/Adidas-X-red-removebg-preview_qgrfs6.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653090421/adidasx19.1_2-removebg-preview_vopbov.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653090166/adidasx19.1_3-removebg-preview_uendp3.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653090819/adidasx19.1_4-removebg-preview_hthj3q.png"
        ],
        category: "adidas"
    },
    {
        id: 1115,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 21000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650086388/adidas_copa_orange-removebg-preview_x2opbz.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650086388/adidas_copa_orange-removebg-preview_x2opbz.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653172272/copaorange2-removebg-preview_psgnse.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653172272/copaorange3-removebg-preview_xcu9ln.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653177300/copaorange4-removebg-preview_4_pjpiem.png"
        ],
        category: "adidas"
    },
    {
        id: 1116,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 20000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084711/adidas-copa-19.1_black-removebg-preview_hyzltp.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084711/adidas-copa-19.1_black-removebg-preview_hyzltp.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653325234/copablack_2-removebg-preview_hbjvy5.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653325235/copablack_3-removebg-preview_jh5tvc.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653352110/copablack_4-removebg-preview_zc8ewt.png"
        ],
        category: "adidas"
    },
    {
        id: 1117,
        title: "Puma Future Z 1.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 20000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167662/bota-puma-future-yellow-removebg-preview_bcu2of.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650167662/bota-puma-future-yellow-removebg-preview_bcu2of.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653325740/futurewhite_2-removebg-preview_waszaw.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653325741/futurewhite_3-removebg-preview_fcf9k8.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653325741/futurewhite_4-removebg-preview_rppwsb.png"
        ],
        category: "puma"
    },
    {
        id: 1118,
        title: "Adidas Copa 19.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 19000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084702/adidas-copa-19.1-removebg-preview_albyjj.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650084702/adidas-copa-19.1-removebg-preview_albyjj.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653338367/copawhite_2-removebg-preview_n2zdsl.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653338892/copawhite_3-removebg-preview_1_sfbz5o.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653338735/copawhite_4-removebg-preview_tv5ewm.png"
        ],
        category: "adidas"
    },
    {
        id: 1119,
        title: "Nike Magista Obra II",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 19000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705321/lightobra-removebg-preview_gxszcs.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1648705321/lightobra-removebg-preview_gxszcs.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653352411/obra2blue_2-removebg-preview_jxbpxz.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653352409/obrablue_3-removebg-preview_turz1a.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653352408/obrablue_41-removebg-preview_zechpl.png"
        ],
        category: "nike"
    },
    {
        id: 1120,
        title: "Adidas Predator 18+",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 18000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1653347506/predator__1-removebg-preview_ktsdmf.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653347506/predator__1-removebg-preview_ktsdmf.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653347508/predator__2-removebg-preview_u9xplf.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653347508/predator__3-removebg-preview_exndjc.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653347506/predator__4-removebg-preview_jm5fyt.png"
        ],
        category: "adidas"
    },
    {
        id: 1121,
        title: "Nike Superfly 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 29000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-mercurial-superfly-removebg-preview_nfospo.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-mercurial-superfly-removebg-preview_nfospo.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653348562/superfly5_2-removebg-preview_fzvcao.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653348563/superfly5_33-removebg-preview_yl5r33.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653350021/superfly5_5-removebg-preview_1_yyebnt.png"
        ],
        category: "nike"
    },
    {
        id: 1122,
        title: "Nike Superfly 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        price: 26000,
        pictureUrl: "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-superfly-6-removebg-preview_u7losl.png",
        gallery: [
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1650255004/nike-superfly-6-removebg-preview_u7losl.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653351658/superfly6_2-removebg-preview_hv98hj.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653351658/superfly6_3-removebg-preview_ezyjuw.png",
            "https://res.cloudinary.com/dycoseuyv/image/upload/v1653351658/superfly6_4-removebg-preview_t93vzy.png"
        ],
        category: "nike"
    }
]

export default Products;
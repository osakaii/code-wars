
export let USERS_DATA = [
    {
        name: 'Muhammad',
        userName: 'ciking'
    },
    // {
    //     name: 'Polina',
    //     userName: 'an4morph'
    // },
    // {
    //     name: "Арген",
    //     userName: "sairbekow"
    // },
    // {
    //     name: "Талгат",
    //     userName: "slice312"
    // },
    // {
    //     name: "Байэл",
    //     userName: "bael2018"
    // },
    // {
    //     name: "Эржан",
    //     userName: "Kallnur"
    // },
    // {
    //     name: "Алтынбек",
    //     userName: "AltynKasym"
    // },
    // {
    //     name: "Нурсултан",
    //     userName: "bakytov_oo"
    // },
    // {
    //     name: "Нуралим",
    //     userName: "Nuralim"
    // },
    // {
    //     name: "Бахтияр",
    //     userName: "b.ilyazov"
    // },
    // {
    //     name: "Болобек",
    //     userName: "bolotbekMM"
    // },
    // {
    //     name: "Жолдошов Бакай",
    //     userName: "bakai04"
    // },
    // {
    //     name: "Динара",
    //     userName: "stamkulova-dinara"
    // },
    // {
    //     name: "Atay ",
    //     userName: "EA7"
    // },
    // {
    //     name: "Aman",
    //     userName: "aman006009"
    // },
    // {
    //     name: "Israilov",
    //     userName: "IsrailovSardor"
    // },
    // {
    //     name: "Эстебес",
    //     userName: "estebes"
    // },
    // {
    //     name: "Асель",
    //     userName: "aselkk"
    // },
    // {
    //     name: 'Темирлан Шарапидинов',
    //     userName: 'Sharapidinov'
    // },
    // {
    //     name: 'Makhabat Abdisattarova',
    //     userName: 'Makhabat Abdisattarova'
    // },
    // {
    //     name: 'Айдар Джумабеков',
    //     userName: 'theoddorrrr'
    // },
    // {
    //     name: 'Фирдавс Нурпаизов',
    //     userName: 'firdavsnurpaizov'
    // },
    // {
    //     name: 'Каримов Майсалбек',
    //     userName: 'Maisalbek'
    // },
    // {
    //     name: 'Almazbekova Zhaina',
    //     userName: 'zhainaalmaz'
    // },
    // {
    //     name: 'Almaz Žaparov',
    //     userName: 'yaeval'
    // },
    // {
    //     name: 'Aidar Bakytbekov',
    //     userName: 'ayydar'
    // },
    // {
    //     name: 'Begaiym Akylova',
    //     userName: 'TerraCotta777'
    // },
    // {
    //     name: 'Kadyrov Temirlan',
    //     userName: 'Tima1212'
    // },	
    // {
    //     name: 'Bektursun Baimamatov',
    //     userName: 'bekturb'
    // },	
    // {
    //     name: 'Kamilya Mukhammedova',
    //     userName: 'KamilyaMukhammedova'
    // },	
]

USERS_DATA = USERS_DATA.map((el,index)=>{
    return {
        ...el,
        id: index + 1
    }
})
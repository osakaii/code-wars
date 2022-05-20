
export let USERS_DATA = [
    {
        name: 'Muhammad',
        userName: 'ciking'
    },
    {
        name: 'Polina',
        userName: 'an4morph'
    },
    {
        name: "Арген",
        userName: "sairbekow"
    },
    {
        name: "Талгат",
        userName: "slice312"
    },
    {
        name: "Байэл",
        userName: "bael2018"
    },
    {
        name: "Эржан",
        userName: "Kallnur"
    },
    {
        name: "Алтынбек",
        userName: "AltynKasym"
    },
    {
        name: "Нурсултан",
        userName: "bakytov_oo"
    },
    {
        name: "Нуралим",
        userName: "Nuralim"
    },
    {
        name: "Бахтияр",
        userName: "b.ilyazov"
    },
    {
        name: "Болобек",
        userName: "bolotbekMM"
    },
    {
        name: "Жолдошов Бакай",
        userName: "bakai04"
    },
    {
        name: "Динара",
        userName: "stamkulova-dinara"
    },
    {
        name: "Atay ",
        userName: "Atay :)"
    },
    {
        name: "Aman Mamashov",
        userName: "aman009006"
    },
    {
        name: "Israilov Sardor",
        userName: "IsrailovSardor"
    },
    {
        name: "Эстебес Мукамбетов",
        userName: "estebes"
    },
]

USERS_DATA = USERS_DATA.map((el,index)=>{
    return {
        ...el,
        id: index + 1
    }
})

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
]

USERS_DATA = USERS_DATA.map((el,index)=>{
    return {
        ...el,
        id: index + 1
    }
})
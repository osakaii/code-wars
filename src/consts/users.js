
export let USERS_DATA = [
    {
        name: 'Muhammad',
        userName: 'ciking'
    },
    {
        name: 'Polina',
        userName: 'an4morph'
    }
]

USERS_DATA = USERS_DATA.map((el,index)=>{
    return {
        ...el,
        id: index + 1
    }
})
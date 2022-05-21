export const userSchema = {
    name:'users',
    type:'document',
    title:'Users',
    // actually props and fields of user which we want to store ->
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name',
        },
        {
            name:'walletAddress',
            type:'string',
            title:'Wallet Address',
        },
        {
            name:'profileImage',
            type:'image',
            title:'Profile Image',
        },
        {
            name:'likes',
            type:'array',
            title:'Likes',
            of: [{type:'reference',to:{type:'users'}}], 
        },
    ],
}
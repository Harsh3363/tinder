// here we are going top make api routes
// api route will help us to communicate with sanity and pull information from it

// every time we make a function we need to import this->
import { client } from "../../lib/sanity";

const createUserOnSanity = async (req,res) => {
// in this try we are trying to make a userDoc and trying to send it to sanity
    try {
        const userDoc = {
          _type: 'users',
          _id: req.body.userWalletAddress,
          name: req.body.name,
          walletAddress: req.body.userWalletAddress,
        }

        // if user doesn't exists then we will try to make
        await client.createIfNotExists(userDoc)
    
        res.status(200).send({message:'success'})
    }catch(error){
        res.status(500).send({message:'error',data:error.message})
    }

}

export default createUserOnSanity
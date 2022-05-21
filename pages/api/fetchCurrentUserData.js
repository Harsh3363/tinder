// as name suggest will fetch the info about the current User Data

import { client } from "../../lib/sanity"

const getUserInfo = async(req,res) => {
    // it will query for the info of the current user which is loggedIn ->-
    try {
        const query = `
          *[_type == "users" && _id == "${req.query.activeAccount}"]{
              name,
              walletAddress,
              "imageUrl": profileImage.asset->url
            }
        `
        const sanityResponse = await client.fetch(query)
        res.status(200).send({message:'success',data: sanityResponse[0]})
    }catch(error){
        res.status(500).send({message:'error',data: error.message})
    }
}

export default getUserInfo
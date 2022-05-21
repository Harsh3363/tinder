import { client } from "../../lib/sanity";

const getUserInfo = async(req,res) => {
    try {
        // using below line of code will be querying the liked user and saving it inside const sanityResponse
        const query = `
        *[_type == "users" && _id == "${req.body.likedUser}"]{
           likes
          }
      `
      const sanityResponse = await client.fetch(query)

      let isMatch = false

    //   checking if the user the currentUser like back again or not and setting isMatch accordingly 
      sanityResponse[0].likes.forEach(likedUser => {
          if (likeduser._ref===req.body.currentUser) {
              isMatch =true
          }
      });

      res.status(200).send({ message: 'success', data: { isMatch: isMatch } })


    } catch (error) {
        res.status(500).send({ message: 'error', data: error.message })
    }
}

export default getUserInfo
import { validateRoute } from "../../lib/auth";
import prisma from '../../lib/prisma'

export default validateRoute(async(req,res,user) => {
    const postCount = await prisma.post.count({
        where :{
            userId : user.id
        }
    })
    res.json({...user, postCount})
})
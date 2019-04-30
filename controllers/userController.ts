import { Request, Response  } from 'express'
import db from '../db/database'

class usersCtrl {

    public async getUsers(req: Request, res : Response ) : Promise<any> {
        
        let sql = `SELECT * FROM users`

        let data = await db.query(sql)
        res.json(data)
    }

   

}

const user = new usersCtrl;
export default user;
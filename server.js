const express = require('express') //import dari library Express
const app = express() //inisiasi framework
const port = ... //port dimana server berjalan

//memerintahkan server untuk menerima request hanya dari front-end Pukul Enam Talents
app.use(cors())
//memberitahu express untuk menggunakan middleware JSON
app.use(express.json());

//inisiasi instance module knex
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '...', //API database
      user : 'root',
      password : '...', //PW database
      database : '...' //nama database
    }
  });

//nanti atur corsOptionnya
// const corsOption = {
//     origin: ,
// }

//endpoint untuk submit input dari user
app.post('...', async (req, res) => {
    try {
        let copywriting = req.body.copywriting;
        let design = req.body.design;
        let internasional = req.body.internasional;
        let nasional = req.body.nasional;
        let entertainment = req.body.entertainment;
        let gaming = req.body.gaming;
        let tech = req.body.tech;
        let finance = req.body.finance;
        let health = req.body.health;
        let sport = req.body.sport;
        
        let id = await knex('...').insert({
            "copywriting": copywriting,
            "design": design,
            "internasional": internasional,
            "nasional": nasional,
            "entertainment": entertainment,
            "gaming": gaming,
            "tech": tech,
            "finance": finance,
            "health": health,
            "sport": sport
        })

        res.json({
            id: id[0],
            copywriting,
            design,
            internasional,
            nasional,
            entertainment,
            gaming,
            tech,
            finance,
            health,
            sport
        })
    } catch (e) {
        console.log(e);
        next(e)
    }
})

//endpoint sementara untuk cek input data masuk di postman
app.get('/...', async (req, res ) => {
    try {
        let <nama pathnya> = await knex('<nama pathnya>');
        res.json(<nama pathnya>)
    } catch (e) {
        console.log(e);
        next(e)
    }
})

//memberitahu nomor port yang akan ditanggapi
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
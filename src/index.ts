import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"

function handleError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message);
}

AppDataSource.initialize().then(async () => {

    const PORT = process.env.PORT || 3001;
    const app = express();
    app.use(bodyParser.json())

    app.use(handleError);
    const path = require('path');
    // Fazer com que o Node sirva os arquivos do app em React criado
    app.use(express.static(path.resolve(__dirname, '../client/build')));
    
    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, async (req: Request, res: Response, next: Function) => {
            try {
                const result = await (new (route.controller as any))[route.action](req, res, next)
                res.set('Access-Control-Allow-Origin', '*');
                res.json(result)
            } catch(error) {
                next(error);
            } 
        });
    })

    const cors = require('cors');
    app.use(cors);
    
    // Todas as outras solicitações GET não tratadas retornarão nosso app em React
    //app.get('*', (req, res) => {
      //  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    //});

    app.listen(PORT)

    // insert new users for test
    /*
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Gustavo",
            lastName: "Developer",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Tony",
            lastName: "Fullstack",
            age: 24
        })
    )
    */
    console.log(`Server listening on ${PORT}`);

}).catch(error => console.log(error))

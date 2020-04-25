import {getSkill} from './controllers/skill';


export const routesConfig = (app) => {
  app.get('/skill/:email',function (req,res){
    const result =  getSkill(req.params.email);
    {
      console.log(result);
      return res.status(200).send(result);
    }
  ;

})}; 
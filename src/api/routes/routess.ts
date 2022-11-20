import { Router } from 'express';
import middlewares from '../middlewares';
// import Validation from '../validations';
import Controller from '../controllers';
const route = Router();
export default (app: Router) => {
  app.use('/Auto', route);

  route.post('/Add_customers', Controller.customers.Add_customers);
  route.get('/Get_All_customers', Controller.customers.getcustomers);
  route.get('/Get_All_records', Controller.customers.getRecords);
  route.post('/Update_customers', Controller.customers.Update_customers);
  route.post('/Delete_customers', Controller.customers.Delete_customers);
  route.get('/Get_By_Id_customers/:id', Controller.customers.getcustomersByID);

  //addHere
};

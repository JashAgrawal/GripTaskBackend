import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import customers from '../../../services/customers/customers';
import responseHandler from 'express-response-handler';
class customers_Class {
  Add_customers = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.Addcustomers(req);
      return res.status(200).json({ message: 'Details Added Successfully', Data: resp.Data });
    } catch (e) {
      return next(e);
    }
  };
  getcustomers = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.getcustomers(req);
      return res.status(200).json({ message: 'Details Fetched Successfully', Data: resp.Data });
    } catch (e) {
      return next(e);
    }
  };
  getRecords = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.getRecords(req);
      return res.status(200).json({ message: 'Details Fetched Successfully', Data: resp.Data });
    } catch (e) {
      return next(e);
    }
  };
  Update_customers = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.Updatecustomers(req);
      return res.status(200).json({ message: 'Success', Data: resp.Data });
    } catch (e) {
      return next(e);
    }
  };
  Delete_customers = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.Deletecustomers(req);
      return res.success.success('Details Deleted Successfully', resp.Data);
    } catch (e) {
      return next(e);
    }
  };
  getcustomersByID = async (req: Request, res: Response | responseHandler, next: NextFunction) => {
    try {
      const customersInstance = Container.get(customers);
      let resp = await customersInstance.getcustomersById(req);
      return res.status(200).json({ message: 'Success', Data: resp.Data });
    } catch (e) {
      return next(e);
    }
  };
}

export default new customers_Class();

import { Service, Inject } from 'typedi';
@Service()
export default class customersService {
  constructor(
    @Inject('customersModel') private customersModel,
    @Inject('transfersModel') private transfersModel,
    // private mailer: MailerService,
    @Inject('logger') private logger, // @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async Addcustomers(req): Promise<{ Data: any }> {
    try {
      const { Id, Name, Email, Balance } = req.body;
      let body = { Name, Email, Balance };
      let res = await this.customersModel.create(body);
      return { Data: res };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async getcustomers(req): Promise<{ Data: any }> {
    try {
      let res = await this.customersModel.find();
      return { Data: res };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async getRecords(req): Promise<{ Data: any }> {
    try {
      let res = await this.transfersModel.find();
      return { Data: res };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async Updatecustomers(req): Promise<{ Data: any }> {
    try {
      let { fromId, amount, toId, fromName, toName } = req.body;
      let ress = await this.customersModel.findById({ _id: fromId });
      let toRess = await this.customersModel.findById({ _id: toId });
      console.log(ress);
      const updateFrom = { _id: fromId, Balance: parseInt(ress.Balance) - amount };
      const updateTo = { _id: toId, Balance: parseInt(toRess.Balance) + amount };
      let transfers = await this.transfersModel.create({ FromName: fromName, ToName: toName, Amount: amount });
      let res = await this.customersModel.findByIdAndUpdate(fromId, updateFrom, { useFindAndModify: false });
      let resss = await this.customersModel.findByIdAndUpdate(toId, updateTo, { useFindAndModify: false });
      // let new_res = await this.customersModel.findOne(filter);
      return { Data: ress };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async Deletecustomers(req): Promise<{ Data: any }> {
    try {
      let { Id } = req.body;
      let filter = { Id };
      const update = { isDeleted: true };
      let res = await this.customersModel.findOneAndUpdate(filter, update, { useFindAndModify: false });
      let new_res = await this.customersModel.findOne(filter);
      return { Data: new_res };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  public async getcustomersById(req): Promise<{ Data: any }> {
    try {
      let { Id } = req.body;
      const filter = { _id: Id };
      let new_res = await this.customersModel.findById(req.params.id);
      console.log(new_res);
      return { Data: new_res };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}

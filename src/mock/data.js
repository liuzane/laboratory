import Mock from 'mockjs';

//登录账户列表
export const LoginUsers = [
  {
    id: 1,
    userName: 'admin',
    passWord: '123456',
    avatar: '',
    name: '张某某'
  }
];


//客户列表
let Customer = [];
for (let i = 0; i < 10; i++) {
  Customer.push(Mock.mock({
    index: i + 1,
    id: Mock.Random.guid(),
    company: Mock.Random.word(4).toUpperCase(),
    name: Mock.Random.cname(),
    trade: Mock.Random.cword(2),
    nature: Mock.Random.cword(2),
    'total|10-80': 10,
    'running|10-80': 10,
    person: Mock.Random.cname(),
  }));
};

export { Customer };


//待办列表
let TodoList = [];
for (let i = 0; i < 10; i++) {
  TodoList.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.ctitle(10, 30),
    status: [ 'todo', 'close', 'done' ][Math.floor(Math.random() * 3)],
    createTime: (new Date().getTime() - 10000 * i).toString(),
  }));
};
export { TodoList };


//联系人列表
let ContactPerson = [];
for (let i = 0; i < 10; i++) {
  ContactPerson.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    sex: Math.floor(Math.random() * 2).toString(),
    'age|20-50': 20,
    phone: '16666666666',
    email: Mock.Random.email(),
    duty: Mock.Random.cword(2),
  }));
};
export { ContactPerson };


//设备列表
let Equipment = [];
for (let i = 0; i < 10; i++) {
  Equipment.push(Mock.mock({
    id: Mock.Random.guid(),
    model: 'A1',
    batchNumber: 'A8SH1161',
    batchNumberIndex: 'A8SH1161-' + (i + 1),
    power: '800HP',
    voltage: '6000V',
    pressure: '116PSI',
    airFlow: '',
    manufacturer: '',
    controlType: 'PLC',
    screenModelSize: 'R200 6寸',
  }));
};
export { Equipment };


//零件列表
let Parts = [];
for (let i = 0; i < 10; i++) {
  let purchaseQuantity = Mock.Random.natural(1, 10);
  let useQuantity = Mock.Random.natural(0, purchaseQuantity);
  Parts.push(Mock.mock({
    id: Mock.Random.guid(),
    partsName: Mock.Random.ctitle(9, 10),
    partsNumber: Mock.Random.character('upper') + Mock.Random.string('number', 5),
    price: Mock.Random.natural(50, 1000),
    purchaseQuantity,
    useQuantity,
    remainQuantity: purchaseQuantity - useQuantity,
  }));
};
export { Parts };


//合同列表
let Contract = [];
for (let i = 0; i < 10; i++) {
  Contract.push(Mock.mock({
    id: Mock.Random.guid(),
    contractName: '2017年-紫金铜业购机合同',
    accessoryName: Mock.Random.string('lower', 10) + '.doc',
    startTime: Mock.Random.date('yyyy/MM/dd'),
    endTime: Mock.Random.date('yyyy/MM/dd'),
    singTime: Mock.Random.date('yyyy/MM/dd'),
    status: Mock.Random.natural(0, 1),
  }));
};
export { Contract };


//直销合同列表
let DirectContract = [];
for (let i = 0; i < 10; i++) {
  let customer = [ '中原石化', '珠海电厂', '紫金铜业', '富士康', '宝钢采购部', '天津钢铁' ][Mock.Random.natural(0, 5)];
  DirectContract.push(Mock.mock({
    id: Mock.Random.guid(),
    ERPCode: Mock.Random.character('upper', 2) + Mock.Random.date('yyyyMMddhh'),
    Name: '设备合同',
    Category: [ 10, 20, 30, 40 ][Mock.Random.natural(0, 3)],
    Status: [ 10, 20 ][Mock.Random.natural(0, 1)],
    BeginTime: Mock.Random.date('yyyy/MM/dd'),
    BeginMonth: Mock.Random.date('MM'),
    CustomerAbbr: customer,
    CutomerContact: Mock.Random.cname(),
    FinalCustomer: '-',
    CustomerName: customer + '有限公司',
    CustomerCode: Mock.Random.string('number', 4),
    CountryId: '2709f7a3-0752-4f2a-ad42-a9e0c9c84e77',
    CountryName: '中国',
    SpareTotalPrice:  Mock.Random.float(10000, 100000, 2, 2),
    UntaxedPrice: Mock.Random.float(10000, 100000, 2, 2),
    OSSCode: Mock.Random.string('number', 6),
    Type: [ 10, 20 ][Mock.Random.natural(0, 1)],
    SignedTime: Mock.Random.date('yyyy/MM/dd'),
    InvoiceNumber: Mock.Random.string('number', 10),
    InvoiceValue: Mock.Random.float(10000, 100000, 2, 2),
    Balance: Mock.Random.float(10000, 100000, 2, 2),
    AmountReceived: Mock.Random.float(10000, 100000, 2, 2),
    Remarks: Mock.Random.csentence(),
    EndTime: Mock.Random.date('yyyy/MM/dd'),
    Delivery: Mock.Random.date('MM'),
    OrderYear: Mock.Random.date('yyyy'),
    OrderMonth: Mock.Random.date('MM'),
    DistributionChannel: 20,
    IndustryType: 2310,
  }));
};
export { DirectContract };


//售后服务列表
// let AfterSale = [];
// for (let i = 0; i < 10; i++) {
//   let boolean = Mock.Random.boolean();
//   AfterSale.push(Mock.mock({
//     id: Mock.Random.guid(),
//     serviceName: Mock.Random.ctitle(9, 10),
//     qualityGuaranteePeriod: Mock.Random.boolean(),
//     assignmentPerson: boolean ? Mock.Random.cname() : '',
//     repairDate: Mock.Random.date('yyyy/MM/dd'),
//     type: boolean ? '处理故障' : '-',
//     serviceReport: boolean ? Mock.Random.string('lower', 10) + '.doc' : '-',
//     parts: boolean ? Mock.Random.boolean() : '-',
//     artificial: boolean ? Mock.Random.boolean() : '-',
//   }));
// };
// export { AfterSale };


//开机调试和服务中心
let AfterSale = [];
for (let i = 0; i < 10; i++) {
  let boolean = Mock.Random.boolean();
  AfterSale.push(Mock.mock({
    id: Mock.Random.guid(),
    fileName: '紫金铜业A1机型报修--全称',
    name: '紫金铜业A1机型报修',
    workType: '处理故障',
    isShelfLife: Mock.Random.boolean(),
    serviceTime: Mock.Random.date('yyyy/MM/dd'),
    isInvolveComponents: Mock.Random.boolean(),
    isArtificial: Mock.Random.boolean(),
    claimStatus: Mock.Random.boolean(),
    workTime: 8,
    reportId: '',
    reportName: '',
    formId: '',
    formName: '',
    clpId: '',
    clpName: boolean ? Mock.Random.string('lower', 5) + '.doc' : '-',
    pcsId: '',
    pcsName: boolean ? Mock.Random.string('lower', 5) + '.doc' : '-',
    pRebootId: '',
    pRebootName: boolean ? Mock.Random.string('lower', 5) + '.doc' : '-',
    claimsId: '',
    claimsName: '',
    receiptId: '',
    receiptName: '',
    remarks: '-',
    isAbnormal: Mock.Random.boolean(),
    abnormalRemarks: '',
    status: [ 10, 20 ][Mock.Random.natural(0, 1)],
    category: [ 10, 20, 30, 40 ][Mock.Random.natural(0, 3)],
    aftermarketStaffNames: [],
    aftermarketStaffIds: [],
  }));
};
export { AfterSale };


//人员详情列表
let PersonDetails = [];
for (let i = 0; i < 10; i++) {
  let boolean = Mock.Random.boolean();
  PersonDetails.push(Mock.mock({
    id: Mock.Random.guid(),
    type: '处理故障',
    content: Mock.Random.ctitle(9, 10),
    finishTime: Mock.Random.date('yyyy/MM/dd'),
    waitHour: Mock.Random.natural(0, 10),
    trafficHour: Mock.Random.natural(0, 10),
    workHour: Mock.Random.natural(0, 10),
    totalHour: Mock.Random.natural(0, 10),
  }));
};
export { PersonDetails };


//节日列表
let FestivalList = [];
for (let i = 0; i < 6; i++) {
  FestivalList.push(Mock.mock({
    id: Mock.Random.guid(),
    festivalImg: Mock.Random.image('260x230', '#19315D', '#FFF', 'Mock.js'),
    festivalName: Mock.Random.ctitle(2) + '节',
    festivalDate: Mock.Random.date('yyyy/MM/dd'),
  }));
};
export { FestivalList };


//生日列表
let BirthdayList = [];
for (let i = 0; i < 16; i++) {
  BirthdayList.push(Mock.mock({
    id: Mock.Random.guid(),
    img: Mock.Random.image('50x50', '#19315D', '#FFF', 'Customer'),
    name: Mock.Random.cname(),
    date: Mock.Random.date('MM-dd'),
    phone: '13678789877',
    company: '紫金铜业有限公司',
    birthdayRecord: [
      { year: Mock.Random.date('yyyy'), orderNumber: '12343222321' },
      { year: Mock.Random.date('yyyy'), orderNumber: '12343222321' },
      { year: Mock.Random.date('yyyy'), orderNumber: '12343222321' },
    ],
  }));
};
export { BirthdayList };


//拜访列表
let VisitList = [];
for (let i = 0; i < 6; i++) {
  VisitList.push(Mock.mock({
    id: Mock.Random.guid(),
    company: Mock.Random.cword(4),
    address: Mock.Random.county(true),
    customer: Mock.Random.cname(),
    visiter: Mock.Random.cname(),
    visitDate: Mock.Random.date('yyyy/MM/dd'),
    status: Mock.Random.natural(0, 2),
  }));
};
export { VisitList };
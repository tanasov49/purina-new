import { validationConfig, btnListAddress, btnClick} from './constants.js';
import { Api } from '../components/Api.js';
import { Address } from '../components/Address.js';
import { SectionAddress } from '../components/SectionAddress.js';
import { Dbc } from '../components/Dbc.js';
import { SectionDbc } from '../components/SectionDbc.js';
import { FindDbcInAddress } from '../components/FindDbcInAddress.js'
const api = new Api({
  urlJson: 'https://api.npoint.io/c6c32c3072fc0ee4bcfc',
  headers: {
    'Content-Type': 'application/json',
  }
});

Promise.all([
  api.getAddress(),
]).then(([cards]) => {
  cardsList.renderItems(cards);
  dbcList.renderDbc(cards);
  findDbc.showSlide(cards);
}).catch(err => {
  console.log(`Error: ${err}`);
})

const createCard = (item) => {
  const card = new Address(
    item,
    '.template-address',)
    return card.renderCard();
}
const cardsList = new SectionAddress({
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, validationConfig.address);

const createDbc = (item) => {
  const dbc = new Dbc(
    item,
    '.template-dbc')
    return dbc.renderDbc();
}
const dbcList = new SectionDbc({
  renderer: (item) => {
      dbcList.addDbc(createDbc(item));
  },
}, validationConfig.dbcCodeList)

let findDbc = new FindDbcInAddress(1, '.address', '.dbc-codes', '.popup');
btnListAddress.addEventListener('click', function(){
  findDbc.open();
    findDbc.setupDbc();
  });
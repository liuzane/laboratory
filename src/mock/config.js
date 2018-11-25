import { localeMock } from '@/api';
import MockAdapter from 'axios-mock-adapter';


let mock = new MockAdapter(localeMock, { delayResponse: 1500 });


export default mock;

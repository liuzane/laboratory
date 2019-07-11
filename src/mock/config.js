import { http } from '@/api/config';
import MockAdapter from 'axios-mock-adapter';


let mock = new MockAdapter(http, { delayResponse: 1500 });


export default mock;
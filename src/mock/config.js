import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios, { delayResponse: 3000 });

export default mock;

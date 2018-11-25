import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios, { delayResponse: 1500 });

export default mock;

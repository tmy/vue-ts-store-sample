import { Key } from 'vue-function-api';
import { CounterStore } from '../stores/counter';

const CounterKey: Key<CounterStore> = Symbol('CounterStore');
export default CounterKey;

import { InjectionKey } from '@vue/composition-api';
import { CounterStore } from '../stores/counter';

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore');
export default CounterKey;

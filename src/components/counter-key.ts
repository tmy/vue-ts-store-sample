import { InjectionKey } from 'vue';
import { CounterStore } from '@/stores/counter';

const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore');
export default CounterKey;

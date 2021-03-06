import { inject, InjectionKey } from '@vue/composition-api';

export default function injectOrError<T>(key: InjectionKey<T>): T {
  const injected = inject(key);
  if (!injected) {
    throw new Error(`${key} is not provided`);
  }
  return injected;
}

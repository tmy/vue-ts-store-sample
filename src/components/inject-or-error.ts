import { inject, Key } from 'vue-function-api';

export default function injectOrError<T>(key: Key<T>): T {
  const wrapper = inject(key);
  if (!wrapper) {
    throw new Error(`${key} is not provided`);
  }
  return wrapper.value;
}

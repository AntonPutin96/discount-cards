import { useState, useEffect, SetStateAction, useRef } from 'react';
import { set, get } from 'idb-keyval';

const useIndexedDB = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);
  const isFirstRender = useRef(true);

  useEffect(() => {
    (async () => {
      const prevValue = await get<T>(key);
      if (prevValue) {
        setValue(prevValue);
      }
    })();
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    (async () => {
      await set(key, value);
    })();
  }, [key, value]);

  return [value, setValue];
};

export default useIndexedDB;

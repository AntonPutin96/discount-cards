import { useState, useEffect, SetStateAction } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const prevValue = localStorage.getItem(key);
    return prevValue ? JSON.parse(prevValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

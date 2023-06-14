import { useEffect, useState } from 'react';

export function useHasMounted(onMount?: Function, onUnmount?: Function) {
  const [hasMounted, setHasMounted] = useState<boolean | null>(null);
  useEffect(() => {
    onMount?.();
    setHasMounted(true);
    return () => {
      onUnmount?.();
      setHasMounted(false);
    };
  }, []);
  return hasMounted;
}
export default useHasMounted;

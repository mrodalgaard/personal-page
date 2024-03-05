import useAge from './useAge';

export default function Age({ birthday }: { birthday: string }) {
  const age = useAge({ birthday });

  return <>{age}</>;
}

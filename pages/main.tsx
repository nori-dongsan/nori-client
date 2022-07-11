import { useRouter } from 'next/router';
export default function main() {
  const { query } = useRouter();
  console.log(query);
  return <div>메인입니다</div>;
}

import { useParams } from "next/navigation";

export default function Student() {
  const params = useParams();
  console.log(params);
  return <>Student</>;
}

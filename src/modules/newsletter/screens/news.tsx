import { useRouter } from "next/router";

export default function NewsScreen() {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <>
      <div className="h-screen">{slug}</div>
    </>
  );
}

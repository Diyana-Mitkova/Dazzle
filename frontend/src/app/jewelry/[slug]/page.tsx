type PageProps = { params: { slug: string } };
export default function Page({ params }: PageProps) {
  return <div>My Post: {params.slug}</div>;
}

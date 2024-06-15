type PageProps = { params: { id: string } };

export default async function Page({ params }: PageProps) {

  const res = await fetch(`http://localhost:3000/api/single/${params.id}`, { cache: 'no-store' }); // Make sure to use the correct URL
  const jewelry = await res.json();

  return <div>My Post: {params.id}
  <div>
    <pre>{JSON.stringify(jewelry, null, 2)}</pre>
  </div>
  </div>;
}

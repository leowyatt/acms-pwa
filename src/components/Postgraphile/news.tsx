import { Loading, useGetList } from 'react-admin';

export const LatestNews = () => {
  const { data, total, isLoading, error } = useGetList('posts', {
    pagination: { page: 1, perPage: 10 },
    // sort: { field: 'published_at', order: 'DESC' },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <p>ERROR</p>;
  }
  return (
    <>
      <h1>Latest news</h1>
      <ul>
        {data?.map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
      <p>
        {data?.length} / {total} articles
      </p>
    </>
  );
};

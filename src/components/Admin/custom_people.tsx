import { Loading, useGetList } from 'react-admin';

export const CustomPeople = () => {
  const { data, total, isLoading, error } = useGetList('people', {
    pagination: { page: 1, perPage: 5 },
    sort: { field: 'name', order: 'DESC' },
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
      <h1>Custom People</h1>
      <ul>{data?.map((record) => <li key={record.id}>{record.name}</li>)}</ul>
      <p>
        {data?.length} / {total} articles
      </p>
    </>
  );
};

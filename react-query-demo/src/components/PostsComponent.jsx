import { useQuery } from "react-query";

const PostsComponent = () => {
  const { isPending, error, data, refetch, isFetched } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),
    //   refetchOnWindowFocus: false,
  });

  if (isPending) return "Loading...";
  if (isFetched && !data) return <div>Log initial data...</div>;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div>
        <h1>React Query</h1>
        <button onClick={() => refetch()}>Refatch</button>
      </div>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h1>{user.title} </h1>
            <p>{user.body} </p>
          </div>
        ))}
    </div>
  );
};

export default PostsComponent;

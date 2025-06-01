import { Header } from "../components/Header";
import { NewsBlog } from "../components/NewsBlog";
import { useGetIdNewPostsQuery } from "../features/news/news-slice";

export const MainPage = () => {
  const { idPosts, isLoading } = useGetIdNewPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      idPosts: data?.slice(0, 100) ?? [],
      isLoading,
    }),
    pollingInterval: 1000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      {idPosts?.map((id) => {
        return <NewsBlog id={id} key={id} />;
      })}
    </>
  );
};

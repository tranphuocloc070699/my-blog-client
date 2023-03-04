import Banner from '~/components/Banner/Banner';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import ListPost from '~/components/ListPost/ListPost';
import useResponse from '~/utils/hooks/useResponse';

export default function Home() {
  const reponseDetecter = useResponse();
  return (
    <>
      <DefaultLayout>
        {!reponseDetecter.isMobile && <Banner />}
        <ListPost />
      </DefaultLayout>
    </>
  );
}

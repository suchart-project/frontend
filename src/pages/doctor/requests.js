import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import HistoryBox from "../../components/HistoryBox";

export default function Home({ movies }) {
  return (
    <Layout>
      <Navbar />
      <p className="text-blue-900 text-3xl font-bold text-center">
        Incoming requests
      </p>
      <div className="divide-y divide-gray-200 ">
        {new Array(10).fill(0).map((_, index) => (
          <div key={index} className="md-2">
            <HistoryBox />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  return { props: {} };
}

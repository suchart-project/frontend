import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import HistoryBox from "../components/HistoryBox";
import SearchTextWithFilter from "../components/SearchTextWithFilter";

export default function Home({ movies }) {
  return (
    <Layout>
      <Navbar />
      <p className="text-blue-900 text-3xl font-bold text-center">
        Admin (User history)
      </p>
      <div className="divide-y divide-gray-200 ">
        {new Array(10).fill(0).map((_, index) => (
          <div key={index} className="mt-2">
            <HistoryBox destination="/"/>
          </div>
        ))}
      </div>
    </Layout>
  );
}

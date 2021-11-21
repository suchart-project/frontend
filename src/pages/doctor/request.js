import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import InputBox from "../../components/InputBox";

export default function Home({ movies }) {
  return (
    <Layout>
      <Navbar />

      <form
      // onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <InputBox id="name" Name="Name" />
          <InputBox id="surname" Name="Surname" />
          <div className="flex flex-row gap-6">
            <div className="flex-1">
              <InputBox id="age" Name="Age" />
            </div>
            <div className="flex-1">
              <InputBox id="gender" Name="Gender" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Symptoms
            </label>
            <textarea
              type="text"
              className="textbox h-32 "
              value={"ปวดหัวจังงื้อ"}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <button className="button hover:ring-1 ring-indigo-300 bg-green-500">
            Accept
          </button>
          <button className="button hover:ring-1 ring-indigo-300 bg-red-500">
            Decline
          </button>
        </div>
      </form>
    </Layout>
  );
}

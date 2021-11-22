import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import SearchPerson from "../components/SearchPerson";
import SearchTextWithFilter from "../components/SearchTextWithFilter";
import { useState, useCallback, useEffect } from "react";


export default function Home({}) {
  const [filterOption, setFilterOption] = useState({
    OnlineFlag: false,
    DistanceFlag: false,
  });
  const [users, setUsers] = useState([]);
  const changeFormat = (data) => {
    var listOfObjects = [];
    data.forEach(function (entry) {
      let found = false;
      listOfObjects.forEach((eachObject) => {
        if (eachObject.Username === entry.Username) {
          found = true;
          eachObject["Name"].push(entry["Name"]);
        }
      });
      if (!found) {
        var tmp = entry;
        var tmpName = entry["Name"];
        tmp["Name"] = [tmpName];
        listOfObjects.push(tmp);
      }
    });
    return listOfObjects;
  };
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(`/api/user`);
      const x = await Promise.resolve(response.json());
      setUsers(changeFormat(x));
    };
    fetching();
  }, []);

    const search = useCallback(
      async (target) => {
        try {
          const response = await fetch(
            `/api/user?SearchStr=${target}&OnlineFlag=${filterOption["OnlineFlag"]}&DistanceFlag=${filterOption["DistanceFlag"]}`,
            {
              method: "GET",
            }
          );
          const x = await Promise.resolve(response.json());
          setUsers(changeFormat(x[0]));
        } catch {
          alert("Something went wrong");
        }
      },
      [filterOption]
    );

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(e.target.searchbox.value);
        }}
      >
        <input
          className="textbox"
          name="searchbox"
          placeholder="ค้นหาแพทย์ โดย ชื่อ / อาการ / คลินิค"
        />
      </form>

      <SearchTextWithFilter
        text='All result for "สุชาติ"'
        setFilter={setFilterOption}
      />
      {users.map((user, index) => (
        <SearchPerson key={index} user={user} />
      ))}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <p className="text-blue-900 text-3xl font-bold text-center">
        Search physicians
      </p>
      {page}
    </Layout>
  );
};

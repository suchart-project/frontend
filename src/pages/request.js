import Layout from "../components/Layout";
import Back from "../components/Back";
import SelectPerson from "../components/SelectPerson";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home({ movies }) {
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    setModal(false);
    alert("ส่ง Request สำเร็จ");
    router.push("/requests");
  };

  return (
    <Layout>
      {showModal && (
        <Modal
          callBack={handleSubmit}
          title="แน่ใจหรือไม่ว่าจะส่งคำร้องขอ"
          description="เมื่อส่ง Request ไปหาแพทย์แล้วต้องรอจนกว่าจะถูกยอมรับจากแพทย์ ถึงจะได้เข้ารับการปรึกษา"
          setModal={setModal}
          showModal={showModal}
        />
      )}
      <Back />
      <p className="text-blue-900 text-3xl font-bold text-center">
        Fill in your symptoms
      </p>
      <a className="">คุณได้เลือกเข้ารับการปรึกษากับ :</a>
      <SelectPerson />

      <form
        className="flex flex-col gap-2 "
        onSubmit={(e) => {
          e.preventDefault();
          setModal(true);
        }}
      >
        <label className="block text-gray-700 text-sm font-bold">
          Symptoms
        </label>
        <textarea
          type="text"
          className="textbox h-32 "
          placeholder="กรุณากรอกอาการของท่าน"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className="button hover:ring-1 ring-indigo-300">Submit</button>
      </form>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { uid } = context.query;
  if (!uid) return { redirect: { destination: "/" } };
  return { props: {} };
}

import SideBar from "./SideBar/SideBar";
import ReactTable from "./ReactTable/ReactTable";
import Modal from "./Modal/Modal";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Crud() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div>
        <h1 className="bg-gray-100 pt-10 pb-10 pl-40 text-4xl text-gray-600 font-bold flex justify-between items-center">
          Mis Proyectos
          <button
            className="border border-gray-300 mr-14 rounded-lg p-2 hover:bg-gray-200 transition"
            onClick={toggleModal}
          >
            <i className="bi bi-list text-4xl"></i>
          </button>
        </h1>

        <div className="flex flex-col-reverse xl:flex-row justify-center items-center xl:items-start">
          <SideBar />
          <ReactTable />
        </div>

        <Modal isOpen={modalOpen} onClose={toggleModal} />
      </div>
    </>
  );
}

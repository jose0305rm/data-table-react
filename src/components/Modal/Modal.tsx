import "bootstrap-icons/font/bootstrap-icons.css";
import ModalConten from "./ModalConten";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-200 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-[700px] max-w-4xl p-6 relative transform transition-transform duration-200 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <i className="bi bi-x-lg text-xl"></i>
        </button>

        <div className="text-center p-0">
          <h1 className="text-2xl font-bold mb-4 text-gray-600">Mis Herramientas</h1>
          <ModalConten />
        </div>
      </div>
    </div>
  );
}

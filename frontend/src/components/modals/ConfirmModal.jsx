import Modal from "./Modal";

export default function ConfirmModal({ message, onConfirm, onClose }) {

  return (
    <Modal title="Confirm Delete" onClose={onClose}>

      <p className="mb-6">
        {message}
      </p>

      <div className="flex gap-3 justify-end">

        <button
          onClick={onClose}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete
        </button>

      </div>

    </Modal>
  );
}
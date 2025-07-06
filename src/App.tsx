import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/modal";
import {
  MODAL_MESSAGE,
  MODAL_NO,
  MODAL_TITLE,
  MODAL_YES,
} from "./constant/modal";

function App() {
  const [modalId, setModalId] = useState("");

  return (
    <>
      <div>
        <button onClick={() => setModalId("welcome")}>
          Open Welcome Modal
        </button>
        <button onClick={() => setModalId("deleteItem")}>
          Open Delete Item Modal
        </button>
        <button onClick={() => setModalId("sessionExpired")}>
          Open Session Expired Modal
        </button>
        <button onClick={() => setModalId("saveChanges")}>
          Open Save Changes Modal
        </button>
        <button onClick={() => setModalId("networkError")}>
          Open Network Error Modal
        </button>
        <button onClick={() => setModalId("profileUpdated")}>
          Open Profile Updated Modal
        </button>
      </div>
      <div>
        <Modal
          open={modalId === "welcome"}
          title={MODAL_TITLE.WELCOME}
          size={"l"}
          description={MODAL_MESSAGE.WELCOME}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          actionLabel={MODAL_YES.OK}
          cancelLabel={MODAL_NO.CANCEL}
        />
        <Modal
          open={modalId === "deleteItem"}
          title={MODAL_TITLE.DELETE_ITEM}
          description={MODAL_MESSAGE.DELETE_ITEM}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          actionLabel={MODAL_YES.CONFIRM}
          cancelLabel={MODAL_NO.CANCEL}
        />
        <Modal
          open={modalId === "sessionExpired"}
          title={MODAL_TITLE.SESSION_EXPIRED}
          description={MODAL_MESSAGE.SESSION_EXPIRED}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          actionLabel={MODAL_YES.CONTINUE}
          cancelLabel={MODAL_NO.GO_BACK}
        />
        <Modal
          open={modalId === "saveChanges"}
          title={MODAL_TITLE.SAVE_CHANGES}
          description={MODAL_MESSAGE.SAVE_CHANGES}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          actionLabel={MODAL_YES.YES}
          cancelLabel={MODAL_NO.DISCARD}
        />
        <Modal
          open={modalId === "networkError"}
          title={MODAL_TITLE.NETWORK_ERROR}
          description={MODAL_MESSAGE.NETWORK_ERROR}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          cancelLabel={MODAL_YES.OK}
        />
        <Modal
          open={modalId === "profileUpdated"}
          title={MODAL_TITLE.PROFILE_UPDATED}
          description={MODAL_MESSAGE.PROFILE_UPDATED}
          onCancel={() => setModalId("")}
          onAction={() => {
            setModalId("");
          }}
          cancelLabel={MODAL_YES.OK}
        />
      </div>
    </>
  );
}

export default App;

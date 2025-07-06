import { useState } from "react";
import "./App.css";
import Modal from "./components/modal/modal";
import Button from "./components/button/Button";
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
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Button onClick={() => setModalId("welcome")}>
          Open Welcome Modal
        </Button>
        <Button onClick={() => setModalId("deleteItem")}>
          Open Delete Item Modal
        </Button>
        <Button onClick={() => setModalId("sessionExpired")}>
          Open Session Expired Modal
        </Button>
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
          size={"xs"}
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
      </div>
    </>
  );
}

export default App;

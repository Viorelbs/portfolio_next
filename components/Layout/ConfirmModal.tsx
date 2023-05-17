import { Button, Dialog } from "@material-tailwind/react";
import React from "react";

interface Props {
  modalState: boolean;
  closeModal: () => void;
}
export default function ConfirmModal({ modalState, closeModal }: Props) {
  return (
    <Dialog size="xs" open={modalState} handler={() => closeModal()}>
      <div className="flex flex-col bg-white top-0 bottom-0 left-0 right-0 m-auto h-fit absolute gap-8 max-w-xl border p-5 rounded-md">
        <div className="check-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg-success"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            >
              <circle
                className="success-circle-outline"
                cx="12"
                cy="12"
                r="11.5"
              />
              <circle
                className="success-circle-fill"
                cx="12"
                cy="12"
                r="11.5"
              />
              <polyline
                className="success-tick"
                points="17,8.5 9.5,15.5 7,13"
              />
            </g>
          </svg>
        </div>
        <p className="text-center">
          Thank you for contacting me! Will respond soon.
        </p>
        <Button className="btn-primary w-fit mx-auto mb-4" onClick={closeModal}>
          Inchide
        </Button>
      </div>
    </Dialog>
  );
}

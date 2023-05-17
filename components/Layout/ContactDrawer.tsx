"use client";
import React, { useState } from "react";
import {
  Drawer,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BsArrowRightShort } from "react-icons/bs";
import Loader from "../Common/Loader";
import sendContactForm from "@/lib/api";

const initValues = {
  name: "",
  email: "",
  message: "",
};

export function ContactDrawer({ buttonType }: { buttonType: string }) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const initState = { isLoading: false, error: "", values: initValues };
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;
  const [acceptance, setAcceptance] = useState(false);

  // Control form
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
        subject: "Contact Form Viorel Developer",
      },
    }));

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      {buttonType === "primary" ? (
        <button
          onClick={openDrawer}
          className="flex items-center text-lg gap-2 text-primary mt-2 group"
        >
          Contact Me
          <BsArrowRightShort className="w-5 h-5 relative left-0 group-hover:left-2 transition-all duration-300" />
        </button>
      ) : (
        <button
          onClick={openDrawer}
          className=" py-3 px-5 rounded-xl text-white text-sm gap-2 font-light bg-primary normal-case	tracking-widest fixed right-[2vw] top-[5vh] z-10 hover:bg-orange-700 "
        >
          Contact Me
        </button>
      )}
      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="bg-secondary md:min-w-[300px] "
      >
        <div className="mb-2 flex items-center justify-between p-4 ">
          <h5 className="text-white">Contact Me</h5>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5 text-gray-500" />
          </IconButton>
        </div>
        <form className="flex flex-col gap-6 p-4 " onSubmit={handleSubmit}>
          <Input
            label="name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          <Input
            type="email"
            name="email"
            value={values.email}
            label="Email"
            className="text-gray-200"
            onChange={handleChange}
          />
          <Textarea
            name="message"
            rows={6}
            value={values.message}
            label="Message"
            onChange={handleChange}
          />
          <div>
            <input
              type="checkbox"
              id="accept"
              required
              className="w-4 h-4 mr-2 relative top-1"
              onChange={() => setAcceptance(!acceptance)}
            />
            <label htmlFor="accept" className="text-[15px] cursor-pointer">
              I agree that the personal data collected in the above form should
              be used exclusively for the purpose of receiving a response to the
              request.*
            </label>
          </div>

          <Button type="submit" disabled={isLoading}>
            {" "}
            {isLoading ? <Loader size={5} /> : "Send Message"}
          </Button>
        </form>
      </Drawer>
    </>
  );
}

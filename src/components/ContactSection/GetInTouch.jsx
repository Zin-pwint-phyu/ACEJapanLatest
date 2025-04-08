import React from "react";
import FocusIcon from "../../shared/FocusIcon";
import HeaderT from "../../shared/HeaderT";
import Container from "../../shared/Container";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import Swal from "sweetalert2";

const GetInTouch = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0e43b5a0-1df8-4915-ae36-12e24e11d9cc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="bg-seconary h-auto mt-30">
      <Container className="pt-20">
        <div className="flex flex-col justify-center items-center">
          <FocusIcon text="Contact Us" className="py-2" />
          <HeaderT className="xl:text-5xl pt-2">Get In Touch</HeaderT>
        </div>
        {/*  Form starts here */}
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
            <Input placeholder="Your Name" name="name" />
            <Input placeholder="Your Email" name="email" />
            <Input placeholder="Phone Number" name="phone_number" />
            <Input placeholder="Website" name="website" />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <Input placeholder="Subject" name="subject" />
            <Input
              placeholder="Your Message"
              className="py-10 text-start placeholder:align-top leading-none"
              name="message"
            />
          </div>
          {/*  Submit button must be inside the form */}
          <div className="flex justify-center items-center pt-8 pb-16">
            <Button type="submit" className="text-white xl:px-12 xl:py-3">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default GetInTouch;

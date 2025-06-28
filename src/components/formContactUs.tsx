"use client";
import React from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  firstName: string;
  lastName: string;
  nationality: string;
  contact: string;
  email: string;
  nic: string;
  nicValue?: string;
  branch: string;
  programme: string;
  message: string;
  documents: FileList;
};

const FormContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("nationality", data.nationality);
    formData.append("contact", data.contact);
    formData.append("email", data.email);
    formData.append("nic", data.nic);
    if (data.nicValue) {
      formData.append("nicValue", data.nicValue);
    }
    formData.append("branch", data.branch);
    formData.append("programme", data.programme);
    formData.append("message", data.message);
    if (data.documents) {
      Array.from(data.documents).forEach((file) => {
        formData.append("documents", file);
      });
    }
    fetch("/api/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
  };

  const nicSelection = watch("nic");

  return (
    <div>
      <div className="lg:mx-[300px] lg:my-[150px] lg:py-[100px] lg:h-auto  bg-[#100B25] rounded-3xl text-white py-[40px] my-[40px] mx-[20px]">
        <div className="flex justify-center ">
          <h1 className=" lg:text-[40px] text-[28px] font-extrabold">
            Get in Touch with us
          </h1>
        </div>
        <div className="lg:px-[185px] px-[20px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-[45px] gap-x-[96px]"
          >
            <div>
              <label>Full Name</label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                type="text"
                className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <label>Last Name</label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                type="text"
                className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="">Nationality</label>
              <select
                {...register("nationality", {
                  required: "Nationality is required",
                })}
                className="w-full p-2 mt-1 border-b-2 bg-[#1a1336]"
              >
                <option value="">Select</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Other">Other</option>
              </select>
              {errors.nationality && (
                <span className="text-red-500">
                  {errors.nationality.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="">Contact Number</label>
              <input
                {...register("contact", {
                  required: "Contact number is required",
                })}
                type="text"
                className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
              />
              {errors.contact && (
                <span className="text-red-500">{errors.contact.message}</span>
              )}
            </div>

            <div>
              <label>Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label>NIC/Passport</label>
              <select
                {...register("nic", { required: "NIC/Passport is required" })}
                className="w-full p-2 mt-1 border-b-2 bg-[#1a1336]"
              >
                <option value="">Select</option>
                <option value="NIC">NIC</option>
                <option value="Passport">Passport</option>
              </select>
              {errors.nic && (
                <span className="text-red-500">{errors.nic.message}</span>
              )}
            </div>
            {["NIC", "Passport"].includes(nicSelection) && (
              <div className="md:col-span-2">
                <label>{nicSelection} Number</label>
                <input
                  {...register("nicValue", {
                    required: `${nicSelection} number is required`,
                  })}
                  placeholder={`Enter your ${nicSelection} number`}
                  className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
                />
                {errors.nicValue && (
                  <p className="text-red-500 text-sm">
                    {errors.nicValue.message}
                  </p>
                )}
              </div>
            )}
            <div>
              <label>Branch</label>
              <input
                {...register("branch", { required: "Branch is required" })}
                type="text"
                className="w-full p-2 mt-1 border-b-2 bg-[#100B25]"
              />
              {errors.branch && (
                <span className="text-red-500">{errors.branch.message}</span>
              )}
            </div>

            <div>
              <label>Academic Programme</label>
              <select
                {...register("programme", {
                  required: "Academic programme is required",
                })}
                className="w-full p-2 mt-1 border-b-2 bg-[#1a1336]"
              >
                <option value="">Select</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
              {errors.programme && (
                <span className="text-red-500">{errors.programme.message}</span>
              )}
            </div>

            <div className="md:col-span-2">
              <label>Documents(Can Upload multiple files)</label>
              <input
                {...register("documents", {
                  required: "Please upload relevant documents",
                  validate: {
                    allArePdfs: (files) =>
                      Array.from(files || []).every(
                        (file) => file.type === "application/pdf"
                      ) || "Only PDF files are allowed",
                    hasFiles: (files) =>
                      (files && files.length > 0) ||
                      "You must upload at least one file",
                  },
                })}
                placeholder="+ Add Attachments"
                type="file"
                accept=".pdf"
                className="w-full p-2 mt-1 border-dashed border-2 border-gray-300 placeholder-center bg-[#100B25]"
                multiple
              />
              {errors.documents && (
                <span className="text-red-500">{errors.documents.message}</span>
              )}
            </div>

            <div className="md:col-span-2">
              <label>Message</label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full p-2 mt-1 border-b-2"
                rows={1}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded md:w-[250px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;

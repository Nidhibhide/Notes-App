"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { create, edit } from "@/lib/api/notes";

const AddNoteForm = () => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [note, setNote] = useState();
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });
  useEffect(() => {
    const storedNote = localStorage.getItem("editNote");

    if (storedNote) {
      const note = JSON.parse(storedNote);
      setNote(note);
      setIsEdit(true);
      localStorage.removeItem("editNote");
    }
  }, []);
  const initialValues = {
    title: note?.title || "",
    description: note?.description || "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (!isEdit) {
        const response = await create(values);
        router.push("/");
      } else {
        const response = await edit(note._id, values);
        router.push("/");
      }
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        {isEdit ? "Edit Note " : "Add New Note"}
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        <Form className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-base font-semibold text-gray-700"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              placeholder="Note title"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-sm text-red-600 mt-1"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-base  font-semibold text-gray-700"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <Field
              as="textarea"
              id="description"
              name="description"
              rows={4}
              placeholder="Write your note..."
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-sm text-red-600 mt-1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            {isEdit ? "Update Note" : "Add Note"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNoteForm;

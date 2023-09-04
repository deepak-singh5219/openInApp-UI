import React from "react";
import { Button, Input, Text } from "./UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormData } from "@/context/FormContext";

type Props = {
  setState: (state: String) => void;
  setAddPopup: (addpopup: Boolean) => void;
};
const schema = z.object({
  instagram: z.string().min(1, { message: "enter a valid link" }),
  youtube: z.string().min(10, { message: "enter a valid link" }),
});
export type IForm = z.infer<typeof schema>;

function Contact({ setState, setAddPopup}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: zodResolver(schema) });

  const { formData, setFormData } = useFormData();

  const onSubmitReady = async (data: IForm) => {
    setFormData({...formData,data});
    setAddPopup(false)

  };
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmitReady)}>
        <div>
          <Text variant="titleSm" className="inline-block max-w-max mb-2">
            Instagram Link
          </Text>
          <Input
            variant="image"
            placeholder="www.instagram.com/username"
            className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6 border border-[#E5E5E5]"
            register={register("instagram")}
          />
          {errors.instagram?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.instagram?.message}
            </Text>
          )}
        </div>
        <div>
          <Text variant="titleSm" className="inline-block max-w-max mb-2">
            Youtube Link
          </Text>
          <Input
            variant="image"
            placeholder="www.youtube.com/username"
            className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
            register={register("youtube")}
          />
          {errors.youtube?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.youtube?.message}
            </Text>
          )}
        </div>
        <div className="mt-20 flex justify-end gap-x-4">
          <Button
            variant="outline"
            title="Back"
            className="text-black"
            onClick={() => setState("basic")}
          />
          <Button
            type="submit"
            variant="primary"
            title="Done"
            className="text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;

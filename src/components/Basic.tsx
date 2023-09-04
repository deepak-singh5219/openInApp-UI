import React from "react";
import { Button, Input, Text } from "./UI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormData } from "@/context/FormContext";
 


type Props = {
  setState: (state: String) => void;
};
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid Email" }),
  phone: z.string().min(10, { message: "Please enter a valid Phone Number" }),
});
export type IForm = z.infer<typeof schema>;

function Basic({ setState }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: zodResolver(schema) });

  const { formData, setFormData } = useFormData();
  const onSubmitReady = async (data: IForm) => {
    setFormData(data);
    setState('contact');
  };
  
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmitReady)}>
        <div>
          <Text variant="titleSm" className="inline-block max-w-max mb-2">
            Enter Name*
          </Text>
          <Input
            variant="image"
            placeholder="Eg. John Doe"
            className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6 border border-[#E5E5E5]"
            register={register("name")}
          />
          {errors.name?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.name?.message}
            </Text>
          )}
        </div>
        <div>
          <Text variant="titleSm" className="inline-block max-w-max mb-2">
            Enter Email*
          </Text>
          <Input
            variant="image"
            placeholder="Eg. john@gmail.com"
            className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
            register={register("email")}
          />
          {errors.email?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.email?.message}
            </Text>
          )}
        </div>
        <div>
          <Text variant="titleSm" className="inline-block max-w-max mb-2">
            Enter Phone*
          </Text>
          <Input
            variant="image"
            placeholder="Eg. 9149262211"
            className="block w-full rounded-md  py-1.5 text-primary bg-cardSecondary shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-buttonSecondary sm:text-sm sm:leading-6"
            register={register("phone")}
          />
          {errors.phone?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.phone?.message}
            </Text>
          )}
        </div>
        <div className="mt-20 flex justify-end">
          <Button
            type="submit"
            variant="primary"
            title="Next"
            className="text-white"
            
          />
        </div>
      </form>
    </div>
  );
}

export default Basic;

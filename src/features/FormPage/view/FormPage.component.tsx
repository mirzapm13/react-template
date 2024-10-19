import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import {
  Controller,
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import CustomSelect from "../../../components/atoms/CustomSelect";
import Input from "../../../components/atoms/Input";
import TextArea from "../../../components/atoms/TextArea";

const CATEGORY = [
  {
    value: "a",
    label: "a",
  },
  {
    value: "b",
    label: "b",
  },
  {
    value: "c",
    label: "c",
  },
];

const schema = z.object({
  name: z.string().min(6, "Minimum value is 6"),
  brand: z.string().min(8),
  price: z.coerce.number().gt(10, "Must be 18 and above"),
  category: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .required(),
  "item-weight": z.coerce.number().gte(5, "Must be 5 and above"),
  description: z.string().min(4, "min 4 length").optional().or(z.literal("")),
});

type FormFields = z.infer<typeof schema>;

const FormPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
    // setValue,
  } = useForm<FormFields>({
    defaultValues: {
      name: "test@email.com",
      // category: {
      //   value: "a",
      //   label: "a",
      // },
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
      console.log(error);
    }
  };

  const onErrors: SubmitErrorHandler<FormFields> = (error) => {
    console.log(error);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setValue("category", { label: "a", value: "a" });
  //   }, 1000);
  // }, [setValue]);

  return (
    <div className="ModuleContainer">
      <section className="bg-white dark:bg-gray-900">
        <div className=" mx-auto ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={handleSubmit(onSubmit, onErrors)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <Input
                  label="Name"
                  type="text"
                  required
                  error={errors.name}
                  name="name"
                  register={register("name")}
                />
              </div>
              <div className="w-full">
                <Input
                  label="Brand"
                  type="text"
                  id="brand"
                  placeholder="Product Brand"
                  required
                  error={errors.brand}
                  register={register("brand")}
                  name="brand"
                />
              </div>
              <div className="w-full">
                <Input
                  label="Price"
                  type="number"
                  id="price"
                  placeholder="$2999"
                  required
                  error={errors.price}
                  register={register("price")}
                  name="price"
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name="category"
                  render={({ field: { onChange, value, name } }) => (
                    <CustomSelect
                      options={CATEGORY}
                      label="Category"
                      isMulti={false}
                      onChange={onChange}
                      value={value}
                      name={name}
                      error={errors.category as FieldError}
                    />
                  )}
                />
              </div>
              <div>
                <Input
                  label="Item Weight"
                  type="number"
                  id="item-weight"
                  placeholder="10"
                  required
                  error={errors["item-weight"]}
                  register={register("item-weight")}
                  name="item-weight"
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  label="Description"
                  placeholder="Enter your description here..."
                  id="description"
                  error={errors.description}
                  register={register("description")}
                  name="description"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-5">
              Add product
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormPage;

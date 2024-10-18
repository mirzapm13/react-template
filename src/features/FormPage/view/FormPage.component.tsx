import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(6),
  brand: z.string().min(8),
  price: z.number().gt(0),
  category: z.enum(["TV", "PC", "GA", "PH"]),
  "item-weight": z.number().gt(0),
  description: z
    .string()
    .min(4, "Please enter a valid value")
    .optional()
    .or(z.literal("")),
});

type FormFields = z.infer<typeof schema>;

const FormPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    // formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    // defaultValues: {
    //   email: "test@email.com",
    // },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div className="ModuleContainer">
      <section className="bg-white dark:bg-gray-900">
        <div className=" mx-auto ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  // name="name"
                  id="name"
                  placeholder="Type product name"
                  required
                  {...register("name")}
                />
              </div>
              <div className="w-full">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  placeholder="Product brand"
                  required
                  {...register("brand")}
                />
              </div>
              <div className="w-full">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  placeholder="$2999"
                  required
                  {...register("price")}
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <select id="category" {...register("category")}>
                  <option selected>Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label htmlFor="item-weight">Item Weight (kg)</label>
                <input
                  type="number"
                  id="item-weight"
                  placeholder="12"
                  required
                  {...register("item-weight")}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormPage;

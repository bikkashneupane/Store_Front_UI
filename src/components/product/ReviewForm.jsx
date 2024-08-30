import { CustomInput } from "../custom/CustomInput";
import { FaStar } from "react-icons/fa";
import { postReviewAction } from "../../features/review/reviewAction";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const ReviewForm = ({ selectedProduct, hideModal }) => {
  const { form, handleOnChange } = useForm({});
  const [ratings, setRatings] = useState(1);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { productId, orderId } = selectedProduct;
    dispatch(postReviewAction({ ...form, ratings, productId, orderId }));
    hideModal();
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Review Title",
    },
    {
      label: "Detailed Review",
      name: "message",
      as: "textarea",
      rows: "5",
      required: true,
      placeholder: "Give detailed review...",
    },
  ];
  return (
    <form className="flex flex-col gap-2 text-sm" onSubmit={handleOnSubmit}>
      {inputs?.map((item) => (
        <CustomInput key={item?.name} {...item} onChange={handleOnChange} />
      ))}
      <div className="mb-3 flex items-center">
        <label className="text-sm mr-2">Select Star: </label>
        {new Array(5).fill("").map((item, i) => (
          <FaStar
            key={i}
            onClick={() => setRatings(i + 1)}
            className={i < ratings ? "text-purple-600 text-lg" : ""}
          />
        ))}
      </div>
      <button
        type="submit"
        className="rounded-md bg-purple-600 py-2 px-4 text-sm text-white data-[hover]:bg-pruple-500 data-[active]:bg-purple-700"
      >
        Leave Review
      </button>
    </form>
  );
};

export default ReviewForm;

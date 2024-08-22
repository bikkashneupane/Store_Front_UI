import { fetchReviewAxios, postReviewAxios } from "./reviewAxios";
import { setReviews } from "./reviewSlice";

// fetch all reviews
export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await fetchReviewAxios();
  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};

// post review
export const postReviewAction = (obj) => async (dispatch) => {
  const { status } = await postReviewAxios(obj);
  if (status === "success") {
    dispatch(fetchReviewAction());
  }
};

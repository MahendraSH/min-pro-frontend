import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import GalaryImage from "../../components/GalaryImage";
import Loader from "../../components/Loader";
import { clearErrors, getGalary } from "../../actions/galaryActions";
import { enqueueSnackbar } from "notistack";

const Galary = () => {
  const dispatch = useDispatch();
  const { loading, images, error } = useSelector(
    (state) => state.galaryReducer
  );

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }

    dispatch(getGalary());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" lg:columns-3">
          {images &&
            images.map((image) => {
              return <GalaryImage image={image} key={image.public_id} />;
            })}
        </div>
      )}
    </>
  );
};

export default Galary;

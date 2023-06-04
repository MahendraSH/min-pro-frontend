import React from "react";
import { useEffect, useState } from "react";
const React_api_url = process.env.REACT_APP_API_URL;

const getImages = async (nexload) => {
  const params = new URLSearchParams();
  if (nexload) {
    params.append("next_cursor", nexload);
  }
  const response = await fetch(
    `${React_api_url}/api/landing/all?${params.toString()} `
  );
  const data = await response.json();
  return data;
};  
const AdminGalary = () => {
  const [file, setFile] = useState('');
  const [imagesList, setImagesList] = useState([]);
  const [nextLoad, setNextLoad] = useState('');
  const [public_id, setPublic_id] = useState('');

  const handleCheckbox = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      if (public_id) {
        setPublic_id([...public_id, name]);
      } else {
        setPublic_id([name]);
      }
    } else {
      setPublic_id(public_id.filter((item) => item !== name));
    }

    console.log(public_id);
  };
  const deleteImage = async (id) => {
    id = id.split("/")[2];
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/landing/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);
    console.log(id);

    const newList = imagesList.filter((item) => {
      return !public_id.includes(item.public_id);
    });
    setImagesList(newList);
  };
  const handleBtnDelte = async (e) => {
    e.preventDefault();
    public_id.map(async (item) => {
      await deleteImage(item);
    });
    console.log(public_id);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setFile(e.target.files[0]);
    console.log(file);
  };
  const handleSubmitform = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/landing/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log("data", data);

    setImagesList([...imagesList, ...data.images]);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const { images, next_cursor } = await getImages();
      setImagesList(images);
      setNextLoad(next_cursor);
    };
    fetchImages();
  }, []);
  const handleLoadMore = async () => {
    const { images, next_cursor } = await getImages(nextLoad);
    setImagesList([...imagesList, ...images]);
    setNextLoad(next_cursor);
  };
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full p-3 shadow-lg bg-info">
        <table className="table w-full  ">
          {/* head */}
          <thead>
            <tr>
              <th colSpan={4} className="text-center">
                <button className="btn  btn-disabled ">upload image</button>
                <form onSubmit={handleSubmitform}>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    accept="image/*"
                    name="file"
                    required
                    onChange={handleFileChange}
                  />
                  <input
                    type="submit"
                    value="file upload"
                    className="btn btn-primary"
                  />
                </form>
              </th>
            </tr>
            <tr>
              <th>Image</th>
              <th>public id</th>
              <th>url & more</th>
              <th>
                {public_id !== null ? (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleBtnDelte}
                  >
                    {" "}
                    delte
                  </button>
                ) : (
                  "select"
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {imagesList.map((image , index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center ">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={image.url} alt="some" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{image.altName}</div>
                      <div className="text-sm opacity-50">{image.folder}</div>
                    </div>
                  </div>
                </td>
                <td className=" bg-neutral text-neutral-content ">
                  {image.public_id}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>

                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name={image.public_id}
                      onChange={handleCheckbox}
                    />
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer items-center p-4  bg-secondary text-secondary-content ">
        <div className="items-center  grid-flow-row">
          {nextLoad && (
            <button
              onClick={handleLoadMore}
              className="btn  btn-outline btn-primary"
            >
              Load More
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default AdminGalary;

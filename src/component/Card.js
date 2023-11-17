import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("stor")) || []
  );

  function deleteItem(id) {
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("stor", JSON.stringify(newData));
    setData(newData);
  }
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Buttom</th>
          </tr>
        </thead>
        <tbody>
          <>
            {data.map((item, index) => (
              <React.Fragment key={index + 1}>
                <tr>
                  <th scope="row">{index}</th>
                  <td>
                    {" "}
                    <img src={item.img} alt="#" height={50} width={50}></img>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.discription}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Card;

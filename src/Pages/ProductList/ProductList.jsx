import React, { useState } from "react";
import "./ProductList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ProductRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const ProductList = () => {
  const [data, setData] = useState(ProductRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Layout className="prodictList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Layout>
  );
};

export default ProductList;

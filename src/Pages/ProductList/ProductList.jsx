import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ProductRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);


  const getAllProduct = async() => {
    try{
      const { data } = await axios.get("http://localhost:8000/api/v1/product/products")

      if(data.success) {
        // console.log(data)
        setData(data.products)
      }
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getAllProduct();
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const rows = data.map((row, index) => {
    return { ...row, id: index + 1 };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "photo",
      headerName: "Photo",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <img className="productListImg" src={`http://localhost:8000/api/v1/product/product-photo/${params.row._id}`} alt="" />
          </>
        );
      },
    },
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.name}
          </>
        );
      },
    },
    {
      field: "category",
      headerName: "category",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.category.name}
          </>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Stock",
      width: 60,
      renderCell: (params) => {
        return (
          <>
            {params.row.quantity}
          </>
        );
      },
    },
    {
      field: "shipping",
      headerName: "shipping",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            {params.row.shipping ? 'yes' : "no" }
          </>
        );
      },
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

  console.log(rows)
  return (
    <Layout className="prodictList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        pagination
        checkboxSelection
        getRowHeight={(params) => 80}
      />
    </Layout>
  );
};

export default ProductList;

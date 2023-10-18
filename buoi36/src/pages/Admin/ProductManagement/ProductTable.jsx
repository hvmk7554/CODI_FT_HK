

import { styled } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListProduct,deleteProduct } from "../../../rtk/slices/productSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductTable() {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProduct());
  }, [])

  const handleDelete = (productId) =>  {
    dispatch(deleteProduct(productId))
    window.location.reload() ;
    }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minwidth: 700, marginTop: "20px" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"> ID </StyledTableCell>
            <StyledTableCell align="left"> Image </StyledTableCell>
            <StyledTableCell align="left"> Name </StyledTableCell>
            <StyledTableCell align="left"> Price </StyledTableCell>
            <StyledTableCell align="left"> Size </StyledTableCell>
            <StyledTableCell align="left"> Category</StyledTableCell>
            <StyledTableCell align="center"> Description </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.length > 0 && productList.map((item) => (
                <StyledTableRow key={item.id}>
                    <StyledTableCell align="left">{item.id}</StyledTableCell> 
                    <StyledTableCell align="left">
                        <img
                            className="w-20"
                        src={item.img}
                        alt=""
                        />
                    </StyledTableCell>

                    <StyledTableCell align="left">{item.name}</StyledTableCell>
                    <StyledTableCell align="left">{item.price}</StyledTableCell>
                    <StyledTableCell align="left">{item.size}</StyledTableCell>
                    <StyledTableCell align="left">{item.category}</StyledTableCell>
                    <StyledTableCell className="w-1/2"
                title={item.description}
                align="left">
                <div className="flex items-center">
                  <div className="truncate w-[300px]">{item.description}</div>
                </div>
              </StyledTableCell>
                    <StyledTableCell align="right">
                            <div className="flex gap-3">
                                <div className="w-10 h-10 bg-red-500 rounded flex justify-center items-center"> 
                                <EditIcon className="text-white" />
                            </div>
                            <div onClick={()=> handleDelete(item.id)} 
                            className="w-10 h-10 bg-red-700 rounded flex justify-center items-center"> 
                            <DeleteIcon className="text-white" />
                            </div>
                        </div>
                    </StyledTableCell>
                </StyledTableRow>
                ))}
      </TableBody>
    </Table>
    </TableContainer >
  );
}
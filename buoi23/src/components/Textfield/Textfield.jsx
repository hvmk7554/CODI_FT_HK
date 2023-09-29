
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// eslint-disable-next-line react/prop-types
function TextFields({name,type="text"}) {
return (
<div>
<p className="font-semibold text-xs mb-2">{name}</p>
<Box
component="form"
sx={{
"& .MuiTextField-root": {
width: "300px",
height: "40px",
},
}}
noValidate
autoComplete="off">

<TextField size="small" placeholder={name} variant="outlined" type={type} />
</Box>
</div>
);
}

export default TextFields;
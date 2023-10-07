import MuiButton from "@mui/material/Button";

export default function Button({ name, label, className, handleOnClick }) {
  return (
    <MuiButton
      key={name}
      className={className}
      onClick={() => {
        handleOnClick(true);
      }}
      variant="contained"
    >
      {label}
    </MuiButton>
  );
}

import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "./form/CustomButton";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className=" w-full">
      <div className="md:hidden bg-DarkBlue px-5 md:px-16 py-4">
        <MenuIcon sx={{ color: "white", fontSize: 30 }} />
      </div>

      <div
        className={`hidden md:flex justify-between bg-DarkBlue text-white font-sans text-sm px-16 py-4`}
      >
        <div className="w-50">
          <img alt="logo" src="/Assets/Images/logo.png" />
        </div>

        <div className="grid grid-flow-col items-center gap-x-5 text-DarkGray">
          <CustomButton className="text-white">Home</CustomButton>
          <CustomButton>Browse Events</CustomButton>
          <CustomButton>Support</CustomButton>
          <CustomButton>About Us</CustomButton>
        </div>

        <div className="flex gap-x-3 justify-center items-center">
          <CustomButton>Sign Up</CustomButton>
          <CustomButton className="btn">LOGIN</CustomButton>
        </div>
      </div>
    </div>
  );
}

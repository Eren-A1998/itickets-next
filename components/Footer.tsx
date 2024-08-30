import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import BorderLine from './BorderLine';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="px-5 md:px-16 bg-DarkBlue w-full ">
      <div className="text-grey text-sm py-10 grid grid-cols-5 gap-y-10 gap-x-5">
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">
          <p className="mb-3 text-white">EVENTS</p>

          <div className="">
            <button className="mb-1.5 block">Browse Events</button>
            <button className="mb-1.5 block">Upcoming Events</button>
            <button className="mb-1.5 block">My Tickets</button>
          </div>
        </div>

        <div className="col-span-5 sm:col-span-2 lg:col-span-1">
          <p className="mb-3 text-white">EVENTS</p>

          <div className="">
            <button className="mb-1.5 block">Browse Events</button>
            <button className="mb-1.5 block">Upcoming Events</button>
            <button className="mb-1.5 block">My Tickets</button>
            <button className="mb-1.5 block">Upcoming Events</button>
            <button className="mb-1.5 block">My Tickets</button>
          </div>
        </div>
        {/* <BorderLine className="inline md:hidden my-3" /> */}
        <div className="col-span-5 sm:col-span-2 lg:col-span-1">
          <p className="mb-3 text-white">CONNECT</p>
          <div className="">
            <button className="mb-1.5 block">
              <FacebookIcon /> Facebook
            </button>
            <button className="mb-1.5 block">
              {" "}
              <InstagramIcon className="pr-1" /> Instagram
            </button>
            <button className="mb-1.5 block">
              <TwitterIcon className="pr-1" /> Twitter
            </button>
            <button className="mb-1.5 block">
              <YouTubeIcon className="pr-1" /> Youtube
            </button>
          </div>
        </div>

        <div className="justify-center col-span-5 sm:col-span-3  lg:col-span-2">
          <p className="mb-3 text-white">JOIN OUR NEWSLETTER</p>

          <div className=" flex justify-between items-center bg-DarkBlue border border-DarkerGrey py-1.5 px-2 mb-3 max-w-xs">
            <input
              className="bg-DarkBlue w-full outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <EastOutlinedIcon sx={{ fontSize: 20 }} />
          </div>

          <p className="mb-3 text-white">Download our app</p>
          <div className="flex gap-x-2">
            <div>
              <img alt="app store" src="/Assets/Images/AppStore.png" />
            </div>
            <div>
              <img alt="google play" src="/Assets/Images/GooglePlay.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={2}></Grid>
          <Grid item xs={6} md={2}></Grid>

          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={5} md={4}></Grid>
        </Grid> */}

      {/* <BorderLine className="bg-DarkerGrey my-3" /> */}

      <div className="flex flex-col md:flex-row items-center justify-between text-grey gap-3  pb-5">
        <div className="flex items-center text-sm gap-x-2">
          <div>
            <img alt="logo" src="/Assets/Images/logo.png" />
          </div>
          <p>© 2021 iticket. All rights reserved.</p>
        </div>

        <div className="flex gap-x-2">
          <img className="h-3" src={`/assets/images/master.png`} alt="master" />
          <img className="h-3" src="/assets/images/paypal.png" alt="paypal" />
          <img className="h-3" src="/assets/images/visa.png" alt="visa" />
        </div>
      </div>
    </div>
  );
}

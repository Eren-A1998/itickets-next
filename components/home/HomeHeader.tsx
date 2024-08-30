import CustomButton from "@/components/form/CustomButton";

type Props = {};

export default function HomeHeader({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-x-2 bg-DarkBlue text-white relative p-16">
      <div className="mb-10 mt-2 order-2 md:order-1">
        <p className="font-bold text-2xl mb-6 gradText">
          Let’s find what you need!
        </p>
        <p className="font-bold font-mono text-2xl md:text-6xl mb-10">
          Best Place to Find everything You need
        </p>
        {/* <div className='flex justify-end'>
                    <img className='h-5' alt='img2' src='/Assets/Images/twolines.png' />
                </div> */}
        <p className="text-grey text-xs">
          iticket is an online shopping platform that helps you find all you
          need in one place.
        </p>
        <div className="h-24"></div>
      </div>

      <div className="flex justify-end order-1 md:order-2">
        <img
          className="shadow-custom lg:w-2/3 w-full h-44 md:h-auto md:max-w-lg"
          alt="img1"
          src="/assets/images/home-header.jpg"
        />
      </div>

      <div className="flex justify-between gap-x-3 bg-transparentGrey bg-opacity-50 absolute bottom-24 right-16 md:right-56 left-16  py-6 px-4 ">
        <div className="flex items-center gap-x-3 w-full">
          <img
            className="w-5 h-5"
            alt="search"
            src="/Assets/Icons/search.svg"
          />
          <input
            className="bg-transparent outline-none w-5/6"
            placeholder="Search by category, Or product..."
          />
        </div>
        <CustomButton className="btn">search</CustomButton>
      </div>
    </div>
  );
}

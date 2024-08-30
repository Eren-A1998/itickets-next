import Offline from "@/appIcons/offline.svg";
import { useRouter } from "next/navigation";
import CustomButton from "./form/CustomButton";

type Props = {};

export default function OfflineComponent({}: Props) {
  const router = useRouter();
  return (
    <div
      className={`text-salla-primary-text flex flex-col justify-center items-center gap-y-10 min-h-screen py-10 section_padding ${containerClass}`}
    >
      <div className="w-full max-w-xs h-96">
        <Offline className="w-full h-full" />
      </div>
      <div className="space-y-2 text-center !max-w-xs">
        <p className="font-Almarai_Bold">no internet connection</p>
        <p className="text-salla-grey2">please check your network</p>
      </div>
      <CustomButton
        onClick={() => {
          router.refresh();
        }}
        className="!max-w-xs primary_btn"
      >
        try again
      </CustomButton>
    </div>
  );
}

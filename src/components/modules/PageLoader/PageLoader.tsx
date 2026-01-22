import { Backdrop } from "@/components/ui/Backdrop/Backdrop";
import MainLoader from "@/components/ui/MainLoader/MainLoader";

function PageLoader() {
  return (
    <Backdrop>
      <MainLoader />
    </Backdrop>
  );
}

export default PageLoader;

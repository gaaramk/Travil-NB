import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

const MobileNav = ({
  showNav,
  closeNav,
}: {
  showNav: boolean;
  closeNav: () => void;
}) => {
  const navOpen = () => {
    if (showNav) {
      return "translate-x-0";
    } else {
      return "translate-x-[-100%]";
    }
  };

  return (
    <div className={`mobileNav`}>
      {/* overlay */}
      <div className={`overlay ${navOpen()}`}></div>

      {/* links */}
      <div className={`mobileLinks ${navOpen()}`}>
        {NavLinks.map((link) => {
          return (
            <>
              <Link href={link.url} key={link.id}>
                <p className="mobileLinkText">{link.lable}</p>
              </Link>
            </>
          );
        })}

        {/* close btn */}
        <IoCloseCircleOutline className="closeBtn" onClick={closeNav} />
      </div>
    </div>
  );
};

export default MobileNav;

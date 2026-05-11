import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import FooterLinks from "./shared/FooterLinks";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid place-items-center text-center grid-cols-1 md:grid-cols-3 md:text-left gap-4">
        <FooterLinks title="Resources" links={resourcesLinks} />
        <FooterLinks title="Platform" links={platformLinks} />
        <FooterLinks title="Community" links={communityLinks} />
      </div>
    </footer>
  );
};

export default Footer;

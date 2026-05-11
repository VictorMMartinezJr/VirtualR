interface FooterLink {
  href: string;
  text: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-md font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

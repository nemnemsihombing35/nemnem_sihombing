import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/nemnemsihombing35" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nemnem-sihombing/" },
    { icon: <FaWhatsapp />, path: "https://wa.link/jr9pop" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/nemnem_sihombing/" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;

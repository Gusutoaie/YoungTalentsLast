
interface Props { }


const Footer = (props: Props) => {
    return (
        <footer>
            <p>Copyright © {new Date().getFullYear()} Young Talents</p>
        </footer>
    );
};

export default Footer;
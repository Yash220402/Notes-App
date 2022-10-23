const date = new Date();
const year = date.getFullYear();

const copyright = <p>Copyright &copy; {year}</p>;

function Footer() {
    return (
        <footer>
            {copyright}
        </footer>
    );
}

export default Footer;
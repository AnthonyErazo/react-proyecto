import './LinksNavbar.css';
import PropTypes from 'prop-types';

const LinksNavbar = ({text,link}) => {
    return (
        <li><a href={link}>{text}</a></li>
    )
}
LinksNavbar.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default LinksNavbar
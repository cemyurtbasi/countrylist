
import { memo } from "react";
import { Link } from "react-router-dom";
import './css/linkButton.scss'
import { MdKeyboardBackspace } from 'react-icons/md'

const LinkButton = memo(({ url, text }) => {
    return (
        <Link to={url} className="linkButton">
            <MdKeyboardBackspace className="linkButton__icon" />
            <span className="linkButton__text">{text}</span>
        </Link>
    );
});

export default LinkButton;

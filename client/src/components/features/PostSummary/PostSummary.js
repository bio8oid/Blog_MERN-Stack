import React from 'react';
import { PropTypes } from 'prop-types';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './PostSummary.scss';

const cutText = ( content, maxLength ) => {
return content.length < 1 ? "Error" :
    content.length <= maxLength ? content :
        content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
}

const PostSummary = ({ id, title, content }) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 250)}</HtmlBox>  
        <Button variant="primary">
            Read more
    </Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};

export default PostSummary;
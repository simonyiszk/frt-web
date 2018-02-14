import React from "react";
import styled from "styled-components";

const PostContaier = styled.div`
  width: 65%;
  border-radius: 7px;
  color: white;
  background-color: #C8102E;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`

const Image = styled.img`
  border-radius: 7px 7px 0px 0px;
  flex: 2;
  object-fit: cover;
`

const PostText = styled.div`
  margin: 20px;
  flex: 1;
`

const DateP = styled.p`
  float: right;
`

const Post = ({imgUrl, title, content, date}) => (
  <PostContaier>
    <Image src={imgUrl} />
    <PostText>
      {title && <h3>{title}</h3>}
      <p>{content}</p>
      {date && <DateP>{date}</DateP>}
    </PostText>
  </PostContaier>
);

export default Post;
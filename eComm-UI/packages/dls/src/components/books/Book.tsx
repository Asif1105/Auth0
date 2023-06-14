import React from 'react';
import styled from '@emotion/styled';

export type BookType = {
  content?: string;
  width?: string;
  customMargin?: string;
}

const CustomBookButton = styled.div<BookType>`
  width: ${(props: BookType) => props.width ?? '200px'};
  height: 250px;
  background: #b3af33;
  margin: ${(props: BookType) => props.customMargin ?? '10px auto'};
  box-shadow: 4px 9px 24px -6px black;
  position: relative;
  &::before {
    content: ${(props: BookType) => `'${props.content}'`};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}`;

export const Book = ({ content, width, customMargin }: BookType) => {
  return (
    <CustomBookButton content={content} width={width} customMargin={customMargin} />
  );
};

export default Book;

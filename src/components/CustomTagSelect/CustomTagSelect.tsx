import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { styled } from 'styled-components';
import { GlobalFont } from '../GlobalFont/GlobalFont';

const { Option } = Select;

const CustomTagSelectP = styled.p`
      position: relative;
      font-family: "Sedgwick Ave Display", sans-serif;
      font-size: 35px;
      top:50px;
      left:100px;
      color:white;
`

export const CustomTagSelect: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClose = (removedTag: string) => {
    const newTags = selectedTags.filter((tag) => tag !== removedTag);
    setSelectedTags(newTags);
  };

  return (
    <div>
      <GlobalFont />
      <CustomTagSelectP>Skills</CustomTagSelectP>
      <Select
        mode="tags"
        style={{ width: '50%', fontSize: '20px', marginLeft: '100px', marginTop: '50px' }}
        placeholder="Skills"
        onChange={(value: string[]) => setSelectedTags(value)}
        value={selectedTags}
      >
        <Option key="Vue">Vue</Option>
        <Option key="Typescript">Typescript</Option>
        <Option key="React">React</Option>
        <Option key="Sass">Sass/Scss</Option>
      </Select>
      <br />
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '100px' }}>
        {selectedTags.map((tag) => (
          <Tag
            key={tag}
            onClose={() => handleTagClose(tag)}
            style={{ marginBottom: '8px', marginRight: '8px', fontSize: '20px' }}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};



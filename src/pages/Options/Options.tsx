import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons';

const Options: React.FC = () => {
  return (
    <Box
      component="a"
      href="https://shrub-music-16e.notion.site/Help-Center-0f58b7fef9af40baa05d305908c3ee1e"
      target="_blank"
    >
      <Flex gap="sm">
        <IconQuestionMark />
        <Text>Click here to learn how to use it</Text>
      </Flex>
    </Box>
  );
};

export default Options;

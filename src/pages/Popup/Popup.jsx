import React, { useState } from 'react';
import {
  Blockquote,
  Image,
  SimpleGrid,
  Center,
  Flex,
  Box,
} from '@mantine/core';
import { IconFlame } from '@tabler/icons';

const Popup = () => {
  const initialBatchImages = [
    // must
    {
      id: 1,
      name: 'must',
      imageSrc: 'https://img.shields.io/badge/review-must-red.svg',
      alt: '実装者に対して必須で直して欲しい時につけるバッチ',
      copyTarget: '![badge](https://img.shields.io/badge/review-must-red.svg)',
      isClicked: false,
    },
    // in my opinion
    {
      id: 2,
      name: 'imo',
      imageSrc: 'https://img.shields.io/badge/review-imo-orange.svg',
      alt: '実装者に対して個人的に直して欲しい時につけるバッチ',
      copyTarget:
        '![badge](https://img.shields.io/badge/review-imo-orange.svg)',
      isClicked: false,
    },
    // ask
    {
      id: 3,
      name: 'ask',
      imageSrc: 'https://img.shields.io/badge/review-ask-blue.svg',
      alt: '実装者に対して質問したい時につけるバッチ',
      copyTarget: '![badge](https://img.shields.io/badge/review-ask-blue.svg)',
      isClicked: false,
    },
    // nits
    {
      id: 4,
      name: 'nits',
      imageSrc: 'https://img.shields.io/badge/review-nits-green.svg',
      alt: '実装者に対して細かな指摘をしたいときにつけるバッチ',
      copyTarget:
        '![badge](https://img.shields.io/badge/review-nits-green.svg)',
      isClicked: false,
    },
    // learn
    {
      id: 5,
      name: 'learn',
      imageSrc: 'https://img.shields.io/badge/review-learn-success',
      alt: '実装者から学びを得た時につけるバッチ',
      copyTarget:
        '![badge](https://img.shields.io/badge/review-learn-success.svg)',
      isClicked: false,
    },
    // nice
    {
      id: 6,
      name: 'nice',
      imageSrc: 'https://img.shields.io/badge/review-nice-success',
      alt: '実装者の良い実装を見た時につけるバッチ',
      copyTarget:
        '![badge](https://img.shields.io/badge/review-nice-success.svg)',
      isClicked: false,
    },
  ];

  const [batches, setBatches] = useState(initialBatchImages);

  const clickCopyImageUrlToClipboard = (e, text, targetId) => {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        const clickedBatch = batches.map((batch) => {
          batch.isClicked = batch.id === targetId;
          return { ...batch };
        });
        setBatches(clickedBatch);
      })
      .catch((error) => {
        console.log(error);
        setBatches(initialBatchImages);
      });
  };

  return (
    <div className="App">
      <Center>
        <Flex gap="md" direction="column" align="center">
          <Blockquote
            cite="– 'reviewer' and 'reviewee' should REVIEW with gratitude!"
            icon={<IconFlame size={24} />}
          >
            We thank each other
          </Blockquote>
          <SimpleGrid cols={2} pt={10}>
            {batches.map((batch) =>
              batch.isClicked ? (
                <Image
                  radius="sm"
                  width={100}
                  height={20}
                  src={`https://img.shields.io/badge/copy-${batch.name}-inactive`}
                  alt="Copy 完了用のイメージ"
                ></Image>
              ) : (
                <Box
                  id={batch.id}
                  component="div"
                  onClick={(e) =>
                    clickCopyImageUrlToClipboard(e, batch.copyTarget, batch.id)
                  }
                >
                  <Image
                    radius="sm"
                    width={100}
                    height={20}
                    src={batch.imageSrc}
                    alt={batch.alt}
                  />
                </Box>
              )
            )}
          </SimpleGrid>
        </Flex>
      </Center>
    </div>
  );
};

export default Popup;

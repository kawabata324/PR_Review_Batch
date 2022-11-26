import React, { useState } from 'react';
import {
  Blockquote,
  Image,
  SimpleGrid,
  Center,
  Flex,
  Box,
  Text,
  Button,
} from '@mantine/core';
import { IconFlame, IconQuestionMark, IconConfetti } from '@tabler/icons';

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

  const LGTM_IMAGE = [
    '![LGTM](https://image.lgtmoon.dev/123319)',
    '![LGTM](https://image.lgtmoon.dev/117495)',
    '![LGTM](https://image.lgtmoon.dev/142677)',
    '![LGTM](https://image.lgtmoon.dev/18220)',
    '![LGTM](https://image.lgtmoon.dev/36218)',
    '![LGTM](https://image.lgtmoon.dev/77313)',
    '![LGTM](https://image.lgtmoon.dev/79249)',
    '![LGTM](https://image.lgtmoon.dev/177216)',
  ];

  const [batches, setBatches] = useState(initialBatchImages);
  const [isClickedManual, setClickedManual] = useState(false);
  const [isClickedRandom, setClickedRandom] = useState(false);

  const clickCopyImageUrlToClipboard = (e, text, targetId) => {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        setClickedRandom(false);
        setClickedManual(false);

        const clickedBatch = batches.map((batch) => {
          batch.isClicked = batch.id === targetId;
          return { ...batch };
        });
        setBatches(clickedBatch);
      })
      .catch((error) => {
        console.log(error);
        setBatches(initialBatchImages);
        setClickedRandom(false);
        setClickedManual(false);
      });
  };

  const clickCopyManualLgtmImageToClipboard = () => {
    const lgtmImage = LGTM_IMAGE[Math.floor(Math.random() * LGTM_IMAGE.length)];

    return navigator.clipboard
      .writeText(lgtmImage)
      .then(() => {
        setBatches(initialBatchImages);
        setClickedRandom(false);

        setClickedManual(true);
      })
      .catch((error) => {
        console.log(error);
        setClickedManual(false);
      });
  };

  const clickCopyRandomLgtmImageToClipboard = () => {
    const max = 40000;
    const min = 30000;
    const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;

    return navigator.clipboard
      .writeText(`![LGTM](https://image.lgtmoon.dev/${randomNum})`)
      .then(() => {
        setBatches(initialBatchImages);
        setClickedManual(false);

        setClickedRandom(true);
      })
      .catch((error) => {
        console.log(error);
        setClickedRandom(false);
      });
  };

  return (
    <div className="App">
      <Center>
        <Flex gap="sm" direction="column" align="center">
          <Blockquote
            cite="– 'reviewer' and 'reviewee' should REVIEW with gratitude!"
            icon={<IconFlame size={24} />}
          >
            We thank each other
          </Blockquote>
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
          <SimpleGrid cols={2}>
            {batches.map((batch) =>
              batch.isClicked ? (
                <Image
                  radius="sm"
                  width={100}
                  height={20}
                  src={`https://img.shields.io/badge/copied-${batch.name}-inactive`}
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

          <Flex gap="sm">
            <Box>
              <Button
                leftIcon={<IconConfetti size={14} />}
                variant={isClickedManual ? 'outline' : 'filled'}
                onClick={clickCopyManualLgtmImageToClipboard}
              >
                {isClickedManual ? 'Copied LGTM' : 'Manual for LGTM'}
              </Button>
            </Box>

            <Box>
              <Button
                leftIcon={<IconQuestionMark size={14} />}
                variant={isClickedRandom ? 'outline' : 'filled'}
                onClick={clickCopyRandomLgtmImageToClipboard}
              >
                {isClickedRandom ? 'Copied LGTM' : 'Random for LGTM'}
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </div>
  );
};

export default Popup;

import React from 'react';
import {Blockquote, Image, SimpleGrid, Center, Flex} from '@mantine/core';
import {IconFlame} from '@tabler/icons';

const Popup = () => {
    return (
        <div className="App">
            <Center>
                <Flex
                    gap="md"
                    direction="column"
                    align="center"
                >
                    <Blockquote
                        cite="– 'reviewer' and 'reviewee' should REVIEW with gratitude!"
                        icon={<IconFlame size={24}/>}
                    >
                        We thank each other
                    </Blockquote>
                    <SimpleGrid cols={2} pt={10}>
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-must-red.svg"
                            alt="実装者に対して必須で直して欲しい時につけるバッチ"
                            width={100}
                            height={20}
                        />
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-imo-orange.svg"
                            alt="実装者に対して個人的に直して欲しい時につけるバッチ"
                            width={100}
                            height={20}
                        />
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-ask-blue.svg"
                            alt="実装者に対して質問したい時につけるバッチ"
                            width={100}
                            height={20}
                        />
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-nits-green.svg"
                            alt="実装者に対して細かな指摘をしたいときにつけるバッチ"
                            width={100}
                            height={20}
                        />
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-learn-success"
                            alt="実装者から学びに実装を見た時につけるバッチ"
                            width={100}
                            height={20}
                        />
                        <Image
                            radius="sm"
                            src="https://img.shields.io/badge/review-nice-success"
                            alt="実装者の良い実装を見た時につけるバッチ"
                            width={100}
                            height={20}
                        />
                    </SimpleGrid>
                </Flex>
            </Center>
        </div>
    );
};

export default Popup;

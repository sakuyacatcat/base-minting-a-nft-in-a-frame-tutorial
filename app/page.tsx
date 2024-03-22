import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time',
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `https://base-minting-a-nft-in-a-frame-tutorial.vercel.app/api/tx`,
      postUrl: `https://base-minting-a-nft-in-a-frame-tutorial.vercel.app/api/tx-success`,
    },
  ],
  image: {
    src: `https://base-minting-a-nft-in-a-frame-tutorial.vercel.app/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `https://base-minting-a-nft-in-a-frame-tutorial.vercel.app/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`https://base-minting-a-nft-in-a-frame-tutorial.vercel.app/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}

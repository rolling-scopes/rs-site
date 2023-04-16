import { HowItWorks } from 'components/MerchGeneral/Merch/HowItWorks';
import { Catalog } from '@/components/MerchGeneral/Merch/Catalog';
import { usePreviewSubscription } from '@/lib/sanity';
import queries from '@/lib/queries';
import { getClient, overlayDrafts } from '@/lib/sanity.server';
import { MerchGeneralT } from '@/types';
import { GeneralInfo } from '@/components/MerchGeneral/Merch/GeneralInfo';
import { GetStaticProps } from 'next';

interface IndexProps {
  preview: boolean;
  merchGeneral: MerchGeneralT[];
}

export default function Index({
  preview,
  merchGeneral: initialMerchGeneral
}: IndexProps) {
  const { data: allMerchGeneral } = usePreviewSubscription(
    queries.merchGeneral,
    {
      initialData: initialMerchGeneral,
      enabled: preview
    }
  );
  return (
    <>
      <GeneralInfo merch={allMerchGeneral[0]?.general_info} />
      <HowItWorks howItWorksImages={allMerchGeneral[0]?.howItWorksImages} howItWorksBlock={allMerchGeneral[0]?.howItWorksBlock} />
      <Catalog />
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({
  preview = false
}) => {
  const merchGeneral = overlayDrafts(
    await getClient(preview).fetch(queries.merchGeneral)
  );
  return {
    props: { preview, merchGeneral },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60
  };
};

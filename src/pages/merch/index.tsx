import { HowItWorks } from 'components/MerchGeneral/Merch/HowItWorks';
import { Catalog } from '@/components/MerchGeneral/Merch/Catalog';
import { usePreviewSubscription } from '@/lib/sanity';
import queries from '@/lib/queries';
import { getClient, overlayDrafts } from '@/lib/sanity.server';
import { MerchGeneralT } from '@/types';
import { GeneralInfo } from '@/components/MerchGeneral/Merch/GeneralInfo';

export default function Index({ preview, merchGeneral: initialMerchGeneral }) {
  const { data: allMerchGeneral } = usePreviewSubscription<MerchGeneralT[]>(
    queries.merchGeneral,
    {
      initialData: initialMerchGeneral,
      enabled: preview
    }
  );

  return (
    <>
      <GeneralInfo merch={allMerchGeneral[0]?.general_info} />
      <HowItWorks />
      <Catalog />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const merchGeneral = overlayDrafts(
    await getClient(preview).fetch(queries.merchGeneral)
  );
  return {
    props: {
      merchGeneral
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60
  };
}

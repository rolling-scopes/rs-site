import { usePreviewSubscription } from '../lib/sanity';
import { getClient, overlayDrafts } from '../lib/sanity.server';
import { socialNetworksListQuery } from '../lib/queries/social-network';
import SocialNetworking from '../components/SocialNetworking';
import { SocialNetworkingListT } from '../types';

export default function Index({
  socialNetworksList: initialSocialNetworksList,
  preview
}) {
  const { data: allSocialList } = usePreviewSubscription<SocialNetworkingListT>(
    socialNetworksListQuery,
    {
      initialData: initialSocialNetworksList,
      enabled: preview
    }
  );

  return (
    <>
      <SocialNetworking socialList={allSocialList} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const socialNetworksList = overlayDrafts(
    await getClient(preview).fetch(socialNetworksListQuery)
  );

  return {
    props: { socialNetworksList, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60
  };
}

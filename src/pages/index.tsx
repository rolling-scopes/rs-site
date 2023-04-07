import { usePreviewSubscription } from '@/lib/sanity';
import { getClient, overlayDrafts } from '@/lib/sanity.server';
import queries from '@/lib/queries';
import SocialMedia from '@/components/SocialMedia';
import DonationV2 from '@/components/DonationV2';
import DonationV1 from '@/components/DonationV1';
import Speakers from '@/components/Speakers';
import Community from '@/components/Community';
import Partners from '@/components/Partners';
import { MerchGeneral } from '@/components/MerchGeneral';
import { FAQ } from '@/components/FAQ';
import { Accordion } from '@/components/Accordion';
import AlumniCompanies from '@/components/AlumniCompanies';

import { getFAQMarkdowns } from 'services';

import {
  CommunityT,
  DonationV1T,
  DonationV2T,
  MerchGeneralT,
  PartnersT,
  SocialMediaItemT,
  SocialNetworkingListT,
  SpeakersT,
  AlumniCompaniesFetchT
} from 'types';
import Header from '@/components/Header/header';

export default function Index({
  socialMedia: initialSocialMedia,
  donationV1: initialDonationV1,
  donationV2: initialDonationV2,
  speakers: initialSpeakers,
  community: initialCommunity,
  partners: initialPartners,
  merchGeneral: initialMerchGeneral,
  alumniCompanies: initialAlumniCompanies,
  preview,
  faqMarkdowns
}) {
  const { data: allMerchGeneral } = usePreviewSubscription<MerchGeneralT[]>(
    queries.merchGeneral,
    {
      initialData: initialMerchGeneral,
      enabled: preview
    }
  );
  const { data: allPartners } = usePreviewSubscription<PartnersT[]>(
    queries.donationV1,
    {
      initialData: initialPartners,
      enabled: preview
    }
  );
  const { data: allDonationV1 } = usePreviewSubscription<DonationV1T[]>(
    queries.donationV1,
    {
      initialData: initialDonationV1,
      enabled: preview
    }
  );
  const { data: allDonationV2 } = usePreviewSubscription<DonationV2T[]>(
    queries.donationV1,
    {
      initialData: initialDonationV2,
      enabled: preview
    }
  );
  const { data: allCommunity } = usePreviewSubscription<CommunityT[]>(
    queries.donationV1,
    {
      initialData: initialCommunity,
      enabled: preview
    }
  );
  const { data: allSocialList } = usePreviewSubscription<
    SocialNetworkingListT[]
  >(queries.socialNetworksList, {
    initialData: initialSocialMedia,
    enabled: preview
  });
  const { data: allSpeakers } = usePreviewSubscription<SpeakersT>(
    queries.speakers,
    {
      initialData: initialSpeakers,
      enabled: preview
    }
  );
  const { data: alumniCompanies } =
    usePreviewSubscription<AlumniCompaniesFetchT>(queries.alumniCompanies, {
      initialData: initialAlumniCompanies,
      enabled: preview
    });

  return (
    <>
      <Header logo="circle" />
      <SocialMedia socialList={allSocialList[0].social_media_list} />
      <DonationV2 donation={allDonationV2[0]} />
      <DonationV1 donation={allDonationV1[0]} />
      <Community community={allCommunity[0]} />
      <Speakers speaker={allSpeakers[0]} />
      <MerchGeneral merch={allMerchGeneral[0]} />
      <Partners partners={allPartners[0]} />
      <FAQ link="/">
        <Accordion posts={faqMarkdowns || []} limit={5} />
      </FAQ>
      <AlumniCompanies companies={alumniCompanies[0].companies} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const socialMedia: Array<{
    _id;
    social_media_list: Array<SocialMediaItemT>;
  }> = overlayDrafts(await getClient(preview).fetch(queries.socialMedia));
  const donationV1 = overlayDrafts(
    await getClient(preview).fetch(queries.donationV1)
  );
  const donationV2 = overlayDrafts(
    await getClient(preview).fetch(queries.donationV2)
  );
  const speakers = overlayDrafts(
    await getClient(preview).fetch(queries.speakers)
  );
  const community = overlayDrafts(
    await getClient(preview).fetch(queries.community)
  );
  const partners = overlayDrafts(
    await getClient(preview).fetch(queries.partners)
  );
  const merchGeneral = overlayDrafts(
    await getClient(preview).fetch(queries.merchGeneral)
  );

  const alumniCompanies: Array<AlumniCompaniesFetchT> = overlayDrafts(
    await getClient(preview).fetch(queries.alumniCompanies)
  );

  const faqMarkdowns = await getFAQMarkdowns();

  return {
    props: {
      socialMedia,
      donationV1,
      donationV2,
      speakers,
      community,
      partners,
      merchGeneral,
      alumniCompanies,
      preview,
      faqMarkdowns
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60
  };
}

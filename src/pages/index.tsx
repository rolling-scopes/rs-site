import type { GetStaticProps } from 'next';
import { usePreviewSubscription } from '@/lib/sanity';
import { getClient, overlayDrafts } from '@/lib/sanity.server';
import queries from '@/lib/queries';
import { SocialMedia } from '@/components/SocialMedia';
import { DonationV2 } from '@/components/DonationV2';
import { DonationV1 } from '@/components/DonationV1';
import { Speakers } from '@/components/Speakers';
import { Community } from '@/components/Community';
import { Partners } from '@/components/Partners';
import { FAQ } from '@/components/FAQ';
import { Accordion } from '@/components/Accordion';
import { AlumniCompanies } from '@/components/AlumniCompanies';
import { GalleryBlock } from '@/components/GalleryBlock';
import { School } from '@/components/School';
import { MerchGeneral } from '@/components/MerchGeneral';
import { Header } from '@/components/Header';
import { Statistics } from '@/components/Statistics';
import { getFAQMarkdowns } from 'services';

import {
  CommunityT,
  DonationV1T,
  DonationV2T,
  MerchGeneralT,
  PartnersT,
  SocialMediaItemT,
  SpeakersT,
  AlumniCompaniesFetchT,
  GalleryBlockFetchT,
  CourseCard
} from 'types';

type IndexProps = any;

export default function Index({
  socialMedia: initialSocialMedia,
  donationV1: initialDonationV1,
  donationV2: initialDonationV2,
  speakers: initialSpeakers,
  community: initialCommunity,
  partners: initialPartners,
  merchGeneral: initialMerchGeneral,
  alumniCompanies: initialAlumniCompanies,
  galleryBlock: initialGalleryBlock,
  courses: initialCourses,
  locations,
  preview,
  faqMarkdowns
}: IndexProps) {
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
  // const { data: allSocialList } = usePreviewSubscription<
  //   SocialNetworkingListT[]
  // >(queries.socialNetworksList, {
  //   initialData: initialSocialMedia,
  //   enabled: preview
  // });
  const { data: allSpeakers } = usePreviewSubscription<SpeakersT[]>(
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

  const { data: galleryBlock } = usePreviewSubscription(queries.galleryBlock, {
    initialData: initialGalleryBlock,
    enabled: preview
  });
  const { data: courses } = usePreviewSubscription<CourseCard[]>(
    queries.courses,
    {
      initialData: initialCourses,
      enabled: preview
    }
  );
  return (
    <>
      <Header logo="circle" />
      <Statistics locations={locations} />
      <SocialMedia socialList={initialSocialMedia[0].social_media_list} />
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
      <GalleryBlock data={galleryBlock[0]} />
      <School courses={courses} limit={4} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({
  preview = false
}) => {
  const socialMedia: Array<{
    _id: string;
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
  const courses = overlayDrafts(
    await getClient(preview).fetch(queries.courses)
  );

  const alumniCompanies: Array<AlumniCompaniesFetchT> = overlayDrafts(
    await getClient(preview).fetch(queries.alumniCompanies)
  );

  const galleryBlock: Array<GalleryBlockFetchT> = overlayDrafts(
    await getClient(preview).fetch(queries.galleryBlock)
  );

  const faqMarkdowns = await getFAQMarkdowns();

  const locations = [
    { label: 'Lithuania', lat: 54.687222, lng: 25.28 }, // Vilnius
    { label: 'Latvia', lat: 56.948889, lng: 24.106389 }, // Riga
    { label: 'Poland', lat: 52.23, lng: 21.011111 }, // Warsaw
    { label: 'Belarus', lat: 53.9, lng: 27.566667 }, // Minsk
    { label: 'Turkey', lat: 41.013611, lng: 28.955 }, // Istanbul
    { label: 'Georgia', lat: 41.7225, lng: 44.7925 }, // Tbilisi
    { label: 'Kazakhstan', lat: 51.147222, lng: 71.422222 }, // Astana
    { label: 'Kyrgyzstan', lat: 42.874722, lng: 74.612222 }, // Bishkek
    { label: 'Tajikistan', lat: 38.536667, lng: 68.78 }, // Dushanbe
    { label: 'Montenegro', lat: 42.441286, lng: 19.262892 } // Podgorica
  ];

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
      galleryBlock,
      preview,
      faqMarkdowns,
      courses,
      locations
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60
  };
};

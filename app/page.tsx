import Header from "@/components/Header";
import Identity from "@/components/Identity";
import WorkSection from "@/components/WorkSection";
import OngoingContent from "@/components/OngoingContent";
import TrustedBySection from "@/components/TrustedBySection";
import WorkWithMe from "@/components/WorkWithMe";
import Footer from "@/components/Footer";
import { getWorkItems, getPartners, getSiteSettings } from "@/lib/sanity/queries";

// Revalidate frequently so publishing a change in the Studio shows up on
// the live site without a full redeploy.
export const revalidate = 60;

export default async function Home() {
  const [workItems, partners, settings] = await Promise.all([
    getWorkItems(),
    getPartners(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Header settings={settings} />
      <main className="site-container flex-1">
        <Identity />
        <WorkSection workItems={workItems} />
        <OngoingContent settings={settings} />
        <TrustedBySection partners={partners} />
        <WorkWithMe settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  );
}

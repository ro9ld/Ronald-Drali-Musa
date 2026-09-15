import Header from "@/components/Header";
import Identity from "@/components/Identity";
import WorkSection from "@/components/WorkSection";
import OngoingContent from "@/components/OngoingContent";
import TrustedBySection from "@/components/TrustedBySection";
import WorkWithMe from "@/components/WorkWithMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1200px] flex-1 lg:max-w-[1440px] xl:max-w-[1680px]">
        <Identity />
        <WorkSection />
        <OngoingContent />
        <TrustedBySection />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  );
}

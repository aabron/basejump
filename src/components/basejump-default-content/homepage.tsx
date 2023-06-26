/* istanbul ignore file */
import Logo from "@/components/basejump-default-content/logo";
import ContentMeta from "@/components/content-pages/content-meta";
import HowItWorksSection from "../content-pages/content-howitworks";
import ReviewStack from "../content-pages/content-user-reviews";

const BasejumpHomepage = () => (
  <div className="max-w-screen-lg mx-auto bg-base-100">
    <ContentMeta
      title="VidSplice - Marketing video creation through TypeScript"
      description="An opinionated short cut for launching Supabase apps using NextJS"
      socialImage={`/api/og?title=Basejump`}
    />
    <div className="pt-8 pb-24 md:pt-36 md:pb-48">
      <Logo size="lg" className="mx-auto" />
      <h2 className="h2 text-center my-2">
        Create Marketing Videos in {" "}
        <span className="text-accent">Record</span>
        <span className="text-accent"> Time</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-y-8 lg:gap-y-16">
      <div>
        <HowItWorksSection />
      </div>
      <div className="max-w-screen-md mx-auto">
        <ReviewStack />
      </div>
    </div>
  </div>
);

export default BasejumpHomepage;

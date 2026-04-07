import Hero from "@/components/Hero";
import RealityCheck from "@/components/RealityCheck";
import AgeAnalytics from "@/components/AgeAnalytics";
import TrophyMode from "@/components/TrophyMode";
import MemeGrid from "@/components/MemeGrid";
import CopiumFeed from "@/components/CopiumFeed";
import RoastReel from "@/components/RoastReel";
import TwoYearBan from "@/components/TwoYearBan";
import Final from "@/components/Final";
import FakeLoader from "@/components/FakeLoader";
import SoundToggle from "@/components/SoundToggle";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <FakeLoader />
      <SoundToggle />
      <Hero />
      <RealityCheck />
      <AgeAnalytics />
      <TrophyMode />
      <MemeGrid />
      <CopiumFeed />
      <RoastReel />
      <TwoYearBan />
      <Final />
    </main>
  );
}

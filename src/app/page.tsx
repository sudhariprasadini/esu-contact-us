import Body from "@/components/body";
import ReuseAddressSection from "@/components/ReuseAddressSection";
import FormContactUs from "@/components/formContactUs";
import MapFull from "@/components/map";
import Career from "@/components/career";

export default function Home() {
  return (
    <div>
      <Body />
      <Career />
      <div className="flex lg:flex-row flex-col lg:gap-[12px] mt-10 lg:px-[180px]">
        <ReuseAddressSection
          title="Certificate and"
          highlightedWord="Transcript"
          address={{
            department: "Registrar",
            institution: "ESOFT Metro Campus",
            street: "No.03,De Fonseka Place,",
            city: "Colombo 4",
            country: "Srilanka",
          }}
          email="verifications@esoft.lk"
          phone="+94117572572"
        />
        <ReuseAddressSection
          title="Complaints and"
          highlightedWord="Student Feedback"
          address={{
            department: "SRU Division",
            institution: "ESOFT Metro Campus",
            street: "No.03,De Fonseka Place,",
            city: "Colombo 4",
            country: "Srilanka",
          }}
          email="SRU@esoft.lk"
          phone="+94117677888"
        />
      </div>
      <MapFull />
      <FormContactUs />
    </div>
  );
}

import ProjectLayout from "@/app/components/ProjectLayout";
import Section from "@/app/components/Section";
import BackLink from "@/app/components/BackLink";

export default function MVRHSPopUpStorePage() {
  return (
    <ProjectLayout
      title="MVRHS Holiday Pop-Up Store"
      subtitle="Store Manager &bull; Christmas in Edgartown &bull; Dec 2023"
      tags={[
        "Retail Operations",
        "Vendor Negotiation",
        "Project Management",
        "Marketing",
        "Financial Planning",
        "Entrepreneurship",
        "Community Engagement",
      ]}
    >
      <BackLink href="/projects" label="&larr; Back to Projects" />

      {/* Summary */}
      <Section title="">
        <p>
          As Store Manager of the MVRHS Pop-Up Store, I led the planning and
          execution of a student-run retail operation during the Christmas in
          Edgartown festival (Dec 7&ndash;10, 2023). The store operated out of
          a donated Mad Martha&apos;s ice cream parlor on North Water Street,
          selling MVRHS-branded merchandise, CTE student-made products, and
          goods from 10+ local business partners to benefit the school&apos;s
          student activity fund. I was one of four students who spearheaded the
          project from concept in September through execution in December,
          managing vendor relationships, operational planning, workforce
          recruitment, and community outreach for the island&apos;s Brazilian
          population.
        </p>
      </Section>

      <hr className="my-12 border-gray-700" />

      <Section title="The Challenge">
        <p>
          Our business teacher Paul Angelico proposed the idea of a holiday
          pop-up in September 2023. From there, students had to build a
          functioning retail operation from scratch&mdash;with no sales track
          record, limited school funding, no paid workforce, and a compressed
          timeline. The school administration initially planned five weekends
          but scaled back to a single four-day pilot after concerns about
          inventory costs and financial risk. We had to source products on
          consignment where possible, recruit volunteer workers, and still
          deliver a professional retail experience during one of the
          island&apos;s busiest tourism weekends.
        </p>
      </Section>

      <Section title="My Contributions">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Vendor outreach &amp; negotiation:</strong> Cold-emailed
            and called local businesses to establish partnerships. Negotiated a
            50/50 profit-sharing arrangement with Martha&apos;s Vineyard
            Glassworks for 100 hand-blown glass ornaments, coordinated
            pickup and return logistics, and managed post-event invoicing.
            Sourced Brazilian snacks and truffles from Vineyard Grocer on
            wholesale terms, placing orders and coordinating delivery
            timelines.
          </li>
          <li>
            <strong>Operational planning:</strong> Developed comprehensive
            task lists for opening and operating the store&mdash;covering
            layout, decorations, product display, employee shifts, and
            point-of-sale procedures. Created detailed planning documents that
            Mr. Angelico used to assign tasks across multiple business classes.
          </li>
          <li>
            <strong>Strategic proposals:</strong> Pitched ideas that shaped
            store operations, including a silent auction for high-value
            Adirondack chairs, a revenue-sharing model with Mad Martha&apos;s,
            consignment arrangements to minimize unsold inventory risk, and
            raffle promotions to drive foot traffic.
          </li>
          <li>
            <strong>Workforce recruitment:</strong> When volunteer sign-ups
            were low, coordinated directly with the National Honor Society
            advisor to distribute the sign-up sheet to NHS members, ultimately
            building a 30+ person volunteer sales team.
          </li>
          <li>
            <strong>Community inclusion:</strong> Initiated outreach to
            Vineyard Grocer to stock Brazilian products&mdash;recognizing
            that Martha&apos;s Vineyard&apos;s large Brazilian community was
            an underserved customer segment. Product listings were translated
            into Portuguese for bilingual marketing materials.
          </li>
          <li>
            <strong>Media &amp; press:</strong> Interviewed by the Vineyard
            Gazette and on MVY Radio to promote the store. Featured in the
            Gazette&apos;s coverage as the store&apos;s manager.
          </li>
        </ul>
      </Section>

      <Section title="Products &amp; Partners">
        <p>
          The store carried three categories of products: MVRHS-branded
          merchandise (sports t-shirts, hoodies, hats, tote bags, socks),
          CTE student-made goods (Adirondack chairs, automotive gift cards,
          chocolate truffles, cookies, Christmas wreaths), and third-party
          vendor products from local businesses including Martha&apos;s
          Vineyard Glassworks, Flat Point Farm, Island Bee Company,
          Ken&apos;s Vineyard Kitchen, LeRoux at Home, MV Salad, Monarch
          Studios, Vineyard Grocer, Chilmark Coffee, and Mad Martha&apos;s
          Homemade Ice Cream. Total projected inventory cost was over $8,800
          across all product lines.
        </p>
      </Section>

      <Section title="What I Learned">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Vendor negotiation:</strong> Every business has different
            constraints. MV Glassworks had never sold outside their gallery and
            had fragile product concerns&mdash;I had to address those
            objections to close the partnership. Vineyard Grocer needed clear
            order quantities and delivery timelines. Adapting the pitch to each
            vendor was essential.
          </li>
          <li>
            <strong>Operating under constraints:</strong> When the school cut
            the event from five weekends to one, we had to rethink inventory
            quantities, staffing, and marketing timelines. Working within tight
            budgets and administrative limitations forced creative problem
            solving.
          </li>
          <li>
            <strong>Workforce management:</strong> Recruiting unpaid
            volunteers requires a different approach than hiring. I learned to
            leverage existing institutional channels (NHS service hours) rather
            than relying on general announcements.
          </li>
          <li>
            <strong>Community awareness:</strong> Actively including the
            Brazilian community through product selection and bilingual
            materials broadened both our customer base and our store&apos;s
            relevance to the island&apos;s population.
          </li>
        </ul>
      </Section>

      <Section title="Project Details">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Role:</strong> Store Manager (one of four student leads)
          </li>
          <li>
            <strong>Event:</strong> Christmas in Edgartown, Dec 7&ndash;10,
            2023
          </li>
          <li>
            <strong>Location:</strong> Mad Martha&apos;s, 7 N Water St,
            Edgartown, MA
          </li>
          <li>
            <strong>Team:</strong> 4 student leads, 30+ volunteer sales staff
          </li>
          <li>
            <strong>Vendor partners:</strong> 10+ local businesses
          </li>
          <li>
            <strong>Faculty advisor:</strong> Paul Angelico, Business Teacher
          </li>
          <li>
            <strong>Press:</strong> Featured in Vineyard Gazette; interviewed
            on MVY Radio
          </li>
        </ul>
      </Section>

      <hr className="my-12 border-gray-700" />

      <p className="italic text-white">
        Completed as Store Manager during senior year at Martha&apos;s
        Vineyard Regional High School (Fall 2023).
      </p>
    </ProjectLayout>
  );
}

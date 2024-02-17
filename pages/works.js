import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import thumbConsultPro from '../public/images/works/consultprodash.png'
import thumbInvestCharts from '../public/images/works/investchartshome.png'
import thumbAlumniSocialCorner from '../public/images/works/asclogin.png'
import thumbgoodinsurance from '../public/images/works/insuranceimage2.png'
import thumbfambudget from '../public/images/works/fambudgetdash.png'
import thumbEdge from '../public/images/works/ed1.png'

import thumbdoc from '../public/images/works/ds1.png'
import thumbVeto from '../public/images/works/vetoapp1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="vetoApp" title="Veto App" thumbnail={thumbVeto}>
            Clinic Management Application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="edge360" title="Edge360" thumbnail={thumbEdge}>
            CRM Software
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="docspawn" title="DocSpawn" thumbnail={thumbdoc}>
            Batch generation of documents
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="consultpro"
            title="Consult Pro"
            thumbnail={thumbConsultPro}
          >
            Online Consultation and appointment booking application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="investcharts"
            title="Invest Charts"
            thumbnail={thumbInvestCharts}
          >
            Visualize Business and Financial Metrics
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="alumnisocialcorners"
            title="Alumni Social Corner"
            thumbnail={thumbAlumniSocialCorner}
          >
            Platform for students for exchanging information and opportunities
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="goodinsurance"
            thumbnail={thumbgoodinsurance}
            title="Good Insurance"
          >
            Private Application for Insurance Company. Multiple Forms
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="fambudget"
            thumbnail={thumbfambudget}
            title="Family Budget Application"
          >
            Local Web Application for families to manage their monthly finances
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy in Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

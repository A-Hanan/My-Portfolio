import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="InvestCharts">
    <Container>
      <Title>
        Veto App <Badge>2024 </Badge>
      </Title>
      <P>
        Clinic management app for veterniaries. Tools and analytics to help them
        digitalize their clinic, make record management easy and efficient.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          {/* <Link
            href="https://splendid-nasturtium-248ef0.netlify.app/"
            target="_blank"
          >
            https://splendid-nasturtium-248ef0.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
          Private (no link)
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, MUI, Node.js and Postgres </span>
        </ListItem>
        {/* <ListItem>
              <Meta>Blogpost</Meta>
              <Link href="https://blog.investchartsImage.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                $5/mo <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> */}
      </List>

      <WorkImage src="/images/works/vetoapp1.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp2.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp3.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp4.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp5.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp6.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp7.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp8.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp9.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp10.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp11.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp12.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp13.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp14.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp15.png" alt="vetiImage" />
      <WorkImage src="/images/works/vetoapp16.png" alt="vetiImage" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe
              src="https://www.youtube.com/embed/-qBavwqc_mY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

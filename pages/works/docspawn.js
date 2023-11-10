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
  <Layout title="ASC">
    <Container>
      <Title>
        Docspawn <Badge>2023</Badge>
      </Title>
      <P>
        Template editing and Batch documents generation application enable you
        to create documents in bulk in no time.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <p>(Url not available due to client privacy)</p>
          {/* <Link
            href="https://sparkling-strudel-a63277.netlify.app/"
            target="_blank"
          >
            https://sparkling-strudel-a63277.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PERN (React js, Node js, Express js and Postgres)</span>
        </ListItem>
        {/* <ListItem>
              <Meta>Blogpost</Meta>
              <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                $5/mo <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> */}
      </List>

      <WorkImage src="/images/works/ds1.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds2.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds3.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds4.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds5.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds6.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds7.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds8.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds9.png" alt="docspawnapi" />
      <WorkImage src="/images/works/ds10.png" alt="docspawnapi" />
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

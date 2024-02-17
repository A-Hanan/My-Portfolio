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
        Edge360 <Badge>2023</Badge>
      </Title>
      <P>
        Edge360 is lite CRM software. It is a tool to use by businesses to find
        sales leads and to keep track of their sales prospects
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

      <WorkImage src="/images/works/ed1.png" alt="edge360image" />
      <WorkImage src="/images/works/ed2.png" alt="edge360image" />
      <WorkImage src="/images/works/ed3.png" alt="edge360image" />
      <WorkImage src="/images/works/ed4.png" alt="edge360image" />
      <WorkImage src="/images/works/ed5.png" alt="edge360image" />
      <WorkImage src="/images/works/ed6.png" alt="edge360image" />
      <WorkImage src="/images/works/ed7.png" alt="edge360image" />
      <WorkImage src="/images/works/ed8.png" alt="edge360image" />
      <WorkImage src="/images/works/ed9.png" alt="edge360image" />
      <WorkImage src="/images/works/ed10.png" alt="edge360image" />
      <WorkImage src="/images/works/ed11.png" alt="edge360image" />
      <WorkImage src="/images/works/ed12.png" alt="edge360image" />
      <WorkImage src="/images/works/ed13.png" alt="edge360image" />
      <WorkImage src="/images/works/ed14.png" alt="edge360image" />
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

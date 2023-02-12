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
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Alumni Social Corner <Badge>2021</Badge>
      </Title>
      <P>
        Platform for university students to ask questions exchange information
        related to hostels, project, scholarships and internships
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://sparkling-strudel-a63277.netlify.app/"
            target="_blank"
          >
            https://sparkling-strudel-a63277.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MERN (React js, Node js, Express js and Mongodb)</span>
        </ListItem>
        {/* <ListItem>
              <Meta>Blogpost</Meta>
              <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                $5/mo <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> */}
      </List>

      <WorkImage src="/images/works/asclogin.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ascinterests.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ascquestions.png" alt="Inkdrop" />
      <WorkImage src="/images/works/aschostels.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ascinternships.png" alt="Inkdrop" />
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

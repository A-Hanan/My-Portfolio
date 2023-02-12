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
        Good Insurance <Badge>2022</Badge>
      </Title>
      <P>
        Private data collection and user management application for an insurance
        company. More than 30 complex forms.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          {/* <Link
            href="https://sparkling-strudel-a63277.netlify.app/"
            target="_blank"
          >
            https://sparkling-strudel-a63277.netlify.app/{' '}
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

      <WorkImage src="/images/works/insuranceimage1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage4.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage5.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage6.png" alt="Inkdrop" />
      <WorkImage src="/images/works/insuranceimage7.png" alt="Inkdrop" />
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

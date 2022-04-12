import { Container } from '@mantine/core'

import LinkCard from '@/components/LinkCard'
import { useGetLinksQuery } from '@/services/api'
import { User } from '@/types/User'

const Home = () => {
  const { data } = useGetLinksQuery()
  if (data) {
    return (
      <Container>
        {data.map(
          (link: {
            id: number
            country: string
            createdAt: Date
            description: string
            postedBy: User
            url: string
            voters: User[]
            title: string
          }) => (
            <Container
              key={link.id}
              mb='md'
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px'
              }}
            >
              <LinkCard
                country={link.country}
                createdAt={link.createdAt}
                description={link.description}
                id={link?.id}
                postedBy={link.postedBy}
                url={link.url}
                voters={link.voters}
                title={link.title}
              />
            </Container>
          )
        )}
      </Container>
    )
  }
}

export default Home

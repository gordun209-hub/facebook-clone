import { FC } from 'react'

import LinkCard from '@/components/LinkCard'
import { useGetUserLinksQuery } from '@/services/api'

type UserLinksProps = {
  id: number
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const UserLinks: FC<UserLinksProps> = ({ id }) => {
  const { data, isLoading } = useGetUserLinksQuery(id)
  if (data) {
    return (
      <div>
        {data.map(link => (
          <LinkCard
            key={link.id}
            country={link.country}
            createdAt={link.createdAt}
            description={link.description}
            id={link.id}
            postedBy={link.postedBy}
            url={link.url}
            voters={link.voters}
            title={link.title}
          />
        ))}
      </div>
    )
  }
}

export default UserLinks

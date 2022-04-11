import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text
} from '@mantine/core'
import { formatDistance } from 'date-fns'
import { Heart } from 'tabler-icons-react'

import useStyles from '@/styles/mantinestyles'
import { Link } from '@/types/Link'

export function BadgeCard({
  country,
  createdAt,
  description,
  postedBy,
  url,
  voters,
  title
}: Link) {
  const { classes } = useStyles()

  const date = formatDistance(new Date(createdAt), new Date())

  return (
    <Card withBorder radius='md' p='md' className={classes.card}>
      <Card.Section>
        <Image src={url} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt='md'>
        <Group position='apart'>
          <Text size='lg' weight={500}>
            {title}
          </Text>
          <Badge size='sm'>{country}</Badge>
        </Group>
        <Text size='sm' mt='xs'>
          {description}
        </Text>
        {date} ago
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt='md' className={classes.label} color='dimmed'>
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>
          {description}
        </Group>
      </Card.Section>

      <Group mt='xs'>
        <Button radius='md' style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant='default' radius='md' size={36}>
          <Heart size={18} className={classes.like} /> {voters.length}
        </ActionIcon>
        {voters.length}
        {postedBy.name}
      </Group>
      <style>
        {`
          .card {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 5px #ccc;
            background-color: #fff;
            font-size: 1.2rem;
          }
          .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .label {
            font-size: 1.2rem;
            font-weight: 500;
          }
          .like {
            color: #e74c3c;
          }

          @media (max-width: 768px) {
            .card {
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
              padding: 40px;
              border: 1px solid #ccc;
              border-radius: 5px;
              box-shadow: 0 0 5px #ccc;
              background-color: #fff;
              font-size: 1.2rem;
            }
          }

          @media (max-width: 480px) {
            .card {
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
              padding: 40px;
              border: 1px solid #ccc;
              border-radius: 5px;
              box-shadow: 0 0 5px #ccc;
              background-color: #fff;
              font-size: 1.2rem;
            }
          }


        `}{' '}
      </style>
    </Card>
  )
}
export default BadgeCard

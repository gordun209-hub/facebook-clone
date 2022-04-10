import {
  ActionIcon,
  Badge,
  Button,
  Card,
  createStyles,
  Group,
  Image,
  Text,
  useMantineTheme
} from '@mantine/core'
import { Heart } from 'tabler-icons-react'

import { Link } from '@/types/Link'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md
  },

  like: {
    color: theme.colors.red[6]
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700
  }
}))

export function BadgeCard({
  url,
  title,
  description,
  country,

  voters
}: Link) {
  const { classes } = useStyles()
  // const theme = useMantineTheme()

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
          <Heart size={18} className={classes.like} />
        </ActionIcon>
        {voters.length}
      </Group>
    </Card>
  )
}
export default BadgeCard

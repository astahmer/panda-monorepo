import { Center, Stack, styled } from '@my-monorepo/ui-lib/jsx'
import { ShadcnButton } from '../src/button'
import { ThemeToggle } from './theme-toggle'

export const App = () => {
  return (
    <Center maxW="full" maxH="full" w="full" h="full" overflow="hidden">
      <styled.div position="fixed" top="4" right="4">
        <ThemeToggle />
      </styled.div>
      <Stack p="4">
        <ShadcnButton>Click me !</ShadcnButton>
      </Stack>
    </Center>
  )
}

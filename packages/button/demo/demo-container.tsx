import { PropsWithChildren } from 'react'
import { styled, Center, Stack, StackProps } from '@my-monorepo/ui-lib/jsx'

export const DemoContainer = ({
  children,
  direction = 'row',
}: PropsWithChildren<{
  direction?: StackProps['direction']
  preset?: 'chakra' | 'shadcn'
}>) => {
  return (
    <Center h="100%" w="100%">
      <Stack direction={direction}>
        <styled.div p="4" rounded="md" bgColor="shadcn.background" color="shadcn.foreground" className="light">
          <styled.div p="3" border="1px solid token(colors.gray.400)" rounded="md">
            {children}
          </styled.div>
        </styled.div>

        <styled.div p="4" rounded="md" bgColor="shadcn.background" color="shadcn.foreground" className="dark">
          <styled.div p="3" border="1px solid token(colors.gray.300)" rounded="md">
            {children}
          </styled.div>
        </styled.div>
      </Stack>
    </Center>
  )
}

import { Box } from 'components/primitives'
import { FC, ReactNode } from 'react'
import Navbar from './navbar'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Box
        css={{
          background: '$neutralBg',
          height: '100%',
          minHeight: '100vh',
          pt: 80,
          backgroundColor: 'lightblue',
        }}
      >
        <Box css={{ maxWidth: 1920, mx: 'auto', backgroundColor: '#545454' }}>
          <Navbar />
          <main>{children}</main>
        </Box>
      </Box>
    </>
  )
}

export default Layout
